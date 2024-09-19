
document.getElementById('btn-add-money').addEventListener('click', function (e) {
    e.preventDefault();

    const addMoney = getInputFieldValueById('field-new-amount');
    const pinNumber = getInputFieldValueById('field-pin-number');

    if (pinNumber === 1234) {

    }
    else {
        alert('Please try again to add money')
    }
})