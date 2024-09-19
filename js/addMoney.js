
document.getElementById('btn-add-money').addEventListener('click', function (e) {
    e.preventDefault();

    const addMoney = getInputFieldValueById('field-new-amount');
    console.log('input', addMoney)
})