var needNewForm = 1;
$('newform').on('click', () => {
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
            output += `Estudante ${i + 1} - Nota do Exame: <input type="number" class="exame"> Nota trabalho: <input type="number" class="trabalho"><br><br>`;
        }
        output += '<input type="submit" value="Calcular" id="doCalc">';
        $('#form').append(`${output}`);

        var notasExame = document.querySelectorAll('input.exame');
        var notasTrabalho = document.querySelectorAll('input.trabalho');
    }

    $('#doCalc').on('click', () =>{
        for(var i = 0; i < qtdEstudantes; i++) {
            mediaEstudante += `<br> Média do estudante ${i + 1}: ${(parseInt(notasExame[i].value) + parseInt(notasTrabalho[i].value)) / 2}<br>`;
            mediaTotal += parseInt(notasExame[i].value) + parseInt(notasTrabalho[i].value);
            mediaExame += parseInt(notasExame[i].value);
            mediaTrabalho += parseInt(notasTrabalho[i].value);
            arrayExameNumeros.push(notasExame[i].value);
            arrayTrabalhoNumeros.push(notasTrabalho[i].value);
        }
        
        $('#form').append(`<hr> ${mediaEstudante}`);
        mediaTotal = mediaTotal / qtdEstudantes;
        $('#form').append(`<br><br> Média geral: ${mediaTotal}<br>`);
        mediaExame = mediaExame / qtdEstudantes;
        $('#form').append(`<br><br> Média aritimética prova: ${mediaExame}<br>`);
        mediaTrabalho = mediaTrabalho / qtdEstudantes;
        $('#form').append(`<br><br> Média aritimética trabalho: ${mediaTrabalho}<br>`)
        arrayExameNumeros = arrayExameNumeros.sort((a, b) => a - b);
        $('#form').append(`<br><br> Menor nota prova: ${arrayExameNumeros[0]} <br><br> Maior nota prova: ${arrayExameNumeros[arrayExameNumeros.length - 1]}<br>`);
        arrayNumbersJob = arrayNumbersJob.sort((a, b) => a - b);
        $('#form').append(`<br> Menor nota trabalho: ${arrayTrabalhoNumeros[0]} <br><br> Maior nota trabalho: ${arrayTrabalhoNumeros[arrayTrabalhoNumeros.length - 1]}<br>`);
    });    

    needNewForm = 0;    
});