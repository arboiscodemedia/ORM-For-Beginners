 const option = {
    client: 'mysql2',
    connection:{
        host: '127.0.0.1',
        user: 'root',
        password: '12345',
        database: 'knexdb'
    }
}

const knex = require('knex')(option)

knex.schema.createTable('users',(table)=>{
      table.increments('id')
      table.string('name')
      table.integer('age')

})
.then(()=> console.log("table created"))
.catch((err)=>{console.log(err); throw err})
.finally(()=>{
    knex.destroy();
})
