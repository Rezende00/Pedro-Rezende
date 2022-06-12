var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var media = 0;
var sucess = 0;

while (sucess < 2) {
    var grade = parseFloat(lines.shift());

    if (grade <= 10 && grade >= 0) {
        media += grade;
        sucess += 1
    }
    else {
        console.log("nota invalida");
    }
}
media = media/2;
console.log("media = " + media.toFixed(2));
