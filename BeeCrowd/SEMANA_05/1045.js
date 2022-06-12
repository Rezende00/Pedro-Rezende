var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split(' ');

var num1 = parseFloat(lines.shift())
var num2 = parseFloat(lines.shift())
var num3 = parseFloat(lines.shift())
var backupNum1 = num1
var backupNum2 = num2
var backupNum3 = num3
if(num3<num1){
    num3 = num1
    num1 = backupNum3
}
if(num2<num1){
    num2 = num1
    num1 = backupNum2
}
if(num3<num2){
    backup2Num3 = num3
    num3 = num2
    num2 = backup2Num3
}
A = num3
B = num2
C = num1

if(A >= B + C){
    console.log("NAO FORMA TRIANGULO")
}
else{
    if(A*A == B*B + C*C){
        console.log("TRIANGULO RETANGULO") 
    }
    else if(A*A > B*B + C*C){
        console.log("TRIANGULO OBTUSANGULO")
    }
    else if(A*A < B*B + C*C){
        console.log("TRIANGULO ACUTANGULO")
    }
    
    if(A == B && A == C){
        console.log("TRIANGULO EQUILATERO")
    }
    else if((A == B && A != C) || (A == C && A != B) || (B == C && B != A)){
        console.log("TRIANGULO ISOSCELES")
    }
}