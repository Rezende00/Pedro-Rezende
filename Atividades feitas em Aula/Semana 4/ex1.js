const res = require("express/lib/response");

function caixa(){
    //alert('sla')

    var total = document.getElementById('valor').value;
    //console.log(total);

    var total = 137
    var notasde10 = Math.trunc(total/10) 
    console.log(notasde10);
    
    var notasde10 = total % 10 
    var notasde5 = Math.trunc(resto/5)
    
// var notas = 0
// document.getElementById('vem').innerHTML = '';


    //pegar as notas de 10, soment a parte inteira
    // notas = Math.floor(total / 10)
}
    // if(total >=10) {
// notas = parseInt(total / 10);
 //document.getElementById('vem').innerHTML += '<br>NOTAS DE 10: ' + notas;
// notas = total % 10; 
//} 
    //else notas = total;


//if (notas >= 5) {
// notas = parseInt(notas / 5);
 //document.getElementById('vem').innerHTML += '<br>NOTAS DE 5: ' + notas;
// notas = total % 5; 
//}
    //else notas = total;


 //document.getElementById('vem').innerHTML += '<br>NOTAS DE 1: ' + notas;



 //devolvendo o resultado para o html
 //document.getElementById('vem').innerHTML = 'RESULTADO: ' + total;

