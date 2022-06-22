function calcular() {
    var termo = parseInt(document.getElementById('numero').value);
    var penultimo = 0, ultimo = 1;
    var numero;
    var array = []

    if (termo <= 2)
    numero = termo-1;
    
    else {
        count = 3;

        while (count <= termo) {
            numero = ultimo + penultimo;
            penultimo = ultimo;
            ultimo = numero;
            array.push(ultimo)
            count++;
        }
    }
    document.getElementById("resultado").innerHTML= array;
}