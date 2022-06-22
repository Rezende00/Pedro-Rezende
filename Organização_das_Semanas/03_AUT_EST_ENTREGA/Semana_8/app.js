const express = require("express");
const app = express();
//const bodyParser = require('body-parser');
const path = require("path");

const port = process.env.PORT || 3000;
const sqlite3 = require("sqlite3").verbose();
const DBPATH = path.join(__dirname, "curriculo.db");

const bodyParser = require("body-parser");
const urlencodedParser = bodyParser.urlencoded({ extended: false });

app.use(express.static(path.join(__dirname, "./")));

app.use(express.json());

/* Definição dos endpoints */

/****** CRUD ******************************************************************/

// Retorna todos registros (é o R do CRUD - Read)
app.get("/competencias", (req, res) => {
  res.statusCode = 200;
  res.setHeader("Access-Control-Allow-Origin", "*"); // Isso é importante para evitar o erro de CORS

  var db = new sqlite3.Database(DBPATH); // Abre o banco
  var sql = "SELECT * FROM competencias";
  db.all(sql, [], (err, rows) => {
    if (err) {
      throw err;
    }
    res.json(rows);
  });
  db.close(); // Fecha o banco
});

app.get("/comentarios", (req, res) => {
  res.statusCode = 200;
  res.setHeader("Access-Control-Allow-Origin", "*"); // Isso é importante para evitar o erro de CORS

  var db = new sqlite3.Database(DBPATH); // Abre o banco
  var sql = "SELECT * FROM comentarios";
  db.all(sql, [], (err, rows) => {
    if (err) {
      throw err;
    }
    res.json(rows);
  });
  db.close(); // Fecha o banco
});

// Insere um registro (é o C do CRUD - Create)
app.post("/commentsinsert", urlencodedParser, (req, res) => {
  res.statusCode = 200;
  res.setHeader("Access-Control-Allow-Origin", "*"); // Isso é importante para evitar o erro de CORS

  sql = `INSERT INTO comentarios (comentario) VALUES ("${req.body.comentario}")`;
  var db = new sqlite3.Database(DBPATH); // Abre o banco
  db.run(sql, [], (err) => {
    if (err) {
      throw err;
    }
  });
  db.close(); // Fecha o banco
  res.redirect("/");
});

app.post("/comment/:id/:text", urlencodedParser, (req, res) => {
  res.statusCode = 200;
  res.setHeader("Access-Control-Allow-Origin", "*"); // Isso é importante para evitar o erro de CORS
  const id = req.params["id"];
  const text = req.params["text"];

  sql = "UPDATE comentarios SET comentario = ? WHERE id = ?";
  var db = new sqlite3.Database(DBPATH); // Abre o banco
  db.run(sql, [text, id], (err) => {
    if (err) {
      throw err;
    }
  });
  db.close(); // Fecha o banco
  res.end();
});

app.delete("/comment/:id", urlencodedParser, (req, res) => {
  res.statusCode = 200;
  res.setHeader("Access-Control-Allow-Origin", "*"); // Isso é importante para evitar o erro de CORS
  const id = req.params["id"];

  sql = "DELETE FROM comentarios WHERE id = ?";
  var db = new sqlite3.Database(DBPATH); // Abre o banco
  db.run(sql, [id], (err) => {
    if (err) {
      throw err;
    }
  });
  db.close(); // Fecha o banco
  res.end();
});

/* Inicia o servidor */
app.listen(port, () => {
  console.log(`BD server running at port:${port}`);
});
