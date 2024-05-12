var entrada = require('readline-sync');

var num1 = parseInt(entrada.question('Digite o 1° Número: '));
var num2 = parseInt(entrada.question('Digite o 2° Número: '));

var diferente = num1 == num2;

console.log(diferente);

