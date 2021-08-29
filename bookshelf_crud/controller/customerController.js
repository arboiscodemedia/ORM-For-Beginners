const { response } = require('express');
var Customers = require('../models/Customers')


exports.customers = async (req, res) =>{
    try{
       const response = await Customers
          .forge()
          .fetchAll()
          .then(function(data){
              const res = {
                   success: true,
                   data: data
              }
              return res;
          })
          .catch(error=>{
              const res = {
                  success: false,
                  error: error
              }
              return res
          })
      
         res.json(response)   


    }
     catch(e){

        console.log(`Failed to fetch the data: ${e}`)
     } 
}



exports.create = async (req, res) =>{
    try{
       
        const { name, email, address, phone } = req.body
       
      const response = await Customers.forge({
           name: name,
           email: email,
           address : address,
           phone : phone
      }).save()
        .then(function(data){
            const res = {
                success: true,
                data: data,
                message: "created successfully"
        }
        return res;
        })
        .catch(error=>{
            const res = {
                success: false,
                error: error
            }
            return res
        })
     res.json(response) 

    }
    catch(e){

        console.log(`Failed to save the data: ${e}`)
     } 

}




exports.get = async (req, res) =>{
    try{
      const { id } = req.params
        const  response = await Customers.forge({
            'id' : id
        }).fetch()
        .then(function(data){
            if(data.length !=0){
                const res = {
                    success: true,
                    data: data 
                    }
                    return res;
              }
              else{
                  res.status(404).send({
                      success: false,
                      message: 'Record not found with id:' + id
                  })
              }
          })
          .catch(error=>{
            const res = {
                success: false,
                error: error
            }
            return res
        }) 
        res.json(response) 

    }
    catch(e){

        console.log(`Failed to save the data: ${e}`)
     } 

}



exports.update = async (req, res) =>{
    try{
        const { id, name, email, address, phone } = req.body
        await Customers
          .where('id',id)
          .fetch()
          .then(function(customers){
               customers
                  .save({
                    name: name, 
                    email: email, 
                    address: address, 
                    phone: phone
                  })
                  .then(function(data){
                      const response ={
                          success: true,
                          data : data,
                          message: "successfully Updated"
                      }
                      res.json(response)
                  })
                  .catch(error=>{
                    const res = {
                        success: false,
                        error: error
                      }
                      res.json(response)
                   })
 
          })
          .catch(error=>{
            const res = {
                success: false,
                error: error
              }
              res.json(response)
           })
    }
    catch(e){

        console.log(`Failed to save the data: ${e}`)
     } 
}




exports.delete = async (req, res) =>{
    try{
        const { id } = req.params
        const response = await Customers
               .where('id',id)
               .destroy()
               .then( function(data){
                   const res = {
                       success : true,
                       message: `id ${id}  Deleted successfully`
                   }
                   return res;
               })
               .catch(error=>{
                const res = {
                    success: false,
                    error: error
                  }
                  return res;
               })

             res.json(response)   

    }
    catch(e){

        console.log(`No Record Found: ${e}`)
     } 
}