var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var valores = input.split(' ');

var x = parseFloat(valores.shift());
var y = parseFloat(valores.shift());

if (x === 0 && y === 0) {
    console.log("Origem");
}
else if (x > 0 && y > 0) {
    console.log("Q1");
}
else if (x < 0 && y > 0) {
    console.log("Q2");
}
else if (x < 0 && y < 0) {
    console.log("Q3");
}
else if (x > 0 && y < 0) {
    console.log("Q4");
}
else {
    if (x !== 0) {
        console.log("Eixo X");
    }
    else {
        console.log("Eixo Y");
    }
}