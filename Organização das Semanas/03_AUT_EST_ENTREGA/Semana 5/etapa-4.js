//var input = require("fs").readFileSync("script", "utf8"); 

function ex1(){
    var escreva = document.getElementById('comment').value;
    document.getElementById('texto').innerHTML = escreva;
}
var mostra = 0
function mostrar(){
    if (mostra == 0){
        $("#chama").show()
        mostra = 1
    }
    else{
        $("#chama").hide()
        mostra = 0
    }
}
