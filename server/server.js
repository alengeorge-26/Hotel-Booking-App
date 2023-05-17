const express=require('express');
const dotenv=require('dotenv');
const mongoose=require('mongoose');
const cors=require('cors');
const authRouter=require('./routes/auth');
const hotelsRouter=require('./routes/hotels');
const roomsRouter=require('./routes/rooms');
const usersRouter=require('./routes/users');
const cookieParser=require('cookie-parser');
const app=express();

dotenv.config();

app.use(cors());

const connect = async() => {
    try{
        await mongoose.connect(process.env.MONGO);
        console.log("Connnected to MongoDB");
      } catch (error) {
        console.log(error);
      }
}

mongoose.connection.on("disconnected",()=>{
    console.log("Disconnnected from MongoDB");
});

app.use(cookieParser());
app.use(express.json());
app.use('/auth',authRouter);
app.use('/hotels',hotelsRouter);
app.use('/rooms',roomsRouter);
app.use('/users',usersRouter);

app.use((err,req,res,next)=>{
  const errorStatus = err.status||500;
  const errorMessage = err.message||"Something went wrong!"
  return res.status(errorStatus).json({
    success:false,
    status:errorStatus,
    message:errorMessage,
    stack:err.stack,
  });
});

app.listen(8080,()=>{
    connect()
    console.log("Hello World");
});