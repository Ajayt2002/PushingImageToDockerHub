import express from "express";

const app=express()

app.use(express.json())

app.get('/',(req,res)=>{
    res.status(200).json({
        "message":"welcome to dashboard"
    })
})

app.get('/user/ajay',(req,res)=>{
    res.status(201).json({
        "message":"Hi Ajay welcome to team"
    })
})
app.get('/user/sai',(req,res)=>{
    res.status(201).json({
        "message":"Hi sai welcome to team"
    })
})


app.listen(3000,()=>{
    console.log("Server is running on post 3000")
})