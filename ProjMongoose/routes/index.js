const controller = require('../controller/customerController')
module.exports = function(app){
   
    app.get('/customers', controller.findall )
    app.get('/get/:id',controller.findfirst)
    app.put('/update',controller.update)
    app.post('/create',controller.create)
    
    app.delete('/delete/:id',controller.delete)
    

}

