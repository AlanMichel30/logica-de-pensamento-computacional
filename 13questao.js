var entrada = require('readline-sync');

var ano = parseInt(entrada.question('Digite o ano do seu nascimento: '));
var anoPartir = parseInt(entrada.question('Digite a partir do ano? '));

var idade = anoPartir - ano;
console.log('Seu idade é '+ idade);

