"use strict";

function solveEquation(a, b, c) {
  let discriminant = b ** 2 - 4 * a * c;
  let x1, x2;

  if (discriminant < 0) {
    return []; // корней нет
  } else if (discriminant === 0) {
    x1 = -b / (2 * a);
    return [x1]; // один корень
  } else {
    x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
    return [x1, x2]; // два корня
  }
}

"use strict";

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  // Преобразование процентной ставки из диапазона от 0 до 100 в диапазон от 0 до 1
  let monthlyInterest = percent / 100 / 12;

  // Расчет тела кредита
  let loanBody = amount - contribution;

  // Расчет ежемесячного платежа по формуле
  let monthlyPayment = loanBody * (monthlyInterest + monthlyInterest / ((Math.pow(1 + monthlyInterest, countMonths)) - 1));

  // Подсчет общей суммы платежей
  let totalPayment = countMonths * monthlyPayment;

  // Округление результата до двух знаков после запятой
  totalPayment = Math.round(totalPayment * 100) / 100;

  return totalPayment;
}