var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var distancia = parseFloat(lines.shift());

if (distancia >= 0 && distancia <= 800) {
    console.log(1);
}
else if (distancia > 800 && distancia <= 1400) {
    console.log(2);
}
else {
    console.log(3);
}
