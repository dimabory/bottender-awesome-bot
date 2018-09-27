const config            = require('../bottender.config.js')
const {createServer}    = require('bottender/restify')
const {create, webhook} = require('./telegram')
const SERVER_PORT       = process.env.PORT || 5000

const bot = create(config.telegram.accessToken)

const server = createServer(bot, config)

server.use(webhook)

server.listen(SERVER_PORT, () => {
  console.info(`Server is running on ${SERVER_PORT} port`)
})