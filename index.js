const celsiusE1 = document.getElementById("Celsius");
const fahrenheitE1 = document.getElementById("Fahrenheit");
const kelvinE1 = document.getElementById("Kelvin");

function computeTemp(){
    const currentValue = +event.target.value;

    switch (event.target.name){
        case "Celsius":
            kelvinE1.value = currentValue + 273.15;
            fahrenheitE1.value = currentValue * 1.8 + 32;
            break;
        
        case "Fahrenheit":
            
            celsiusE1.value = (currentValue - 32) / 1.8;
            kelvinE1.value = {currentValue - 32} / 1.8 + 273.15;
            
        case "Kelvin":
            celsiusE1.value = currentValue - 273.15;
            fahrenheitE1.value = (currentValue - 273.15) * 1.8 + 32;

       
        default:
            break;
    }


}