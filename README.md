
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

Taking it ahead

Some of the plans we did not have time to implement and that we could implement in the future.

    AI to detect fake(photoshopped) images- This would ensure that fake images that can cause serious issues are not spread across social media. People can see if the image has been doctored and can report it to the police. This can enable the police to take action rapidly.

    Web app for police- The extension works on the user's end. But what if we could monitor the social media sites for such content? An automated web app that can check through social media sites and report malicious content automatically using Computer Vision and NLP models.

    Fake News detection- Fake news spreads faster than a wildfire. What if we can check text in social media posts and check if they are authentic? Some contraints found on this is that there is now extensive research going on in processing of native languages like Malayalam.

Installation and Usage

Clone the repo and in the folder run:

npm ci

After the dependencies have been installed run:

npm run build

After you have finished the Installation, open Google Chrome and open the Extension Management page by navigating to chrome://extensions or by opening Settings and clicking Extensions from the bottom left.

Enable Developer Mode by clicking the toggle switch next to Developer mode.

Click the LOAD UNPACKED button and select the extension directory(.../dist).
