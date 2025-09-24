"use strict"

function solveEquation(a, b, c) {
	let arr = [];
	let d = Math.pow(b,2)-4*a*c;
	console.log(d);
	if (d < 0) {
		return arr;
	} else if (d === 0) {
		let x = -b / (2 * a);
		arr.push(x);
		return arr;
	} else if (d > 0) {
		let x1 = (-b + Math.sqrt(d)) / (2 * a);
		let x2 = (-b - Math.sqrt(d)) / (2 * a);
		arr.push(x1, x2);
		return arr;
	}
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	percent = parseFloat(percent);
	contribution = parseFloat(contribution);
	amount = parseFloat(amount);
	countMonths = parseFloat(countMonths);
	percent = percent / 100 / 12; // Месячная ставка от 0 до 1
	let bodyCredit = amount - contribution;
	let monthlyPayment = bodyCredit * (percent + percent / (Math.pow(1 + percent, countMonths) - 1));//расчитаем месячный платеж по формуле
	let totalAmount = monthlyPayment * countMonths;
	return parseFloat(totalAmount.toFixed(2));
}

