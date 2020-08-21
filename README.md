
# INTER-POL

INTernet POLicing- Safer Internet for everyone!

INTER-POL is a web extension to filter unsafe content using AI.

It can detect inappropriate or Not-Safe-For-Work content using state-of-the-art Computer Vision models and hide them from the user.

Phishing websites are detected automatically and they are added to a "blacklist". A popup alerts the user when they visit a phishing website.

The extension runs completely on the browser. No data is sent to servers for processing- ensuring privacy.
Impact in future-policing

Internet users are growing everyday. Now, even children rely on the Internet for their schoolwork. With this rapid increase, there has also been an increase in malicious websites, inappropriate content on the Interweb.

Children using the Internet can stumble upon inappropriate content while they were browsing for their homework.

People receiving phishing emails think they are legit and are falling into scams everyday. They are not aware or they are naive when it comes to such stuff.

It is time we did something about it.

We could manually check the Internet for such content. But how can we ensure that they are not reached to the end user?

We cannot monitor their traffic, it needs to be done from their end.

INTER-POL's web extension offers the user real-time protection without compromising their data and privacy. If they find any malicious or inapropriate content where they should not, they have an option to report it to the police.

This can reduce the manual labour of the police force by "decentralising" the task of policing and make people more involved in the process.


# Installation
[(Back to top)](#table-of-contents)

These instructions are for **developers**.

You can download for use directly from [**chrome.google.com/webstore/nsfw-filter**](https://chrome.google.com/webstore/detail/nsfw-filter/kmgagnlkckiamnenbpigfaljmanlbbhh) and [**addons.mozilla/nsfw-filter**](https://addons.mozilla.org/en-US/firefox/addon/nsfw-filter/).

Clone this repository and navigate inside the project folder and install the dependencies by running:

```
npm ci
```

After installing the dependencies, build the project by executing:

```
npm run build
```

### Adding to Chrome
[(Back to top)](#table-of-contents)

To install the developer version follow the steps below. To just use the extension download from [**chrome.google.com/webstore/nsfw-filter**](https://chrome.google.com/webstore/detail/nsfw-filter/kmgagnlkckiamnenbpigfaljmanlbbhh)

After you have finished the [Installation](#installation), open Google Chrome and open the Extension Management page by navigating to ```chrome://extensions``` or by opening Settings and clicking Extensions from the bottom left.

Enable Developer Mode by clicking the toggle switch next to Developer mode.

Click the LOAD UNPACKED button and select the extension directory(```.../dist```).

<img src="./demo/images/install_instructions.png" alt="Install Instructions">

Voila! The extension is now installed and ready to be used!

### Adding to Firefox
[(Back to top)](#table-of-contents)

To install the developer version follow the steps below. To just use the extension download from [**addons.mozilla/nsfw-filter**](https://addons.mozilla.org/en-US/firefox/addon/nsfw-filter/)

After finishing [Installation](#installation), open Firefox and open the Debug Add-ons page by navigating to ```about:debugging#/runtime/this-firefox``` or by selecting it from Settings dropdown in the add-ons page.

Click Load Temporary Add-on and select the ```manifest.json``` file from the ```.../dist``` directory.

<img src="./demo/images/install_instructions_firefox.png" alt="Install Instructions">

That's it! The extension is now ready to be used in Firefox!

# Usage

After adding the extension to Chrome/Firefox, it will light-up everytime you load a compatable website.

When a page is loaded, the extension would check for images as you scroll across the page and runs the images through the algorithm and if NSFW images are found, it is hidden automatically.

You can toggle(off/on) the extension from the ```chrome://extensions``` page in Chrome and ```about:debugging#/runtime/this-firefox``` in Firefox.

# Development
[(Back to top)](#table-of-contents)


By default the code runs in production mode. This can be disabled during development by commenting out ```tf.enableProdMode ()``` in the ```/src/background.js``` file. This is enabled by default to improve the performance.

### Dependencies
[(Back to top)](#table-of-contents)

```
"@tensorflow/tfjs": "^2.0.1",
"nsfwjs": "^2.2.0"
```

**devDependencies**

```
"parcel-bundler": "^1.12.4"
```

Run ```npm i``` to install the dependencies.

