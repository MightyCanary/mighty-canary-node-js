# Mighty Canary NodeJS Example
This project contains a sigle web page demonstration of using Javascript to update a Mighty Canary Sentry of your choosing. You can make the Sentry happy or sick. For this to work properly, you will also need a connected Canary to display so that you can see the state change. Follow the instructions below and then augment this example to try out other concepts in our [help documentation](https://help.mightycanary.com).

## Getting started
To get things setup, we need to clone this repository, edit the demo to reflect your account Mighty Canary account settings, and then also have npm install dependencies.

1. clone this repository (in a shell window)

    `git clone https://github.com/MightyCanary/mighty-canary-node-js.git`

    and then change directories into `mighty-canary-node-js`

2. edit the file `server.js` and at the top, enter your Mighty Canary API Token and the url's for a Sentry and connected Canary that you will be using. Our sandbox ones that we built for you automatically are a good starting point since they are already connected.

3. get a Node server running locally:

- `npm install` to install all required dependencies
- `npm start` to start the local server 
- and then navigate to the demo page in your browser

    [http://localhost:3000](http://localhost:3000)

in your shell console, there will be output as the links are clicked on this demonstration.

Note: if you then make changes to anything in this project, rerun `npm install`, then run `npm start` and refresh your browser page.

## Alternatively

To quickly try out this repo in the cloud, you can [![Try it on Glitch](https://cdn.glitch.com/2703baf2-b643-4da7-ab91-7ee2a2d00b5b%2Fremix-button.svg)](https://faceted-typhoon-hovercraft.glitch.me/)

## Code Overview

### Dependencies

- [expressjs](https://github.com/expressjs/express) - The server for handling and routing HTTP requests

### Application Structure

- `server.js` - The entry point to our application.
- `views/index.html` - the UI for our application.

## Next Steps
As mentioned above, you can edit this example with other concepts that we cover in our [help documentation](https://help.mightycanary.com).

If you have any issues, ping us on slack which you can join at the top of the documentation.

Happy Canarying!
