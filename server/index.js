const express = require('express');
const app = express();
const cors = require('cors');
const connection = require('./database/connection/database');
const Usuarios = require('../server/database/usuariosCadastrados/Usuarios');

connection.authenticate()
    .then(() => console.log('banco acessado!'))
    .catch(err => console.log(err))

app.use(express.json());
app.use(cors());

Usuarios.findAll({ raw: true })
    .then(usuarios => {
        app.get('/consult', (req, res) => {

            return res.json(usuarios);

        })
    })
    .catch(err => console.log(err))



app.post('/mandar', (req, res) => {
    const { userName, senha } = req.body
    Usuarios.create({
        userName: userName,
        senha: senha
    })
        .then(() => console.log('Tabela Criada'))
        .catch(err => console.log(err))
})
app.listen(4000, () => console.log('Servidor rodando'))