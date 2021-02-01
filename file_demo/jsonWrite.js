const fs = require('fs')

let dataBuffer = fs.readFileSync("1-json.json")
let JSONData = JSON.parse(dataBuffer.toString())

JSONData.name = "John"
JSONData.planet = "Mars"
JSONData.age = 45

let JSONString = JSON.stringify(JSONData);
fs.writeFileSync("1-json.json",JSONString)

dataBuffer = fs.readFileSync("1-json.json")
console.log(dataBuffer.toString())



