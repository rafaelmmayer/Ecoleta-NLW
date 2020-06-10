const express = require('express')
const server = express()
const nunjucks = require('nunjucks') // utilizar template engine (Nujunks)
const db = require('./database/db.js') // chamar banco de dados

// configurar pasta Public

server.use(express.static("public"))

// habilitar o uso do re.body
server.use(express.urlencoded({ extended: true }))

// configurando Nujunks

nunjucks.configure("./src/views/", {
    express: server,
    noCache: true
})

// configurar camninhos da minha aplicação

server.get("/", (req, res) => {
    return res.render("index.html", { title: "" })
})

server.get("/create-point", (req, res) => {
    //req.query: Query strings da nossa url
    return res.render("create-point.html")
})

server.post("/savepoint", (req, res) => {
    //req.body: O corpo do nosso formulário
    // Insetir dados no banco de dados

    // Inserir dados na tabela
    const query = `
        INSERT INTO places (
            image,
            name,
            address,
            address2,
            state,
            city,
            items
        ) VALUES (?, ?, ?, ?, ?, ?, ?);
    `
    const values = [
        req.body.image,
        req.body.name,
        req.body.address,
        req.body.address2,
        req.body.state,
        req.body.city,
        req.body.items
    ]

    function afterInsertDate(err) {
        if (err) {
            console.log(err)
            return res.send("Erro no cadastro!")
        }

        console.log("Cadastro confirmado")
        console.log(this)

        return res.render("create-point.html", { saved: true })
    }
    db.run(query, values, afterInsertDate)
})

server.get("/search-results", (req, res) => {

    const search = req.query.search

    if(search == "") {
        // Pesquisa vazia
        return res.render("search-results.html", { total: 0 })
    }



    // pegar os dados do banco de dados

    db.all(`SELECT * FROM places WHERE city LIKE '%${search}%'`, function (err, rows) {
        if (err) {
            return console.log(err)
        }

        const total = rows.length

        // mostrar a pag HTML com os dados do banco de dados
        return res.render("search-results.html", { places: rows, total })

    })

})
// ligar o servidor
server.listen(3000)
