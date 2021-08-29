const knex  = require('knex')({
    client: 'mysql2',
    connection:{
        host: 'localhost',
        user: 'root',
        password: '12345',
        database: 'dbbookshelf',
        charset: 'utf8'
    }
})

module.exports.knex = knex