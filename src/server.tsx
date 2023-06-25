import { log } from "console";

const express = require('express');

const {listen, get,use} = express();
const PORT = 3001;

//middleware 
use(express.json())

//route
get('/', (req:any,res:any)=>{
    res.send('Hello World!')
})

listen(PORT, ()=>{
    log(`Server is listening on ${PORT} `)
})




//open Ai

const openai = require('openai');

 openai.apiKey = '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'