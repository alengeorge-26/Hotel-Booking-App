const User=require('../models/Users');

const getAll = async(req,res,next)=>{
    try{
        const allUser= await User.find();
        res.status(200).json(allUser);
    }catch(err){
        next(err);
    }  
}

const getbyId = async(req,res,next)=>{
    try{
        const reqUser= await User.findById(req.params.id);
        res.status(200).json(reqUser);
    }catch(err){
        next(err);
    }
}

const updateUser = async(req,res,next)=>{
    try{
        const updatedUser= await User.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true}); 
        res.status(200).json(updatedUser);
    }catch(err){
        next(err)
    }
}

const deleteUser = async(req,res,next)=>{
    try{
        await User.findByIdAndDelete(req.params.id,{new:true }); 
        res.status(200).json("User Deleted");
    }catch(err){
        next(err); 
    }
}

module.exports = {getAll,getbyId,updateUser,deleteUser};