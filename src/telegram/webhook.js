module.exports = (req, res, next) => {
  console.debug('Webhook called:', JSON.stringify(req.body))
  next()
}