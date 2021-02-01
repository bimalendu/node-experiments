const fs = require('fs')

const dataBuffer = fs.readFileSync("1-json.json")
const JSONData = JSON.parse(dataBuffer.toString())

console.log(JSONData);