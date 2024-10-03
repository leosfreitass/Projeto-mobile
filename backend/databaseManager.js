// app.js
const express = require('express');
const bodyParser = require('body-parser');
const sqlite3 = require('sqlite3').verbose();

const app = express();
const PORT = 3000;

// Configuração do body-parser
app.use(bodyParser.json());

// Conectar ao banco de dados SQLite
const db = new sqlite3.Database('./cadastro.db', (err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err.message);
  } else {
    console.log('Conectado ao banco de dados SQLite.');
    db.run(`CREATE TABLE IF NOT EXISTS cadastro (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      nome TEXT NOT NULL,
      endereco TEXT NOT NULL,
      telefone TEXT NOT NULL,
      pagamento TEXT NOT NULL
    );`);
  }
});

// Rota para criar um cadastro
app.post('/cadastro', (req, res) => {
  const { nome, endereco, telefone, pagamento } = req.body;

  db.run(`INSERT INTO cadastro (nome, endereco, telefone, pagamento) VALUES (?, ?, ?, ?)`, 
    [nome, endereco, telefone, pagamento],
    function(err) {
      if (err) {
        return res.status(400).json({ error: err.message });
      }
      res.status(201).json({ id: this.lastID, message: 'Cadastro salvo com sucesso!' });
    }
  );
});

// Rota para listar todos os cadastros
app.get('/cadastro', (req, res) => {
  db.all(`SELECT * FROM cadastro`, [], (err, rows) => {
    if (err) {
      return res.status(400).json({ error: err.message });
    }
    res.json(rows);
  });
});

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
