document.getElementById('btn-cash-out').addEventListener('click', function (e) {
    e.preventDefault();
    const amount = getInputFieldValueById('field-cash-out-amount');
    const pinNumber = getInputFieldValueById('field-cash-out-pin');

    if (pinNumber === 1234) {
        const prevBalance = getTextFieldValueById('prev-balance');
        
        if(amount > prevBalance){
            alert('Ato tk nai re')
            return
        }

        const newBalance = prevBalance - amount;
        document.getElementById('prev-balance').innerText = newBalance;

        // trans cash out
        const transContainer = document.getElementById('trans-section');
        const div = document.createElement('div');
        div.innerHTML = `<div class="bg-sky-700 text-white py-4">
                            <p>Cash out: ${amount} New balance: ${newBalance}</p>
                        </div>`
        transContainer.appendChild(div)
    }
    else {
        alert('Wrong number or password')
    }
})