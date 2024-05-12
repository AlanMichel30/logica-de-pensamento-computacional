var entrada = require('readline-sync');

var salarioBruto = parseFloat(entrada.question('O salario Bruto: '));
var fgts = (salarioBruto * 0.08).toFixed(2);
var inss = (salarioBruto * 0.075).toFixed(2);
var salarioliquido = (salarioBruto - inss).toFixed(2);

console.log('O Salário bruto é: ' + salarioBruto);
console.log('O Recolhimento de FGTS será: ' + fgts);
console.log('O Recolhimento de INSS será: ' + inss);
console.log('O Salário líquido este mês será: ' + salarioliquido);
