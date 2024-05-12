var entrada = require('readline-sync');

var num = entrada.question('Digite o número: ');
var valor = 0.75 * num;

console.log('O Valor correspondente a 75% do número ' + num + ' o resultado é '+ valor);

