var entrada = require('readline-sync');

var n1 = parseFloat(entrada.question('Digite o primeira nota? '));
var n2 = parseFloat(entrada.question('Digite o segunda nota? '));
var n3 = parseFloat(entrada.question('Digite o terceira nota? '));

var media = Math.ceil((n1 + n2 + n3) / 3);

console.log('Média das notas: '+ media);

