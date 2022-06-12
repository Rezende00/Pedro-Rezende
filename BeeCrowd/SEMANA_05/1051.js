var input = require('fs').readFileSync('/dev/stdin', 'utf8');

var salario = parseFloat(input);

if(salario <= 2000){
    taxa = "Isento";
    console.log(taxa);
}
else{
    taxa = 0.0;
    if(salario > 2000 && salario <= 3000){
        taxa = (salario - 2000) * 0.08 ;
    }
    else if(salario > 3000 && salario <= 4500){
        taxa = 1000 * 0.08 + (salario - 3000) * 0.18;
    }
    else{
        taxa = 1000 * 0.08 + 1500 * 0.18 + (salario - 4500) * 0.28;
    }
    console.log("R$ " + taxa.toFixed(2));
}