const express = require("express")
const path = require("path")
const PORT = process.env.PORT || 3001 //for deployment to heroku

const app = express()

const fs =  require("fs")

// extended  exact data from original after parsing.
app.use(express.json())
app.use(express.urlencoded({extended:true}))



// api routes
app.get("/api/notes", (req,res)=>{
    fs.readFile("./db/db.json","utf8",(err,data)=>{
        const newData = JSON.parse(data)
        res.json(newData)
    })
})


app.post("/api/notes", (req,res)=>{

})

app.get("/notes", (req,res)=>{
    res.sendFile(path.join(__dirname, "./public/index.html"))
})


// html routes
//http://localhost:3001/*
app.get("*",(req,res)=>{
    res.sendFile(path.join(__dirname, './public/index.html'))
})



app.listen(PORT, ()=>{
    console.log('app is listening at PORT: http://localhost:'+PORT)
})




