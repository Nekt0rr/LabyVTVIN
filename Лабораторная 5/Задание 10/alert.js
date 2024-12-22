function calcSalary() {
    let salary = Number(prompt("Введите сумму зарплаты:"));
    if (isNaN(salary)) {
       alert("Пожалуйста, введите корректное число.");
       return;
    }
    else { 
    let bonus = salary * 0.15;
    let totalWithBonus = salary + bonus;
    let taxes = totalWithBonus * 0.10;
    let afterTaxes = totalWithBonus - taxes;
    let afterShopping = afterTaxes - 90;
    let finalAmount = afterShopping / 2;
   
    alert(`Зарплата: ${salary.toFixed(2)}\n` +
           `Премия 15%: ${bonus.toFixed(2)}\n` +
           `Сумма с премией: ${totalWithBonus.toFixed(2)}\n` +
           `Налоги 10%: ${taxes.toFixed(2)}\n` +
           `После налогов: ${afterTaxes.toFixed(2)}\n` +
           `После трат в магазине: ${afterShopping.toFixed(2)}\n` +
           `Оставшаяся сумма для каждого: ${finalAmount.toFixed(2)}`);
       } 
   }