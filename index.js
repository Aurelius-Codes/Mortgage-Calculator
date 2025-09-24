const myText = document.getElementById("myText")
const myTerm = document.getElementById("myTerm")
const myRate = document.getElementById("myRate")
const repayment = document.getElementById("repayment")
const interestOnly = document.getElementById("interestOnly")
const submit = document.getElementById("submit")
const resultElement = document.getElementById("resultElement")
let amount
let term
let rate
let monthlyRate
let numberOfPayments



document.getElementById("submit").onclick = function(){
    let amount = myText.value
    let term = myTerm.value
    let rate = myRate.value / 100
    let monthlyRate = rate / 12
    let numberOfPayments = term * 12
    let formula = monthlyRate * (1 + monthlyRate)**numberOfPayments / ((1 + monthlyRate)**numberOfPayments - 1)
    if(repayment.checked){
        resultElement.textContent = `$${amount * formula}`
    }
    else if(interestOnly.checked){
        resultElement.textContent = monthlyRate
    }
    else{
        resultElement.textContent = "Kindly Select An Option"
    }
}