function calcular() {
  var num = document.getElementById("num").value;
  var centena = num.slice(0, 1);
  var resultado;
  if (num.length == 3) {
    if (
      centena == "0" ||
      centena == "2" ||
      centena == "4" ||
      centena == "6" ||
      centena == "8"
    ) {
      resultado = "par";
    }
    if (
      centena == "1" ||
      centena == "3" ||
      centena == "5" ||
      centena == "7" ||
      centena == "9"
    ) {
      resultado = "ímpar";
    }
    document.getElementById("resultado").innerHTML = resultado;
  } else {
    document.getElementById("resultado").innerHTML =
      "Insira um número de 3 dígitos";
  }
}
