function calcular() {
    var pessoas = document.getElementById('pessoas').value;
    var turno  = document.getElementById('turno').value;
    var resultadofinal = 0;

    if (turno == 0) {
        resultadofinal = pessoas * 200;
        if (pessoas > 50) {
            resultadofinal = resultadofinal * 0.6;
        }
    }
    else{
        resultadofinal = pessoas * 100;
        if (pessoas > 50) {
            resultadofinal = resultadofinal * 0.8;
        }
    }
        document.getElementById('resultadofinal').innerHTML = resultadofinal;
}
