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

const users = [
      { name: 'Ricky', age: 40},
      { name: 'Mylyn', age: 35},
      { name: 'Ricmonde', age: 8},
      { name: 'Sean', age: 7},
      { name: 'Miggy', age: 7}
]

knex('users').insert(users)
  .then(()=>console.log("data inserted"))
  .catch((err)=>{console.log(err); throw err})
.finally(()=>{
    knex.destroy();
})

