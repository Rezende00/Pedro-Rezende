function insira() {
  var escreva = document.getElementById("comment").value;
  document.getElementById("texto").innerHTML = escreva;
}

var mostra = 0;
function mostrar() {
  if (mostra == 0) {
    $("#chama").show();
    mostra = 1;
  } else {
    $("#chama").hide();
    mostra = 0;
  }
}

const competencias = document.querySelector(".comp");

function loadCompetencias() {
  let url = "/competencias";

  let xhttp = new XMLHttpRequest();
  xhttp.open("get", url, false);
  xhttp.send();

  let data = JSON.parse(xhttp.responseText);

  let html = "";
  data.forEach((row) => {
    html += `
     <p class="corpo-texto"> 
        <ul> 
         <li> ${row.text}</li>
       </ul>
     </p>
     `;
  });
  competencias.innerHTML = html;
}
loadCompetencias();

function loadComentarios() {
  let url = "/comentarios";

  let xhttp = new XMLHttpRequest();
  xhttp.open("get", url, false);
  xhttp.send();

  let data = JSON.parse(xhttp.responseText);

  data.forEach((row) => {
    document.getElementById(
      "comentarios"
    ).innerHTML += `<p> ${row.comentario} </p>`;
  });
  competencias.innerHTML = html;
}
loadComentarios();
