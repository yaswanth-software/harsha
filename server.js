const express = require('express')
const port = 4005
const app = express()

app.use(express.json())

app.listen(port,()=>{
    console.log(`server is connected http://localhost:${port}`)
})

app.get('/',(req,res)=>{
    res.status(202).send('hi')
})

app.post('/',(req,res)=>{
    const{age,mobilenumber}=req.body
    if(!age){
        return res.status(405).json({message:`age is not given`})
    }
    if(!mobilenumber){
        return res.status(405).json({message:`number not given`})
    }
    return res.status(202).json({message:`all are given`})
    
})