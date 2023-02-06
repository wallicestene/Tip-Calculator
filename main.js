let billInput =  document.getElementById("billinput")
let tipInput = document.getElementById("tipInput")
let numberOfPeopleDiv = document.getElementById("numberofpeople")
let totalPerPerson = document.getElementById("totalperperson")

let numberOfPeople = Number(numberOfPeopleDiv.textContent)
const calculateBill = () =>{
    let bill = Number(billInput.value)
    let tipPercentage = Number(tipInput.value)/100
    let tipAmount = bill * tipPercentage
    let total = bill + tipAmount
    let perPersonTotal = total / numberOfPeople
    totalPerPerson.innerText = `$${perPersonTotal.toFixed(2)}`
}
 const increase = () =>{
    numberOfPeople += 1
    numberOfPeopleDiv.textContent = numberOfPeople
    calculateBill()
 }
const decrease = () => {
    if (numberOfPeople <= 1){
        alert("Hey! You can never have less than 1 person. You gotta Pay!😂😂")
        return 
    }
    numberOfPeople -= 1
    numberOfPeopleDiv.textContent = numberOfPeople
    calculateBill()
}