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

knex.from('users').select("*")
    .then((rows)=>{
        for (row of rows){
            console.log(`${row['id']} ${row['name']} ${row['age']}`)
        }
    })
    .catch((err)=>{console.log(err); throw err})
    .finally(()=>{
        knex.destroy();
    })