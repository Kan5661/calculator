let displayedValue
let num1, num2, operationType

// add event listener to the operation buttons (orange buttons)
let operation_buttons = document.getElementsByClassName("operationButton")
for (let i = 0; i < operation_buttons.length; i++) {
    let OperationType = operation_buttons[i].innerHTML
    operation_buttons[i].addEventListener('click', () => get_operation(OperationType))
}

// add event listener to number buttons including decimal (grey buttons)
let number_buttons = document.getElementsByClassName("number")
for (let i = 0; i < number_buttons.length; i++) {
    let value = number_buttons[i].innerHTML 
    number_buttons[i].addEventListener('click', () => number_button(value))
}

// add event listener to clear button
let clear_button = document.getElementById("clear")
clear_button.addEventListener('click', clear)

function get_operation(type) {
    console.log(type)
}

function number_button(value) {
    console.log(value)
    change_display_value(value)
}

function change_display_value(concatString) {
    value = document.getElementsByClassName("evaluation")[0]
    value.innerText += concatString
    console.log(`eval length: ${value.innerText.length}`)
}

function clear() {
    document.getElementsByClassName("evaluation")[0].innerText = ''
}