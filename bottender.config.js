const {TELEGRAM_ACCESS_TOKEN} = require('dotenv-safe').config().parsed

module.exports = {
  telegram: {
    accessToken: TELEGRAM_ACCESS_TOKEN
  }
}