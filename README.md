# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# EcoSwap-backend

## Project description

## Requirements

- Node.js v18.16.0
- Additional dependencies are described in `backend/package.json`

### Steps to Run the Project with a Specific Node.js Version:

1. Ensure Node.js Version is Installed:
   If you haven't installed the required Node.js version yet, use the following command to install it
   `nvm install v18.16.0`

2. Activate the Desired Node.js Version:
   After installing the Node.js version, activate it with the following command:
   `nvm use`

This will configure the current terminal session to use the installed Node.js version.

## Available Scripts

### Backend

1. In the `backend` directory, install dependencies:
   `npm install`

2. Start the development server:
   `npm run server`
   `npm start`

- API requests are available at `http://localhost:5000`.


### Serve the production build

1. Install `serve` globally if you haven't already:
   `npm install -g serve`

2. Build the app for production:
   `npm run build`

3. Serve the production build:
   `npx serve -s build`

The app will be served at:

- Local: `http://localhost:3000`
- Network: `http://192.168.0.177:3000`

The local address is copied to your clipboard automatically.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
