document.getElementById('calculate-btn').addEventListener('click', function () {


    const incomeInput = document.getElementById('income-field');
    const incomeAmountString = incomeInput.value;
    const incomeTextAmount = parseFloat(incomeAmountString);
    incomeInput.value = '';


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




