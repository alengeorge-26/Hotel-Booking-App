const mongoose=require('mongoose');

const RoomsSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    desc:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    maxPeople:{
        type:Number,
        required:true
    },
    roomNumbers:
        [{number:Number,unavailableDates:{type:[Date]}}]
});

module.exports = mongoose.model("Rooms",RoomsSchema);