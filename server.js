const express = require("express")
const path = require("path")
const PORT = process.env.PORT || 3001 //for deployment to heroku

const app = express()


// extended  exact data from original after parsing.
app.use(express.json())
app.use(express.urlencoded({extended:true}))



// api routes


// html routes
//http://localhost:3001/*
app.get("*",(req,res)=>{
    res.sendFile(path.join(__dirname, './public/index/html'))
})


app.listen(PORT, ()=>{
    console.log('app is listening at PORT: http://localhost:3001/'+PORT)
})




