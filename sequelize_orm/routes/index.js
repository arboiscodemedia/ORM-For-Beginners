
const mainController = require('../controller/indexController')
const customerContoller = require('../controller/customerController')
module.exports = function(app){
   
    app.get('/', mainController.index )
    app.get('/list',customerContoller.list)
    app.put('/update',customerContoller.update)
    app.get('/get/:id',customerContoller.get)
    app.delete('/delete/:id',customerContoller.delete)
    app.post('/create',customerContoller.create) 
}