var needNewForm = 1;
$('#newform').on('click', () => {
    var mediaEstudante = '';
    var mediaTotal = 0;
    var mediaExame = 0;
    var mediaTrabalho = 0;
    var arrayExameNumeros = [];
    var arrayTrabalhoNumeros = [];

    if (needNewForm == 1) {
        var qtdEstudantes = $('#estudantes').val();
        var output = '<br>';

        for (var i = 0; i <qtdEstudantes; i++) {
            output += `<b>Estudante ${i + 1}</b> - Nota do Exame: <input type="number" class="exame"> Nota trabalho: <input type="number" class="trabalho"><br><br>`;
        }
        output += '<input type="submit" value="Calcular" id="doCalc">';
        $('#form').append(`${output}`);

        var notasExame = document.querySelectorAll('input.exame');
        var notasTrabalho = document.querySelectorAll('input.trabalho');
    }

    $('#doCalc').on('click', () =>{
        for(var i = 0; i < qtdEstudantes; i++) {
            mediaEstudante += `<br> <b>Média do estudante ${i + 1}:</b> ${(parseInt(notasExame[i].value) + parseInt(notasTrabalho[i].value)) / 2}<br>`;
            mediaTotal += parseInt(notasExame[i].value) + parseInt(notasTrabalho[i].value);
            mediaExame += parseInt(notasExame[i].value);
            mediaTrabalho += parseInt(notasTrabalho[i].value);
            arrayExameNumeros.push(notasExame[i].value);
            arrayTrabalhoNumeros.push(notasTrabalho[i].value);
        }
        
        $('#form').append(`<hr> ${mediaEstudante}`);
        mediaTotal = mediaTotal / qtdEstudantes;
        $('#form').append(`<br><br> <b>Média geral:</b> ${mediaTotal}<br>`);
        mediaExame = mediaExame / qtdEstudantes;
        $('#form').append(`<br><br> <b>Média aritimética prova:</b> ${mediaExame}<br>`);
        mediaTrabalho = mediaTrabalho / qtdEstudantes;
        $('#form').append(`<br><br> <b>Média aritimética trabalho:</b> ${mediaTrabalho}<br>`)
        arrayExameNumeros = arrayExameNumeros.sort((a, b) => a - b);
        $('#form').append(`<br><br> <b>Menor nota prova:</b> ${arrayExameNumeros[0]} <br><br> <b>Maior nota prova:</b> ${arrayExameNumeros[arrayExameNumeros.length - 1]}<br>`);
        arrayTrabalhoNumeros = arrayTrabalhoNumeros.sort((a, b) => a - b);
        $('#form').append(`<br> <b>Menor nota trabalho:</b> ${arrayTrabalhoNumeros[0]} <br><br> <b>Maior nota trabalho:</b> ${arrayTrabalhoNumeros[arrayTrabalhoNumeros.length - 1]}<br>`);
    });    

    needNewForm = 0;    
});