// importar a dependencia do sqlite3
const sqlite3 = require('sqlite3').verbose()

// inicial o objeto de bancos de dados
const db = new sqlite3.Database('./src/database/database.db')

module.exports = db

// utilizar o o objeto de banco de dados, para a aplicação

// db.serialize( () => {
//     // criar uma tabela
//     // db.run(`
//     //     CREATE TABLE IF NOT EXISTS places (
//     //         id INTEGER PRIMARY KEY AUTOINCREMENT,
//     //         image TEXT,
//     //         name TEXT,
//     //         address TEXT,
//     //         address2 TEXT,
//     //         state TEXT,
//     //         city TEXT,
//     //         items TEXT
//     //     );
//     // `)

//     // // Inserir dados na tabela
//     // const query = `
//     //     INSERT INTO places (
//     //         image,
//     //         name,
//     //         address,
//     //         address2,
//     //         state,
//     //         city,
//     //         items
//     //     ) VALUES (?, ?, ?, ?, ?, ?, ?);
//     // `
//     // const values = [
//     //     "https://images.unsplash.com/photo-1567393528677-d6adae7d4a0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
//     //     "Paperside",
//     //     "Guilherme Gemballa, Jardim América",
//     //     "Número 260",
//     //     "Santa Catarina",
//     //     "Rio do Sul",
//     //     "Papéis e Papelão"
//     // ]

//     // function afterInsertDate (err) {
//     //     if(err){
//     //         return console.log(err)
//     //     }
    
//     //     console.log("Cadastro confirmado")
//     //     console.log(this)
//     // }

//     // db.run(query, values, afterInsertDate)

//     // Consultar dados da tabela
//     // db.all(`SELECT name FROM places`, function(err, rows){
//     //     if (err) {
//     //         return console.log(err)
//     //     }

//     //     console.log('Aqui estão os registros')
//     //     console.log(rows)

//     // })

//     // Deletar um dado da tabela
//     // db.run(`DELETE FROM places WHERE id = ?`, [1], function(err){
//     //     if(err) {
//     //         return console.log(err)
//     //     }

//     //     console.log("Registro deletado")
//     // })


// })

