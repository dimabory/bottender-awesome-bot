const util = require('util')
const exec = util.promisify(require('child_process').exec)

;(async function () {
  const {stdout,} = await exec(`npm run --prefix ${process.env.INIT_CWD} telegram:webhook:set:w`)
  console.info(stdout)
})()

module.exports = (req, res, next) => {
  console.debug('Webhook called:', JSON.stringify(req.body))
  next()
}