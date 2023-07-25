let num1 = null
let num2 = null
let operationType = null

// add event listener to the operation buttons (orange buttons)
let operation_buttons = document.getElementsByClassName("operationButton")
for (let i = 0; i < operation_buttons.length; i++) {
    let type = operation_buttons[i].innerHTML
    operation_buttons[i].addEventListener('click', () => get_operation(type))
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

// add event listener to delete button
let delete_button = document.getElementById("delete")
delete_button.addEventListener('click', pop)




// the (fun)c stuffs
function evaluate() {
    let answer
    if (operationType == '+') {
        answer = num1 + num2
    }
    if (operationType == '–') {
        answer = num1 - num2
    }
    return answer
}


function get_operation(type) {
    value = Number(document.getElementsByClassName('evaluation')[0].innerText)
    operationType = type
    console.log(type)
    if (num1 != null && num2 != null && operationType != null) {
        document.getElementsByClassName("evaluation")[0] = String(evaluate())
        num2 = evaluate()
        num1 = null
    }
    else if (num1 == null && num2 == null) { 
        num1 = value
        document.getElementsByClassName("evaluation")[0].innerHTML = ''
    }
    else if (num1 != null && num2 == null) { 
        num2 = value
    }
    console.log(`num1 = ${num1} num2 = ${num2} operation: ${operationType}`)

}

function number_button(value) {
    console.log(value)
    change_display_value(value)
}

function change_display_value(concatString) {
    value = document.getElementsByClassName("evaluation")[0]
    if (value.innerText.includes('.') && concatString == '.') {
        return
    }
    else {
        value.innerText += concatString
        console.log(`eval length: ${value.innerText.length}`)
    }
    }


function clear() {
    document.getElementsByClassName("evaluation")[0].innerHTML = ''
    num1 = null
    num2 = null
    operationType = null
}

function pop() {
    value = document.getElementsByClassName("evaluation")[0]
    value.innerText = value.innerText.substring(0, value.innerText.length - 1)
}