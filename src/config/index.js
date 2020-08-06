const key = require('./googleSheetKey')

const loadedGoogleSheetsKey = key && key.default

if (!loadedGoogleSheetsKey) {
  throw new Error(`There was an error requiring 'googleSheetKey.js'! Make sure it exists and has a default export of your google sheet key.`)
}

export default {
  appName: 'Weekly Planner',
  sheetKey: loadedGoogleSheetsKey
}
