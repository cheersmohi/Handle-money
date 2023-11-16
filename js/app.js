
function getInputValue(inputid) {

    const input = document.getElementById(inputid);
    const inputAmountText = input.value;
    const amountValue = parseFloat(inputAmountText);
    input.value = '';
    return amountValue;
}






document.getElementById('calculate-btn').addEventListener('click', function () {


    // const incomeInput = document.getElementById('income-input');
    // const incomeAmountString = incomeInput.value;
    // const incomeTextAmount = parseFloat(incomeAmountString);
    const incomeTextAmount = getInputValue('income-input');
    // incomeInput.value = '';


    const foodField = document.getElementById('food-input');
    const foodAmountString = foodField.value;
    const foodAmountText = parseFloat(foodAmountString);

    const rentField = document.getElementById('rent-input');
    const rentAmountString = rentField.value;
    const rentAmountText = parseFloat(rentAmountString);

    const clothField = document.getElementById('cloth-input');
    const clothAmountString = clothField.value;
    const clothAmountText = parseFloat(clothAmountString);

    const totalExpenseField = document.getElementById('expense-total');
    const totalExpenseString = totalExpenseField.innerText;
    const totalExpenseAmount = parseFloat(totalExpenseString);

    const totalExpenses = foodAmountText + rentAmountText + clothAmountText;
    totalExpenseField.innerText = totalExpenses;


    const balanceField = document.getElementById('balance-total');
    const balanceAmountString = balanceField.innerText;
    const balanceText = parseFloat(balanceAmountString);


    const restTotalAmount = incomeTextAmount - totalExpenses;
    balanceField.innerText = restTotalAmount;


})




document.getElementById('save-btn').addEventListener('click', function () {

    // const saveInputField = document.getElementById('save-input');
    // const saveInputAmount = saveInputField.value;
    // const saveInputText = parseFloat(saveInputAmount);

    const saveInputText = getInputValue('save-input')

    const totalSave = incomeTextAmount / 10;
    saveInputField.innerText = totalSave;


    const savingAmount = document.getElementById('saving-amount');
    const savingAmountString = savingAmount.innerText;
    const savingText = parseFloat(savingAmountString);




})


