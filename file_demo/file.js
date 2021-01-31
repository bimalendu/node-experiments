const fs = require('fs')
fs.writeFileSync("notes.txt","this is a note")
fs.appendFileSync("notes.txt", "Hello World")
