function calcular() {
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var primos = []

    for (var i = num1; i <= num2; i++) {
        var divisor1 = 0
        for (var divisor2 = 0; divisor2 <= num2; divisor2++) {
            if (i % divisor2 == 0) {
                divisor1 += 1
            }
        }
        if (divisor1 == 2) {
            primos.push(i)
        }
    }
    document.getElementById("resultado").innerHTML = primos
}