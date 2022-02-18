// calculation 
function getInputValue(id){
    const inputText = document.getElementById(id);
    const input = parseFloat(inputText.value);
    return input;
}
// Total expenses and balance after expenses
   function totalExpensesAndBalance (){
       const income = getInputValue('income');
       const food = getInputValue('food-expense');
       if( rent = getInputValue('rent-expense') ){
         
       }
       else {
           alert('Please give a number type data');
       }
       const cloth =getInputValue('cloth-expense');
    //  Expenses  
       const totalExpenses = food + rent + cloth;
       if (food >= 0 && rent >= 0 && cloth >= 0 && income > totalExpenses){
           const totalMonthlyExpenses = document.getElementById('total-expenses');
           totalMonthlyExpenses.innerText = totalExpenses;
        //    balance
        const previousTotalBalance = document.getElementById('total-balance');
      previousTotalBalance.innerText = income - totalExpenses;
       }
       else {
           alert('please give positive value')
       }
    }
//    saving button
function savingAndRemainingBalance(){
    const saveMoney = document.getElementById('save-money');
    const saveMoneytext = parseFloat(saveMoney.value);
    const previousIncome = document. getElementById('income');
    const previousIncomeText = parseFloat(previousIncome.value)
    const savingBalance = (previousIncomeText * 10) / 100;
    const totalBalanceText = document.getElementById('total-balance').innerText;
    const newTotalBalance =parseFloat(totalBalanceText);
    saveMoney.value = savingBalance;
const remainingBalance = newTotalBalance - savingBalance;
document.getElementById('remaining').value = remainingBalance;
console.log(remainingBalance);

   if(saveMoney > 0 && savingBalance < newTotalBalance){
   }
    else if (saveMoney < 0){
       ('opps its wrong input')
    }
else{
('please give a valid number')
}
}

       document.getElementById('calculate-btn').addEventListener('click', function(){
           totalExpensesAndBalance();
       })
     document.getElementById('save-btn').addEventListener('click', function(){
         savingAndRemainingBalance();
     })
