const Customers = require("../models/Customers")

exports.index = async (req,res)=>{     
    res.send({
        success: true,
        message: 'Welcome to server'    
    })
}



