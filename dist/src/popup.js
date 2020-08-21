'use strict';

// Detect sites that are likely to be phishing and display it in the popup



//maintained list
var malicious = [
    "www.youtube.com",
];



var flag = 0;
var testurl = "";
document.addEventListener('DOMContentLoaded', function () {
    chrome.tabs.query({ active: true, lastFocusedWindow: true }, tabs => {
        let url = tabs[0].url;


        ////////////////To get the hostname//////////////
        var tab1 = tabs[0];
        var url1 = new URL(tab1.url);
        var domain = url1.hostname;
        /////////////////////////////////////////////////

        //var t = "googlе.com"; ////////test variable for malicious 'e'
        var expression = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
        var regex = new RegExp(expression);
        //var domain = url.hostname;
        flag = malicious.indexOf(domain);
        if (url.match(regex)) {
            if(flag>=0) 
            {
                chrome.tabs.executeScript(null,
                    { code: "document.body.style.border='10px solid red'" });
                chrome.tabs.executeScript(null,
                    { code: "document.body.style.color='red'" });
                chrome.tabs.executeScript(null,
                    { code: "console.log('Might wanna relook')" });
                document.getElementById("safe").innerHTML = "Site is Not Safe"
                document.getElementById("safe").style.background = "#ff0000";

            }
            else{

                chrome.tabs.executeScript(null,
                    { code: "console.log('Legit site')" });
                    // chrome.tabs.executeScript(null,
                    //     { code: "console.log(" + url + ")" });
                document.getElementById("safe").innerHTML = "Site is Safe"
                document.getElementById("safe").style.background = "#16c444";
            }
            
        } else {
            chrome.tabs.executeScript(null,
                { code: "document.body.style.border='10px solid red'" });
            chrome.tabs.executeScript(null,
                { code: "document.body.style.color='red'" });
            chrome.tabs.executeScript(null,
                { code: "console.log('Might wanna relook')" });
            document.getElementById("safe").innerHTML = "Site is Not Safe"
            document.getElementById("safe").style.background = "#ff0000";
        }
        chrome.tabs.executeScript(null,
            { code: "console.log('" + domain + "')" });
           
    });
    var y = document.getElementById("safe");
    y.addEventListener("click",openIndex);
    y.addEventListener("mouseover",visi);
    y.addEventListener("mouseout",invisi)
});
document.onmousedown= diselect;
function diselect(){
    return false;
}
function openIndex(){
    chrome.tabs.create({active:true, url: "../phishing.html"});
}
function visi(){
    document.getElementById("ttp").style.visibility = "visible";
}
function invisi(){
    document.getElementById("ttp").style.visibility = "hidden";
}
