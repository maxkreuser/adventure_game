// Story script for entire game. Took me a lot of time to figure the structure to work with
// event listener functions. Really proud of myself with this one.
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
    },
    skybridge: {
        text: [
            "On the skybridge, you feel a wind current and see paper sheets floating in the air.",
            "A window is broken. You look outside and see a group of people.",
            "They are leaning over an unconscious person and biting his body.",
            "Panic! You run to the new building. There you see your favorite teacher.",
            "He asks if you need help. Do you say 'yes' or 'no'?"
        ],
        answers: ["yes", "no"]
    },
    yes: {
        text: [
            "He says not to worry. You calm down.",
            "You feel a painful pinch in your neck. You see a syringe and your teacher smiling. Your vision goes red."
        ],
        gameStatus: "DEAD"
    },
    no: {
        text: [
            "You run towards the large staircase and hear a loud growling.",
            "Going down the staircase, a large creature appears at the bottom.",
            "It is third pig, third wolf, third man wearing a torn up guard uniform.",
            "Do you jump down from the side or use your phone?"
        ],
        answers: ["jump", "phone"]
    },
    jump: {
        text: [
            "As you land you break your ankle and can't get up.",
            "The creature appears above you. It opens its mouth. Green red blood drips onto your face."
        ],
        gameStatus: "DEAD"
    },
    phone: {
        text: [
            "You take your Samsung Galaxy Note 7, open 20+ apps until smoke come out of it.",
            "You throw your phone onto the create as the phone explodes.",
            "Parts of the creature fall from the air, you run to the outside door.",
            "You see your friends car. You enter it and speed away."
        ],
        gameStatus: "WIN - CONGRATULATIONS"
    }
}

// Storing the HTML elements inside JS variables
const text = document.getElementById("text")
const nextBtn = document.getElementById("next-btn")
const answersBtn = document.getElementById("answers-btn-container")
// const answerBtn1 = document.getElementById("answer-btn-1")
// const answerBtn2 = document.getElementById("answer-btn-2")
const status = document.getElementById("game-status")
const retryBtn = document.getElementById("retry-btn")

// Variables holding game's current progress/location
let currentState = gameScript.start
let line = 0

// --------------------------------------
// Event Listeners and Functions

/**
 * This helper function is built for the assignment requirements.
 * It creates and inserts from the start the answer buttons and their
 * appearance changes by toggling their display property. The content
 * of the text is also changed through event listeners.
 * @param {int} number - assigns a number to the button id attribute 
 */
function addAnswerButton(number) {
    const button = document.createElement("button")
    button.setAttribute("id", `answer-btn-${number}`)
    button.style.marginRight = "6px"
    button.style.marginLeft = "6px"
    answersBtn.appendChild(button)
}

addAnswerButton(1)
addAnswerButton(2)

const answerBtn1 = document.getElementById("answer-btn-1")
const answerBtn2 = document.getElementById("answer-btn-2")

/**
 * Renders on the UI the text content based on the object holding
 * the current story content. It displays on line of text at a time
 * for the current scenario and will display the answer/choices buttons
 * or the game results at the end of the object content.
 * @param {object} currentState - location of the story line
 */
function renderQuestion(currentState) {
    if (line === currentState.text.length - 1) {
        if (Object.hasOwn(currentState, "answers")) {
            nextBtn.style.display = "none"
            answersBtn.style.display = "block"
            answerBtn1.textContent = currentState.answers[0]
            answerBtn2.textContent = currentState.answers[1]
        } 
        else if (Object.hasOwn(currentState, "gameStatus")) {
            nextBtn.style.display = "none"
            answersBtn.style.display = "none"
            status.style.display = "block"
            status.textContent = currentState.gameStatus
            if (status.textContent === "DEAD") {
                retryBtn.style.display = "inline-block"
            }
        }
    }
    
    text.textContent = currentState.text[line]
    line++
}

/**
 * Next Button Event Listener & Function
 * Move the story script forward.
 * Also manipulated the button displays when a decision must be taken
 * or when the game ends.
 */
nextBtn.addEventListener("click", () => {
    renderQuestion(currentState)
})

/**
 * Function For Answer Buttons - Path Decision
 * Takes text content inside button element to assign value for new game path.
 * Also manipulates display of buttons on the DOM.
 * @param {object} btn - the HTML button element representing a path/decision in the game.
 */
function pathBtnHandler(btn) {
    const newPath = btn.textContent.replace(" ", "_")
    currentState = gameScript[newPath]
    line = 0
    text.textContent = currentState.text[line]
    line++

    nextBtn.style.display = "inline"
    answersBtn.style.display = "none"
}

/**
 * Answer Buttons Event Listeners
 */
answerBtn1.addEventListener("click", () => {
    pathBtnHandler(answerBtn1)
})

answerBtn2.addEventListener("click", () => {
    pathBtnHandler(answerBtn2)
})

/**
 * Retry Button Event Listener & Function
 * Re-initializes the game status and the interface display.
 */
retryBtn.addEventListener("click", () => {
    currentState = gameScript.start
    line = 0
    text.textContent = "Your adventure begins now..."
    nextBtn.style.display = "inline-block"
    status.style.display = "none"         
    retryBtn.style.display = "none"
})
