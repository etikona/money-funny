
// handle calculate button with event handler
function calculateButton(){
   
    // get income value
    let  monthlyIncome = document.getElementById('income');
    let incomeText = monthlyIncome.value;
    let income = parseFloat(incomeText);
    // food expense
    const food = document.getElementById('food-expense');
    const foodExpenseText = food.value;
    const foodExpense = parseFloat(foodExpenseText);
    // Rent Expense
    const rent = document.getElementById('rent-expense');
    const rentExpenseText = rent.value;
    const rentexpense = parseFloat(rentExpenseText);
    // Cloth expense
    const cloths = document.getElementById('cloth-expense');
    const clothExpenseText = cloths.value;
    const clothExpense = parseFloat(clothExpenseText);
    // Total Expenses
    const expenses = document.getElementById('total-expenses');
    const expensesText = expenses.innerText;
    const expenseField = parseFloat(expensesText);
    const sumOfExpenses = foodExpense + rentexpense + clothExpense + expenseField;
     expenses.innerText = sumOfExpenses;

// Total Balance
const balance =document.getElementById('total-balance');
const balanceText = balance.innerText;
const balanceField = parseFloat(balanceText);
const totalBalance = income - sumOfExpenses;
balance.innerText = totalBalance;
}

// Saving Amount part
function saveMoney (){
    const saveMoneytext = document.getElementById('save-money');
    const saveMoneyMonthly = parseInt(saveMoneytext.value);
    const previousIncomeMoneyText = document.getElementById('income');
    const previousIncomeMoney = parseInt(previousIncomeMoneyText.value);
    const totalSaveMoney = (previousIncomeMoney * 25) / 100;
    // Remaining Balance
  
    saveMoneytext.value = totalSaveMoney;
}
document.getElementById('save-btn').addEventListener('click', function(){
    saveMoney();
})
document.getElementById('calculate-btn').addEventListener('click', function(){
    calculateButton();
})
