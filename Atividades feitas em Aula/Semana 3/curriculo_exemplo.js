// comentário aleatório 

function ex1() {
    // isso aqui embaixo é uma mensagem de aviso
// alert('Deu erro família')

//Pegar o valor do Form 
var comment = document.getElementById('comment').value;

document.getElementById('bora').innerHTML = comment;
// print no console
console.log(comment); 

// print no alert, só pode ter um modal por página
// alert("TEMPO DE SUBIDA = " + tSubida);
}