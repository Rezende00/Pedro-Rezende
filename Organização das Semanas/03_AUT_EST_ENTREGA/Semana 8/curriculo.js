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

let comments = [];
function loadComentarios() {
  let url = "/comentarios";

  let xhttp = new XMLHttpRequest();
  xhttp.open("get", url, false);
  xhttp.send();

  let data = JSON.parse(xhttp.responseText);
  document.getElementById("comentarios").innerHTML = "";
  data.forEach((row, index) => {
    comments.push(row);
    console.log(row.id);
    document.getElementById("comentarios").innerHTML += `
      <div>
        <p id="comentario-${index}"> ${row.comentario} </p>
        <button onclick="transformComment(${index})">Editar</button>
        <button onclick="deleteComment(${row.id})">Deletar</button>
      </div>
    `;
  });
}
loadComentarios();

function deleteComment(id) {
  let url = `/comment/${id}`;

  let xhttp = new XMLHttpRequest();
  xhttp.open("delete", url, false);
  xhttp.send();

  loadComentarios();
}

function transformComment(index) {
  let comment = document.getElementById(`comentario-${index}`);
  let oldText = comment.innerHTML;
  console.log(comments[index].id);
  comment.setAttribute("contenteditable", "true");
  comment.focus();
  comment.addEventListener("blur", () => {
    if (comment.innerHTML != oldText) {
      editComment(comment.innerHTML, comments[index].id);
    }
  });
}

function editComment(text, id) {
  console.log(text, id);
  let url = `/comment/${id}/${text}`;

  let xhttp = new XMLHttpRequest();
  xhttp.open("post", url, false);
  xhttp.send();

  window.location.reload();
}
