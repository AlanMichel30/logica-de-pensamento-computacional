var entrada = require('readline-sync');
var lado = parseInt(entrada.question('Digite o valor do lado de um quadrado: '));

var area = lado * lado;

console.log('O Valor de sua área é '+ area);