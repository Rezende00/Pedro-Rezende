// comentário aleatório 

function ex1() {
    // isso aqui embaixo é uma mensagem de aviso
// alert('Deu erro família')

//Pegar o valor do Form 
var v0 = document.getElementById('v0').value;
const g = 10; // aceleração gravitacional 10m/s²

var tSubida = v0/g; 

var hMax = Math.pow(v0,2) / (g * 2);

document.getElementById('bora').innerHTML = "TEMPO DE SUBIDA = " + tSubida;
document.getElementById('bora1').innerHTML = "altura máxima = " + hMax;
// print no console
console.log("TEMPO DE SUBIDA = " + tSubida); 

// print no alert, só pode ter um modal por página
// alert("TEMPO DE SUBIDA = " + tSubida);
}