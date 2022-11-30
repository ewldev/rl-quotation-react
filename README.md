# A quotation system to generate instant service costs based on multiple selections by users

Front end created with React

React Hooks for state management

Back end created with Node and Express

Utilitzing Sendgrid to send notifications to site administrator with captured user info and selections


steps to run this application locally:

1) clone this repo: 
git clone https://github.com/ewldev/rl-quotation-react.git

2) cd to client, run npm install to install client modules

3) cd .. back to root, run npm install to install server modules

4) run: npm run dev to load application on browser http://localhost:3000/


A note about the following error when starting the app after the app is updated:

nodemon] starting `node server.js`
[0] node:events:505
[0]       throw er; // Unhandled 'error' event
[0]       ^
[0] 
[0] Error: listen EADDRINUSE: address already in use :::8080

the fix is to delete server's node_modules folder and run npm install to reinstall server modules.