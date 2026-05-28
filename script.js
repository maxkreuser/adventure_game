const gameScript = {
    start: {
        text: [
            "You fell asleep studying. You wake up. No one is in the library.",
            "It's night, time to leave. Do you take the stair well or the elevator?"
        ],
        answers: ["stairwell", "elevator"]
    },
    stairwell: {
        text: [
            "The stairwell has no light except for a small emergency blinking red light.",
            "You exit into the atrium. No one is there, not even the guards.",
            "You notice two dogs by the front door.",
            "Do you walk by the dogs or turn around to exit by the back?"
        ],
        answers: ["dogs", "back exit"]
    },
    dogs: {
        text: [
            "The dogs are salivating and their eyes are red.",
            "They both run and jumps to bite your face."
        ],
        gameStatus: "DEAD"
    },
    back_exit: {
        text: [
            "Before reaching the back door, a guard turns around the corner.",
            "He is walking slowly, you notice he has an open wound on his cheek.",
            "Do you ask him if he needs help or walk by quickly at a distance?"
        ],
        answers: ["help guard", "avoid guard"]
    },
    help_guard: {
        text: [
            "You ask the guard if he's ok.",
            "The guard grabs you in his arms, you struggle, he bites your neck and you vision goes red."
        ],
        gameStatus: "DEAD"
    },
    avoid_guard: {
        text: [
            "You walk by the guard and exit by the back door.",
            "You are relieved, there is a big group of people outside huddled together.",
            "You walk towards them. They all turn their heads at the same time to look at you.",
            "Their faces are all demented and injured. They all start running towards you.",
            "Do you fight them or run away?"
        ],
        answers: ["fight", "run"]
    },
    fight: {
        text: [
            "You lift your two fists in front of you.",
            "They jump all over you, everything turns black."
        ],
        gameStatus: "DEAD"
    },
    run: {
        text: [
            "You see your friend inside his car. You start running towards it.",
            "You feel your shirt pulled from behind. Many hands are grabbing your limbs."
        ],
        gameStatus: "DEAD"
    },
    elevator: {
        text: [
            "The elevator is moving down. A big loud mechanical noise happens.",
            "The elevator stops abruptly. A few seconds pass. The elevator start shaking.",
            "Do you press the help button or try to pull the doors open?"
        ],
        answers: ["help button", "pull doors"]
    },
    help_button: {
        text: [
            "A groaning, gurgling voice answers with screeching noise over it.",
            "You hear a loud snap. The elevator starts free falling."
        ],
        gameStatus: "DEAD"
    },
    pull_doors: {
        text: [
            "To your surprise the doors open. You exit on the second floor.",
            "The hallway lights are blinking, everything is quiet.",
            "You walk towards the skybridge to reach the neighboring building.",
            "You pass a stairwell. Do you take it or keep walking to the skybridge?"
        ],
        answers: ["stairwell", "skybridge"]
    }
}

const text = document.getElementById("text")
const nextBtn = document.getElementById("next-btn")
const answersBtn = document.getElementById("answers-btn-container")
const answerBtn1 = document.getElementById("answer-btn-1")
const answerBtn2 = document.getElementById("answer-btn-2")
const status = document.getElementById("game-status")
const retryBtn = document.getElementById("retry-btn")

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

    if (Object.hasOwn(path, "answers")) {
        if (line === path.text.length - 1) {
            nextBtn.style.display = "none"
            answersBtn.style.display = "inline"
            answerBtn1.textContent = path.answers[0]
            answerBtn2.textContent = path.answers[1]
        } 
    } else if (Object.hasOwn(path, "gameStatus")) {
            if (line === path.text.length - 1) {
                nextBtn.style.display = "none"
                answersBtn.style.display = "none"
                status.style.display = "block"
                status.textContent = path.gameStatus
                retryBtn.style.display = "block"
            }
    }
    
    text.textContent = path.text[line]
    line++
})

function pathBtnHandler(btn) {
    const newPath = btn.textContent.replace(" ", "_")
    path = gameScript[newPath]
    console.log(path)
    line = 0
    text.textContent = path.text[line]
    line++

    nextBtn.style.display = "inline"
    answersBtn.style.display = "none"
}

answerBtn1.addEventListener("click", () => {
    pathBtnHandler(answerBtn1)
})

answerBtn2.addEventListener("click", () => {
    pathBtnHandler(answerBtn2)
})

retryBtn.addEventListener("click", () => {
    path = gameScript.start
    line = 0
    text.textContent = "Your adventure begins now..."
    nextBtn.style.display = "block"
    status.style.display = "none"         
    retryBtn.style.display = "none"
})
