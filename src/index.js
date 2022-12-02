import express, { json } from "express";
import mongoose from "mongoose";
import {} from 'dotenv/config';



const port = process.env.PORT;
const DB_URL= process.env.DB_URL;
const app = express();

app.use(json());

async function startApp (){
    try{
        await mongoose.connect(DB_URL); //questo serve per connettere mongo database
        app.listen(port, ()=>{
            console.log(`Server started on port ${port}`);
        })
    }catch(error){
        console.log(error);
    }
}

startApp();