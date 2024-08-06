
# Marvel App

This repository includes the technical test of Marvel characters list and details page implemented in React.js


## Installation

Install the marvel-app with git clone

```bash
  git clone https://github.com/BryanPlaces/marvel-app.git
  cd marvel-app
  
  npm install
```

After this, to run the proyect you will use:
```bash
  npm run start
```

You should see the app running on port 3000. To watch it you will need to go to:
```bash
  http://localhost:3000
```

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file.

`REACT_APP_PUBLIC_KEY` // Marvel API public key

`REACT_APP_PRIVATE_KEY` // Marvel API private key

`EACT_APP_BASE_URL`

`REACT_APP_USE_MOCK_DATA`,

You can check .env.example to get the variables to add on the .env file.

## Running Tests

To run tests, run the following command

```bash
  npm run test
```
## Known Issues

### Issues with the Marvel API
I encountered issues when using the Marvel API as the requests were taking a long time to process, sometimes even minutes. I implemented mock data to be able to work on the app. To use the mock data, I use the variable

`USE_MOCK_DATA=true`
