const express = require("express")
const path = require("path")
const PORT = process.env.PORT || 3001 //for deployment to heroku

const app = express()








app.listen(PORT, ()=>{
    console.log('app is listening at PORT: http://localhost:3001/'+PORT)
})