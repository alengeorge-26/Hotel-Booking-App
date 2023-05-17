const Hotels=require('../models/Hotels');

const getAll = async(req,res,next)=>{
    try{
        const allHotel= await Hotels.find();
        res.status(200).json(allHotel);
    }catch(err){
        next(err);
    }  
}

const getbyId = async(req,res,next)=>{
    try{
        const reqHotel= await Hotels.findById(req.params.id);
        res.status(200).json(reqHotel);
    }catch(err){
        next(err);
    }
}

const createHotel = async(req,res,next)=> {
    const newHotel= new Hotels(req.body);
    try{
        const savedHotel= await newHotel.save(); 
        res.status(200).json(savedHotel);
    }catch(err){
        next(err);
    }
}

const updateHotel = async(req,res,next)=>{
    try{
        const updatedHotel= await Hotels.findByIdAndUpdate(req.params.id,{$set: req.body},{new:true }); 
        res.status(200).json(updatedHotel);
    }catch(err){
        next(err)
    }
}

const deletebyId = async(req,res,next)=>{
    try{
        await Hotels.findByIdAndDelete(req.params.id,{new:true }); 
        res.status(200).json("Hotel Deleted");
    }catch(err){
        next(err); 
    }
}

module.exports = {getAll,getbyId,deletebyId,createHotel,updateHotel};