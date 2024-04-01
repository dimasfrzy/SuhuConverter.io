function convertTemperature() {
    var inputTemperature = parseFloat(document.getElementById("inputTemperature").value);
    var fromUnit = document.getElementById("fromUnit").value;
    var toUnit = document.getElementById("toUnit").value;
    var outputTemperature;

    if (fromUnit === "celcius") {
        if (toUnit === "fahrenheit") {
            outputTemperature = (inputTemperature * 9/5) + 32;
        } else if (toUnit === "kelvin") {
            outputTemperature = inputTemperature + 273.15;
        } else {
            outputTemperature = inputTemperature;
        }
    } else if (fromUnit === "fahrenheit") {
        if (toUnit === "celcius") {
            outputTemperature = (inputTemperature - 32) * 5/9;
        } else if (toUnit === "kelvin") {
            outputTemperature = (inputTemperature - 32) * 5/9 + 273.15;
        } else {
            outputTemperature = inputTemperature;
        }
    } else if (fromUnit === "kelvin") {
        if (toUnit === "celcius") {
            outputTemperature = inputTemperature - 273.15;
        } else if (toUnit === "fahrenheit") {
            outputTemperature = (inputTemperature - 273.15) * 9/5 + 32;
        } else {
            outputTemperature = inputTemperature;
        }
    }

    document.getElementById("outputTemperature").textContent = outputTemperature.toFixed(2);
}
