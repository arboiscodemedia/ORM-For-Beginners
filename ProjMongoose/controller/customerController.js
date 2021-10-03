
var Customer = require('../model/Customer')

exports.findall = async(req,res) =>{
    Customer.find(function(err,data){
          if(err){
              console.log(err)
            }
         else{
             res.send(data)
         }   
            
    })
}



exports.create = async(req,res) =>{
    const { name, email, address, phone } = req.body

    var newCustomer = new Customer()
    newCustomer.Name = name
    newCustomer.Email = email
    newCustomer.Address = address
    newCustomer.Phone = phone

   newCustomer.save(function(err,data){
      if(err){
          console.log(err)
      }
      else{
          res.send("Data inserted");
      }

   })
}

exports.findfirst = async(req,res) =>{
   const { id } = req.params
   Customer.findOne({ id: id },
      function(err,data){
          if(err){
              console.log(err)
          }
          else{
              res.send(data)
          }
      }
    )    
}
 
exports.update = async (req, res) =>{ 
    const { id } = req.body
     Customer.findByIdAndUpdate(id, 
    {
        $set : req.body
    }, 
    function(err, data) {
        if(err){
            console.log(err);
        }
        else{
            res.json({
                message: 'Updated Successfully!'
            });
            console.log("Data updated!");
        }
    });  
} 


 
exports.delete = async (req, res) =>{ 
  const { id } = req.params
   Customer.findByIdAndDelete(id,
   function(err, data) {
    if(err){
        console.log(err);
    }
    else{
        res.json({
            message: 'Record Deleted!'
        });
        console.log("Data updated!");
    }
  });  
}

