const express = require('express');

const app = express();

const {masterKey,port} = require('./config');

//open Ai
const openai = require('openai');

//middleware 
app.use(express.json())

//route
app.get('/', (req,res)=>{
    res.send('Hello World!')
})

app.listen(port, ()=>{
    console.log(`Server is listening on ${port} `)
})

//open ai 
 openai.apiKey = process.env.REACT_APP_chat