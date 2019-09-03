const express = require('express')
const app = express()
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')
const Sequelize = require('sequelize')

//Template Engine
app.engine('handlebars', handlebars({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

//BD Connect
const sequelize = new Sequelize('teste', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql'})

//Body Parser
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

//Rotas
app.get('/cad', (req, res) => {
    res.render('formulario')
})

app.post('/add', (req, res) => {
    res.send('Titulo: ' + req.body.titulo + '<br>Conteudo: ' + req.body.conteudo)
})

app.listen(8081,() => {
    console.log('servidor rodando: localhost:8081')
})