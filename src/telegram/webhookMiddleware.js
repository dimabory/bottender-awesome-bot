module.exports = (req, res, next) => {
  console.debug('Telegram webhook called:', JSON.stringify(req.body))
  next()
}