var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split(' ');

var n1 = parseInt(lines.shift()); 
var n2 = parseInt(lines.shift());
var n3 = parseInt(lines.shift());

var backupN1 = n1;
var backupN2 = n2;
var backupN3 = n3;

if(n3 < n1){
    n3 = n1;
    n1 = backupN3;
}
if(n2 < n1){
    n2 = n1;
    n1 = backupN2;
}
if(n3 < n2){
    backupN3 = n3;
    n3 = n2;
    n2 = backupN3;
}
console.log(n1);
console.log(n2);
console.log(n3);
console.log("");
console.log(backupN1);
console.log(backupN2);
console.log(backupN3);
