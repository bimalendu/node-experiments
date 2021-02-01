const chalk = require('chalk')
const yargs = require('yargs')

yargs.version("1.0.0")

yargs.command({
    command: "add",
    describe: "Add a note",
    builder: {
        title: {
            describe: "Note title",
            demandOption: true,
            type: "string"
        },
        body: {
            describe: "Note body",
            demandOption: true,
            type: "string"
        }
    },
    handler: function(argv){
        console.log("Title: ",argv.title)
        console.log("Body: ",argv.body)
    }
})

yargs.command({
    command: "read",
    describe: "Read a note",
    handler: function(){
        let msg = chalk.green.bold.inverse("Read a note successfully")
        console.log(msg)
    }
})

yargs.command({
    command: "list",
    describe: "List all notes",
    handler: function(){
        let msg = chalk.green.bold.inverse("Listed all notes successfully")
        console.log(msg)
    }
})

yargs.command({
    command: "remove",
    describe: "Remove a note",
    handler: function(){
        let msg = chalk.green.bold.inverse("Removed a note successfully")
        console.log(msg)
    }
})

yargs.parse()