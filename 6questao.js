var entrada = require('readline-sync');

var num = parseInt(entrada.question('Digite qual o número? '));

if(num  % 2 ===0){
    console.log('É Par ' + num);
}else{
    console.log('É impar ' + num);
}

