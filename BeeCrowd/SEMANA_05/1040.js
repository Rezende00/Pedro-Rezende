var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split(/\s+/);

var nota1 = parseFloat(lines.shift());
var nota2 = parseFloat(lines.shift());
var nota3 = parseFloat(lines.shift());
var nota4 = parseFloat(lines.shift());

var media = ((nota1 * 2 + nota2 * 3 + nota3 * 4 + nota4) / 10); 

console.log("Media: " + media.toFixed(1));

if(media >= 7){
    console.log("Aluno aprovado.");
}

else if(media < 5){
    console.log("Aluno reprovado.");
}

else{
    console.log("Aluno em exame.");
        notaRecalculada = parseFloat(lines.shift());
        console.log("Nota do exame: " + notaRecalculada.toFixed(1));
        mediaFinal = ((media + notaRecalculada) / 2);
        if(mediaFinal >= 5){
            console.log("Aluno aprovado.");
        }
        else{
            console.log("Aluno reprovado.");
        }
    console.log("Media final: " + mediaFinal.toFixed(1));
}
