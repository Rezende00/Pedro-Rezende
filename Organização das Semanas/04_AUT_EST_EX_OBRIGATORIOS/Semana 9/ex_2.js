function calcular() {
  var num = document.getElementById('num').value;
  var soma = 0;

  for (i in num) {
    digitos = num.charAt(i);
    soma += Number(digitos);
  }
  document.getElementById("resultado").innerHTML = soma;
}
