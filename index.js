
let inputT = document.getElementById("inptxt");
let toF = document.getElementById("toferenheit");
let toC = document.getElementById("tocelcius");
let result;

function toFehrenheit(x) {
    return (x * 9 / 5) + 32;
}
function toCelsius(x) {
    return (x - 32) * 5 / 9;
}
document.getElementById("cbtn").onclick = function () {
    let inputValue = parseFloat(inputT.value);
    if (toF.checked) {
        result = toFehrenheit(inputValue);
    } else if (toC.checked) {
        result = toCelsius(inputValue);

    } else {
        document.getElementById("outputtxt").innerHTML = "Please choose a unit";
    }
    document.getElementById("outputtxt").innerHTML = "Result: " + result.toFixed(2);
}

