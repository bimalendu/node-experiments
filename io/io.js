let questions = ["Whats your name ?","Whats your age ?", "Where do you live ?"]

let askQuestion = (index = 0) => {
    process.stdout.write(`\n ${questions[index]} > `)
}

let answers = []

askQuestion()

process.stdin.on("data",(data) => {
    answers.push(data.toString().trim());
    if(answers.length < questions.length){
        askQuestion(answers.length)
    }else{
        process.exit()
    }
})

process.on("exit", () => {
    let [name,age,location] = answers
    process.stdout.write(`
       \n  Hello ${name}. You are ${age} years old and you live in ${location} \n
    `);
})