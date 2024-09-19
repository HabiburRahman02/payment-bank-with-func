
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

function showSectionById(id){
    document.getElementById('add-money-form').classList.add('hidden')
    document.getElementById('cash-out-form').classList.add('hidden')
    document.getElementById('trans-section').classList.add('hidden')

    // remove hidden class
    document.getElementById(id).classList.remove('hidden')
}