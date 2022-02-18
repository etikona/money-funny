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
    //    const rent = getInputValue('rent-expense');
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
        const totalBalance = document.getElementById('total-balance');
      totalBalance.innerText = income - totalExpenses;
       }
    }
       document.getElementById('calculate-btn').addEventListener('click', function(){
           totalExpensesAndBalance();
       })
     
