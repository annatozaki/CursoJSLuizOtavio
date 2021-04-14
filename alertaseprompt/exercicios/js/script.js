/* eslint-disable no-alert */
let num1 = prompt('Digite o primeiro numero');
let num2 = prompt('Digite o segundo numero');
num1 = parseFloat(num1);
num2 = parseFloat(num2);

console.log(num1, num2);

const resultado = num1 + num2;

// eslint-disable-next-line no-alert
alert(`O resultado da soma do primeiro numero e do segundo numero é ${resultado}`);
