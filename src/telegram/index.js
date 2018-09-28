const {TelegramBot, FileSessionStore} = require('bottender')

module.exports = {
  create (accessToken) {
    const handler = require('./handler')
    return new TelegramBot({
      accessToken:  accessToken,
      sessionStore: new FileSessionStore(),
    })
      .onEvent(handler)
  },
  webhookMiddleware: require('./webhookMiddleware')
}
