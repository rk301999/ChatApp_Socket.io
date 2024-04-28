const express = require("express") //express is a module
const app = express() //express is a function 
const path = require("path")
require("dotenv/config")

console.log(process.env);
const PORT = process.env.PORT || 4000

app.use(express.static(path.join(__dirname,'public')))

const server = app.listen(PORT , ()=>{
    console.log(`💬 server is on port ${PORT}`);
})

