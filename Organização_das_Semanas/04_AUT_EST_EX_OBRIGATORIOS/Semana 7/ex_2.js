function muda(){
    var valor1 = document.getElementById('valor1');
    var valor2 = document.getElementById('valor2');
    var guardarvalor1 = valor1.value;
    valor1.value = valor2.value;
    valor2.value = guardarvalor1;
}