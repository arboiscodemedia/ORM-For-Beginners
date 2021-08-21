var Customers = require('../models/Customers')
const { Op } = require('sequelize')

exports.list = async (req, res) =>{
    try
    { 
     const response = await Customers.findAll()
     .then(function(data){
         const res = {
             success: true,
             data: data
         }
         return res;
     })
     .catch(error =>{
         const res ={
             success: false,
             error: error
         }
         return res;
     })
     res.json(response) 
    } catch(e){
        console.log(e)
    } 
}


exports.create = async (req,res)=>{  
    try
      {
            const { name, email , address, phone } = req.body
            const response = await Customers.create({
                name: name, 
                email : email , 
                address : address , 
                phone  :  phone
            }) 
            .then(function(data){
                const res = {
                    success: true,
                    data: data,
                    message: 'Successfully created'
                }
                return res;
            })
            .catch(error =>{
                const res ={
                    success: false,
                    error: error
                }
                return res;
            })
            res.json(response)
   } catch(e){
       console.log(e)
   }
}


exports.update = async (req,res)=>{  
    try
      {
        const { id, name, email , address, phone } = req.body
        const response = await Customers.update({
            name: name, 
            email : email , 
            address : address , 
            phone  :  phone
        },{
             where : { id: id }
        }) 
        .then(function(data){
         if(data.length!= 0){  
                    const res = {
                        success: true,
                        data: data,
                        message: 'updated Successfully'
                    }
                    return res;
            }
            else{
                res.status(500).send({
                    success: false,
                    data:data,
                    message: 'Could not update with this id ' + id
                })
            }
        })

        res.json(response)

      }
   catch(e){
       console.log(e)
   }
}


exports.delete = async (req,res)=>{  
   try{
      const { id } = req.params
    
      const response = await Customers.destroy({
          where: { id : id }
      })
      .then(function(data){
        if(data.length !=0){
            const res = {
                success: true,
                data: data,
                message: 'Deleted successfully'
            }
            return res;
        }
        else{
          res.status(500).send({
            success: false,
            data: data,
            message: 'Could not delete with id ' + id
          })
        }


      })
      .catch(error =>{
            const res ={
                success: false,
                error: error
            }
            return res;
        })
        res.json(response)

   }
   catch(e){
    console.log(e)
  }

}




exports.get = async (req,res)=>{  
    try{
       const { id } = req.params
     
       const response = await Customers.findAll({
           where: { id : id }
       })
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
             data: data,
             message: 'No Record Found with id ' + id
           })
         }
 
 
       })
       .catch(error =>{
             const res ={
                 success: false,
                 error: error
             }
             return res;
         })
         res.json(response)
 
    }
    catch(e){
     console.log(e)
   }
 
 }