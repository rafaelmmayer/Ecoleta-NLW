const express = require('express')
const server = express()
const nunjucks = require('nunjucks') // utilizar template engine (Nujunks)

// configurar pasta Public

server.use(express.static("public"))

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
    return res.render("create-point.html")
})

server.get("/search-results", (req, res) => {
    return res.render("search-results.html")
})
// ligar o servidor
server.listen(3000)
