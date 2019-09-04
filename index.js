const express = require('express')
const app = express()
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')
const Post = require('./models/Post')

//Template Engine
app.engine('handlebars', handlebars({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')


//Body Parser
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

//Rotas
app.get('/', (req, res) => {
    Post.findAll({order: [['id', 'DESC']]}).then((posts) => {
        res.render('home', {posts})
    }).catch((e) => {console.log(e)})
})

app.get('/cad', (req, res) => {
    res.render('formulario')
})

app.post('/add', (req, res) => {
    Post.create({
        titulo: req.body.titulo,
        conteudo: req.body.conteudo
    }).then(() => {
        res.redirect('/')
    }).catch((e) => {
        res.send('Houve um erro: ' + e)
    })
})

app.get('/deletar/:id', (req, res) => {
    Post.destroy({where: {id: req.params.id}}).then(() => {
        res.send('Postagem deletada com sucesso')
    }).catch((e) => {
        console.log(e)
    })
})

app.get('/api/listAll', (req, res) => {
    Post.findAll({order: [['id', 'DESC']]}).then((posts) => {
        res.json(posts)
    }).catch((e) => {console.log(e)})
})

app.listen(8081,() => {
    console.log('servidor rodando: localhost:8081')
})