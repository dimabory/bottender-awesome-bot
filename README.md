# Bottender Awesome Bot

This project was bootstrapped with
[Bottender](https://github.com/Yoctol/bottender) init script.

## Folder Structure
```
bottender-awesome-bot/
  node_modules/
  src/
    telegram/           # telegram bot, handler and webhook
    server.js           # server 
  .env.example          # configuration for sensitive data 
  .gitignore
  bottender.config.js   # bots configuration (uses .env vars)
  package.json
  package-lock.json
  README.md
```

### How to?

#### Make it run locally
1. Run the server: ```$ npm run dev```
2. Start http tunnel using ngrok and setup webhook: ```$ npm run ngrok```

### Examples

See more examples, please refer to
[Bottender examples](https://github.com/Yoctol/bottender/tree/master/examples).

## Available Scripts

There are two default scripts you can run:

### `npm run dev`
Run the bot in the development mode.\
It will automatically restart the bot if there are any changes in `/src` folder.\
For more information, check [nodemon's repo](https://github.com/remy/nodemon).

### `npm start`
Run the bot without being monitored.

### `npm run ngrok`
Start ngrok HTTP tunnel and then set telegram webhook.

### `npm run ngrok:http`
Start ngrok HTTP tunnel on 5000 port (please change this port if your server is running in another one).

### `npm run ngrok:kill`
Kill ngrok service.

### `npm run ngrok:url:pub`
Get the public secured ngrok hostname.

### `npm run telegram:webhook:get`
Get telegram webhook using bottender cli (`bottender telegram webhook get`)

### `npm run telegram:webhook:set`
Set telegram webhook using bottender cli (`bottender telegram webhook set --ngrok-port=4040`)
