const CONFIG = require('./../_config/atoms')(__filename)
const DEFAULT = {
  ATOM_NAME: CONFIG.ATOM_NAME,
  ATOM_PATH: CONFIG.ATOM_PATH,
  VALIDATE: false
}
const PROPS = {
  type: Boolean,
  required: true,
  default: true
}
const atomConfig = Object.assign({}, DEFAULT, PROPS)

module.exports = require('./../_factories/atom')(atomConfig)



