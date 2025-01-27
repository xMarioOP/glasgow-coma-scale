let eyeValue = 1
let verbalValue = 1
let motorValue = 1
let total = eyeValue + verbalValue + motorValue
const eyeBtn = document.querySelectorAll(".eye-response-score .btn")
const verbalBtn = document.querySelectorAll(".verbal-response-score .btn")
const motorBtn = document.querySelectorAll(".motor-response-score .btn")
const noneBtns = document.querySelectorAll(".none-btn")

const eyeEl = document.getElementById("eye")
const verbalEl = document.getElementById("verbal")
const motorEl = document.getElementById("motor")

const totalEl = document.getElementById("total")

const btnActivation = (btnsGroup, btn) => {
    btnsGroup.forEach(btn => {
        btn.style.backgroundColor = "#508C9B"
    })
    btn.style.backgroundColor = "#134B70"
}

const totalScore = (groupValue, value) => {
    total -= groupValue  
    total += value  
    totalEl.innerText = `Total: ${total}`
}

const scoreValidation = (btnsGroup, btn, index, resultBox, groupValue, idGroupValue) => {
    const value = Number(btnsGroup.length) - index
    resultBox.innerText = `${btn.innerText}: +${value}`
    
    totalScore(groupValue, value)
    
    if (idGroupValue === 1) {
        eyeValue = value
    } else if(idGroupValue === 2) {
        verbalValue = value
    } else {
        motorValue = value
    }
}


const activateNoneBtns = () => {
    noneBtns.forEach(btn => {
        btn.style.backgroundColor = "#134B70"
    })
    
    eyeBtn.forEach((btn, i) => {
        scoreValidation(eyeBtn, btn, i, eyeEl, eyeValue, 1)
    })
    verbalBtn.forEach((btn, i) => {
        scoreValidation(verbalBtn, btn, i, verbalEl, verbalValue, 2)
    })
    motorBtn.forEach((btn, i) => {
        scoreValidation(motorBtn, btn, i, motorEl, motorValue, 3)
    })
}

activateNoneBtns()


eyeBtn.forEach((button, index) => button.addEventListener("click", function () {
    btnActivation(eyeBtn, button)
    scoreValidation(eyeBtn, button, index, eyeEl, eyeValue, 1)
}))

verbalBtn.forEach((button, index) => button.addEventListener("click", function () {
    btnActivation(verbalBtn, button)
    scoreValidation(verbalBtn, button, index, verbalEl, verbalValue, 2)
}))

motorBtn.forEach((button, index) => button.addEventListener("click", function () {
    btnActivation(motorBtn, button)
    scoreValidation(motorBtn, button, index, motorEl, motorValue, 3)
}))