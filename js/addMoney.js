
document.getElementById('btn-add-money').addEventListener('click', function (e) {
    e.preventDefault();

    const addMoney = getInputFieldValueById('field-new-amount');
    const pinNumber = getInputFieldValueById('field-pin-number');

    if (pinNumber === 1234) {
        const prevBalance = getTextFieldValueById('prev-balance')
        const newBalance = prevBalance + addMoney;
        document.getElementById('prev-balance').innerText = newBalance;

        // added trans history
        const transContainer = document.getElementById('trans-container');
        const p = document.createElement('p');
        p.classList.add('bg-teal-700', 'font-bold', 'text-white', 'py-3')
        p.innerText = `Add amount: ${addMoney} New balance: ${newBalance}`
        transContainer.appendChild(p)
    }
    else {
        alert('Please try again to add money')
    }
})