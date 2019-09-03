/**
 * 
 */
const express = require('express')
const app = express()
const handlebars = require('express-handlebars')

//Template Engine
app.engine('handlebars', handlebars({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

// BD Connect
const Sequelize = require('sequelize')
const sequelize = new Sequelize('teste', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql'})

app.get('/cad', (req, res) => {
    res.render('formulario')
})

app.listen(8081,() => {
    console.log('servidor rodando: localhost:8081')
})