const config                         = require('../bottender.config.js')
const {createServer, registerRoutes} = require('bottender/restify')
const {create, webhookMiddleware}    = require('./telegram')
const SERVER_PORT                    = process.env.PORT || 5000

const bot = create(config.telegram.accessToken)

const server = createServer(bot, config)

registerRoutes(server, bot, {
  path: '/telegram',
  webhookMiddleware
})

server.listen(SERVER_PORT, () => {
  console.info(`Server is running on ${SERVER_PORT} port`)
})