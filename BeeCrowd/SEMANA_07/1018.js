var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var total = parseInt(input); 

cedulas100 = parseInt(total / 100);
    total = total % 100;
cedulas50 = parseInt (total / 50);
    total = total % 50;
cedulas20 = parseInt (total / 20);
    total = total % 20;
cedulas10 = parseInt (total / 10);
    total = total % 10;
cedulas5 = parseInt (total / 5); 
    total = total % 5;
cedulas2 = parseInt (total / 2); 
cedulas1 = parseInt(total % 2); 

console.log(parseInt(input));

console.log(cedulas100 + " nota(s) de R$ 100,00");
console.log(cedulas50 + " nota(s) de R$ 50,00");
console.log(cedulas20 + " nota(s) de R$ 20,00");
console.log(cedulas10 + " nota(s) de R$ 10,00");
console.log(cedulas5 + " nota(s) de R$ 5,00");
console.log(cedulas2 + " nota(s) de R$ 2,00");
console.log(cedulas1 + " nota(s) de R$ 1,00");