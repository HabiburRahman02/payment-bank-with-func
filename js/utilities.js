
function getInputFieldValueById(id) {
    const inputValueStr = document.getElementById(id).value;
    const inputValue = parseFloat(inputValueStr);
    return inputValue;
}