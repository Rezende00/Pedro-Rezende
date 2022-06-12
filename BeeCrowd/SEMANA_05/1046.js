var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split(' ');

n1 = parseInt(lines.shift());
n2 = parseInt(lines.shift());

if(n2 > n1){
    resultado = n2 - n1;
}
else if(n2 == n1){
    resultado = 24;
}
else{
    resultado = 24 - n1 + n2;
}
console.log("O JOGO DUROU " + resultado + " HORA(S)");
