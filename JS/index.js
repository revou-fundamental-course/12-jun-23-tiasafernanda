function convertTemperature(event) {
    // to prevent the page reload, to ensure the conversion is performed and the result are displayed without the page refreshing.
    event.preventDefault();

    // declare the variable that use to calculate
    var inputTemp = parseFloat(document.getElementById("inputTemp").value);
    var inputUnit = document.getElementById("inputUnit").value;
    var outputTemp;
    var explanation;
    var formula;

    // using if else to determine the input unit is celsius or fahrenheit and perform the corresponding temperature conversion.
    // using toFixed() method to round the result to two decimal.
    if (inputUnit === "celsius") {
        outputTemp = (inputTemp * 9) / 5 + 32;
        explanation =
            inputTemp +
            " degrees Celsius is equal to " +
            outputTemp.toFixed(2) +
            " degrees Fahrenheit.";
        formula = "Formula: (°C x 9/5) + 32";
    } else if (inputUnit === "fahrenheit") {
        outputTemp = ((inputTemp - 32) * 5) / 9;
        explanation =
            inputTemp +
            " degrees Fahrenheit is equal to " +
            outputTemp.toFixed(2) +
            " degrees Celsius.";
        formula = "Formula: (°F - 32) x 5/9";
    }

    // this is to display the result the conversion with the tag with specific id.
    document.getElementById("outputTemp").textContent = outputTemp.toFixed(2);
    document.getElementById("outputExplanation").textContent = explanation;
    document.getElementById("outputFormula").textContent = formula;
}

//  adds an event listener to the form element. It listens for the "submit" event, which occurs when the user submits the form by clicking a submit button or pressing the enter key.
var form = document.getElementById("converter");
form.addEventListener("submit", convertTemperature);
