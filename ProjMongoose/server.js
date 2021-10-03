const express  = require('express')
const api = require('./db')
const app = express()

app.use(express.json({}))
app.use(express.urlencoded({
    extended: true
}))


const routes = require('./routes/index')(app)


app.set('port',process.env.PORT || 3000)

var server = app.listen(app.get('port'),
   function(err){
       if(err) throw err;
       var massage =
       'Sever is running at http://localhost:' + server.address().port
       console.log(massage)
   }
)
