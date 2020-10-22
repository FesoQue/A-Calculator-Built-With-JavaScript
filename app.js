class Calculator{
 constructor(previousOperandTextElement, currentOperandTextElement){
    this.previousOperandTextElement = previousOperandTextElement
    this.currentOperandTextElement = currentOperandTextElement 
     
    this.clear();
 }
    
clear() {
    this.currentOperand = ""
    this.previousOperand = ""
    this.operation = undefined
}
    
delete() {
    this.currentOperand = this.currentOperand.toString().slice(0, -1)
    
} 
    
appendNumber(number) {
    if (number ==='.' && this.currentOperand.includes('.')) return
    this.currentOperand = this.currentOperand.toString() + number.toString()
}
    
chooseOperation(operation) {
    if (this.currentOperand === '') return
    if (this.previousOperand !== '') {
      this.compute()
  }
    this.operation = operation
    this.previousOperand = this.currentOperand
    this.currentOperand = ''
}
    
compute() {
        let computation
    const prev = parseFloat(this.previousOperand)
    const current = parseFloat(this.currentOperand)
    if (isNaN(prev) || isNaN(current)) return
   switch (this.operation) {
       case '+':
         computation = prev + current
         break
       case '-':
         computation = prev - current
         break
       case '*':
         computation = prev * current
         break
       case '/':
         computation = prev / current
         break
       default:
         return  
   }
    this.currentOperand = computation
    this.operation = undefined
    this.previousOperand = ''
}
    
getDisplayNumber(number){
    const stringNumber = number.toString()
    const integerDigits = parseFloat(stringNumber.split('.')[0])
    const decimalDigits = parseFloat(stringNumber.split('.')[1])
    const floatNumber = parseFloat(number)
    if (isNaN(floatNumber)) return ''
    return floatNumber.toLocaleString('en')
    let integerDisplay
    if(isNaN(integerDigits)){
         integerDisplay = ''
    } else {
        integerDisplay = integerDigits.toLocaleString('en', {
            maximumFractionDigits: 0})
    }
    if (decimalDigits != null){
        return `${integerDisplay}.${decimalDigits}`
    } else {
        return integerDisplay
    }
}
    
updateDisplay(){
    this.currentOperandTextElement.innerText =   this.currentOperand;
    if (this.operation != null) {
       this.previousOperandTextElement.innerText =   `${this.previousOperand} ${this.operation}`; 
    } else {
        this.previousOperandTextElement.innerText = ''
    }
}
    
}



//SELECTORS
const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const equalsButton = document.querySelector('[data-equals]');
const deleteButton = document.querySelector('[data-delete]');
const allClearButton = document.querySelector('[data-all-clear]');
const previousOperandTextElement = document.querySelector('[data-previous-operand]');
const currentOperandTextElement = document.querySelector('[data-current-operand]');

const myCalculator = new Calculator(previousOperandTextElement, currentOperandTextElement)

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        myCalculator.appendNumber(button.innerText)
        myCalculator.updateDisplay()
    })
})

operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        myCalculator.chooseOperation(button.innerText)
        myCalculator.updateDisplay()
    })
})

equalsButton.addEventListener('click', button => {
    myCalculator.compute()
    myCalculator.updateDisplay()
}) 

allClearButton.addEventListener('click', button => {
    myCalculator.clear()
    myCalculator.updateDisplay()
}) 

deleteButton.addEventListener('click', button => {
    myCalculator.delete()
    myCalculator.updateDisplay()
}) 

//EVENT LISTENERS


//FUNCTIONS

















































































































































































































