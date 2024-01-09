const convertButton = document.querySelector(".convert-button")

function convertValues (){
    const inputCurrencyValue = document.querySelector(".input-currency").value
    
    const euroToday = 5.2 
    
    const convertedValue = inputCurrencyValue / euroToday 

    console.log(convertedValue)
}


convertButton.addEventListener("click", convertValues)
