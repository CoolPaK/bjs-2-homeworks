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

function calculateTotalMortgage(percent, contribution, amount, countMonths) {

}