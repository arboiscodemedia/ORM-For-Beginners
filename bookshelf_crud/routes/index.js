const controller = require('../controller/customerController')
module.exports = function(app){

   app.get('/customers',controller.customers)
   app.post('/create', controller.create)
   app.get('/get/:id',controller.get)
   app.put('/update',controller.update)
   app.delete('/delete/:id',controller.delete)
}