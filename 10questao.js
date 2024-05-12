var entrada = require('readline-sync');

var raio = parseFloat(entrada.question('Digite o raio de uma circunferência? '));
var resp = (3.14*(raio*raio));

console.log(resp);

