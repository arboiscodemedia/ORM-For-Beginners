const knex = require('../config/db').knex
const bookshelf = require('bookshelf')(knex)

const Customers = bookshelf.Model.extend({
    tableName: 'customers'
})

module.exports = Customers