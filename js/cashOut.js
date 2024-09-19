document.getElementById('btn-cash-out').addEventListener('click', function (e) {
    e.preventDefault();
    const amount = getInputFieldValueById('field-cash-out-amount');
    const pinNumber = getInputFieldValueById('field-cash-out-pin');

    if (pinNumber === 1234) {
        const prevBalance = getTextFieldValueById('prev-balance');
        const newBalance = prevBalance - amount;
        document.getElementById('prev-balance').innerText = newBalance;
    }
    else {
        alert('Wrong number or password')
    }
})