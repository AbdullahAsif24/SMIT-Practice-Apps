let input = document.getElementById('input-tag')
let fromConvert = document.getElementById('unit-from')
let toConvert = document.getElementById('unit-to')
let button = document.getElementById("convert-btn")
let outputP = document.getElementById('result')
let historyP = document.getElementById('history')

let arrResult = [];

button.addEventListener('click',()=>{
    inputTemp = input.value 
    let fromUnit = fromConvert.value
    let toUnit = toConvert.value
    let result;
    
    if (fromUnit === 'Celsius' && toUnit === 'Fahrenheit') {
        result = (inputTemp * 9/5) + 32;
    }
    else if (fromUnit === 'Celsius' && toUnit === 'Kelvin') {
        result = Number(inputTemp) + 273.15;
    }
    else if (fromUnit === 'Fahrenheit' && toUnit === 'Celsius') {
        result = (inputTemp - 32) * 5/9;
    }
    else if (fromUnit === 'Fahrenheit' && toUnit === 'Kelvin') {
        result = (inputTemp - 32) * 5/9 + 273.15;
    }
    else if (fromUnit === 'Kelvin' && toUnit === 'Celsius') {
        result = inputTemp - 273.15;
    }
    else if (fromUnit === 'Kelvin' && toUnit === 'Fahrenheit') {
        result = (inputTemp - 273.15) * 9/5 + 32;
    }else{
        result = 'Please select correct unit'
    }

    if (result === 'Please select correct unit') {
        outputP.innerHTML = result
    }
    else {
        outputP.innerHTML = `Result: ${inputTemp}°${fromUnit} = ${result.toFixed(2)}°${toUnit}`
        arrResult.push(`${inputTemp}°${fromUnit} = ${result.toFixed(2)}°${toUnit}`)
    }
    
    historyP.innerHTML = ''
    arrResult.forEach((item)=>{
        historyP.innerHTML += `${item} <br/>`
    })
    
})
