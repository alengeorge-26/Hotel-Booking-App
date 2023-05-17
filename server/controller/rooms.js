const Room=require('../models/Rooms');
const Hotel=require('../models/Hotels');
const createError = require('../utils/verify');

const createRoom = async(req,res,next)=>{
    const hotelId=req.params.hotelId;
    const newRoom=new Room(req.body)

    try{
        const savedRoom=await newRoom.save();
        try{
            await Hotel.findByIdAndUpdate(hotelId,{
                $push:{rooms:savedRoom._id},
            });
        }catch(err){
            next(err);
        }
        res.status(200).json(savedRoom);
    }catch(err){
        next(err);
    }
}

const getAll = async(req,res,next)=>{
    try{
        const allRoom= await Room.find();
        res.status(200).json(allRoom);
    }catch(err){
        next(err);
    }  
}

const getbyId = async(req,res,next)=>{
    try{
        const reqRoom= await Room.findById(req.params.roomId);
        res.status(200).json(reqRoom);
    }catch(err){
        next(err);
    }
}

const updatebyId = async(req,res,next)=>{
    try{
        const updatedRoom= await Room.findByIdAndUpdate(req.params.roomId,{$set: req.body},{new:true}); 
        res.status(200).json(updatedRoom);
    }catch(err){
        next(err)
    }
}

const deletebyId = async(req,res,next)=>{
    try{
        await Room.findByIdAndDelete(req.params.roomId,{new:true}); 
        res.status(200).json("Room Deleted");
    }catch(err){
        next(err); 
    }
}

module.exports = {getAll,getbyId,deletebyId,createRoom,updatebyId};