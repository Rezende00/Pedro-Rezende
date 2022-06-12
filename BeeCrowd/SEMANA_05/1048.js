var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var salario = Number(lines.shift()); 
var salarioNovo = 0;
var percentual = 0;

if(salario <= 400){
    percentual = 0.15;
    salarioNovo = salario + salario * percentual;
}
else if(salario <= 800){
    percentual = 0.12;
    salarioNovo = salario + salario * percentual;
}
else if(salario <= 1200){
    percentual = 0.10;
    salarioNovo = salario + salario * percentual;
}
else if(salario <= 2000){
    percentual = 0.07;
    salarioNovo = salario + salario * percentual;
}
else{
    percentual = 0.04;
    salarioNovo = salario + salario * percentual;
}

console.log("Novo salario: " + salarioNovo.toFixed(2));
console.log("Reajuste ganho: " + (salarioNovo - salario).toFixed(2));
console.log(`Em percentual: ${(percentual*100).toFixed(0)} %`);