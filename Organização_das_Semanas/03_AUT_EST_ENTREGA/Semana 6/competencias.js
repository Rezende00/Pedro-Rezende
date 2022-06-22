const competencias = document.querySelector(".comp");

function loadCompetencias() {
  let url = "/competencias";

  let xhttp = new XMLHttpRequest();
  xhttp.open("get", url, false);
  xhttp.send();

  let data = JSON.parse(xhttp.responseText);

  let html = "";
  data.forEach((element) => {
    html += `
     <p class="corpo-texto"> 
        <ul> 
         <li> ${element.text}</li>
       </ul>
     </p>
     `;
  });
  competencias.innerHTML = html;
}
loadCompetencias();
