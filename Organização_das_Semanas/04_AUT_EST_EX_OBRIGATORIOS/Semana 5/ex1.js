function calculo() {
    var num1 = parseFloat(document.getElementById('qtd').value)
    var operador = document.getElementById('modo').value;
    var num2 = parseFloat(document.getElementById('qtd2').value)

    var resultado

    if(operador == 0) {
        resultado = num1 + num2
    }
        else if(operador ==1) {
            resultado = num1 - num2
        }
        else if(operador ==2) {
            resultado = num1 * num2
        }
        else if(operador ==3) {
            resultado = num1 / num2
        }
        else if(operador ==4) {
            resultado = num1 % num2
        }

    document.getElementById('saida').innerHTML = resultado;
}