var mongoose = require('mongoose')

var db = 'mongodb://localhost:27017/dbcustomer'

mongoose.Promise = global.Promise

mongoose.connect(db,
    {
        useNewUrlParser : true,
        useUnifiedTopology: true
    },
    function(error){
        if(error){
            console.log("Error!" + error)
        }
    }    
)