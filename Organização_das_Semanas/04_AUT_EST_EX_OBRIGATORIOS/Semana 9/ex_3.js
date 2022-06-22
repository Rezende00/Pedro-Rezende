function calcular() {
    var nome1 = document.getElementById('nome1').value;
    var nome2 = document.getElementById('nome2').value;
    var nome3 = document.getElementById('nome3').value;
    var array = [nome1, nome2, nome3];

    ordenar = array.sort();
    document.getElementById("resultado").innerHTML = ordenar
}