var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split(/\s+/);

while (true) {
    var x = Number(lines.shift());
    var y = Number(lines.shift());

    if (x === 0 || y === 0) {
        break;
    }
    else if (x > 0 && y > 0) {
        console.log("primeiro");
    }
    else if (x < 0 && y > 0) {
        console.log("segundo");
    }
    else if (x < 0 && y < 0) {
        console.log("terceiro");
    }
    else if (x > 0 && y < 0) {
        console.log("quarto");
    }
}