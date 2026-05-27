const gameScript = {
    start: {
        text: [
            "You fell asleep studying. You wake up. No one is in the library.",
            "It's night, time to leave. Do you take the stair well or the elevator?"
        ],
        answers: ["stair well", "elevator"]
    },
    stair_well: {
        text: [
            "The stair well has no light except for a small emergency blinking red light.",
            "You exit into the atrium. No one is there, not even the guards.",
            "You notice two dogs by the front door.",
            "Do you walk by the dogs or turn around to exit by the back?"
        ],
        answers: ["dogs", "back_exit"]
    }
}

const text = document.getElementById("text")
const nextBtn = document.getElementById("next-btn")
const answersBtn = document.getElementById("answers-btn-container")
const answerBtn1 = document.getElementById("answer-btn-1")
const answerBtn2 = document.getElementById("answer-btn-2")

let path = gameScript.start
let line = 0

nextBtn.addEventListener("click", () => {

    // Make 'Next' and 'Answer' buttons alternate display visibility
    // if (Object.hasOwn(gameScript[path], "answers")) {
    //     console.log("method works")
    //     nextBtn.style.display = "none"
    //     answersBtn.style.display = "inline"
    //     answerBtn1.textContent = gameScript[path].answers[0]
    //     answerBtn2.textContent = gameScript[path].answers[1]
    // } 
    // else {
    //     nextBtn.style.display = "inline"
    //     answersBtn.style.display = "none"
    // }

    console.log(path.text.length)

    if (line === path.text.length - 1) {
        nextBtn.style.display = "none"
        answersBtn.style.display = "inline"
        answerBtn1.textContent = path.answers[0]
        answerBtn2.textContent = path.answers[1]
    }
    
    text.textContent = path.text[line]
    line++
})

answerBtn1.addEventListener("click", () => {
    const newPath = answerBtn1.textContent.replace(" ", "_")
    path = gameScript[newPath]
    console.log(path)
    line = 0
    text.textContent = path.text[line]
    line++

    nextBtn.style.display = "inline"
    answersBtn.style.display = "none"
})

answerBtn2.addEventListener("click", () => {

})



