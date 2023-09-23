const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database("teste_db", (erroDb) => {
  if (erroDb) {
    console.error(
      "Erro ao tentar fazer a conecao com o banco de dados:",
      erroDb.message
    );
  } else {
    console.log("A conecao com o banco de dados foi bem sucedida!!");
  }
});
