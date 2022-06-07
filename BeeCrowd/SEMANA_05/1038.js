var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split(' ');

var X = Number(lines [0]);
var Y = Number(lines [1]);

function snack(X, Y){
    switch(X){
    case 1:
        console.log(`Total: R$ ${(Y * 4.0).toFixed(2)}`);
        break;
    case 2:
        console.log(`Total: R$ ${(Y * 4.5).toFixed(2)}`);
        break;
    case 3:
        console.log(`Total: R$ ${(Y * 5.0).toFixed(2)}`);
        break;
    case 4:
        console.log(`Total: R$ ${(Y * 2.0).toFixed(2)}`);
        break;
    case 5:
        console.log(`Total: R$ ${(Y * 1.5).toFixed(2)}`);
        break;
    }

}
snack(X,Y);