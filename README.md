codeBlue2
=========

Real-time online collaborative code editor written in Node.js using the ShareJS framework.


This project is was an individual study assignment at UIUC.

Before we get started, you must have the following programs installed:
* NodeJS
* Redis
* Coffeescript
* NPM manager (This may come pre-packaged when you install NodeJS)
MongoDB

Frameworks & APIs:
- ShareJS
- Tokbox

Those listed with the asterisk is needed to start the collabortive application. MongoDB is for
the login information, but is not needed for the collaborative editor.

Quick Start 
===============

After you download the files you must run several servers. In your terminal or command prompt, 
follow these steps:

1.) In your terminal window while in your root directory, type npm install.
2.) Open another terminal window. Type redis-server
3.) Open another terminal window. Type mongod (If you install mongoDB. Not necessary)
4.) Open another terminal window. Type node app.js (If you followed the step 2, else skip to
    step 5). 
5.) cd into the 'application' folder and type: node ./lib/index.js
6.) Navigate to 127.0.0.1:8000
7.) Your browser may prompt you for access to your web cam. I am using the Tokbox api for
webRTC video chat. Click 'Approve' for the video chat to open. TokBox oftern has problems.
Some days is may work, some days it doesn't.