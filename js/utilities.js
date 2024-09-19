
function getInputFieldValueById(id) {
    const inputValueStr = document.getElementById(id).value;
    const inputValue = parseFloat(inputValueStr);
    return inputValue;
}

function getTextFieldValueById(id) {
    const textFieldValueStr = document.getElementById(id).innerText;
    const textFieldValue = parseFloat(textFieldValueStr);
    return textFieldValue;
}