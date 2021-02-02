const waitTime = 5000
const waitInterval = 500
let currentTime = 0


let complete = () => {
    clearInterval(showProgress)
    process.stdout.clearLine()
    process.stdout.cursorTo(0)
    console.log("Done")
}
const progress = () => {
    currentTime += waitInterval
    process.stdout.clearLine()
    process.stdout.cursorTo(0)
    const p = Math.floor((currentTime/waitTime) * 100)
    process.stdout.write(` Progress ... ${p}% `)
}

const showProgress = setInterval(progress, waitInterval)
setTimeout( complete,waitTime)

