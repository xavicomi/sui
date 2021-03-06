const LOCK_FILE_NAME = 'package-lock.json'

/**
 * @returns {Object}
 */
module.exports = {
  file: LOCK_FILE_NAME,
  phoenixCommand: `npx rimraf node_modules && npx rimraf ${LOCK_FILE_NAME} && npm install --prefer-online`,
  installCommand: `npx rimraf ${LOCK_FILE_NAME} && npm install`
}
