const cookieParser = require("cookie-parser");
const express=require("express")
const app=express()
const bcrypt=require("bcrypt");
const jwt=require("jsonwebtoken")


app.use(cookieParser())//install this package to raaead the cookie which we sent

app.get("/",(req,res)=>{
// res.cookie("name","renu");
   let token= jwt.sign({email:"renu@example.com"},"secret") //this is create the string which store on the browser
   res.cookie("token",token) //send the string as a cookie
res.send("done")
})
app.get("/cookie",(req,res)=>{

//    console.log(req.cookies.token,"secret")
    // bcrypt.genSalt(10,(err,salt)=>{
    //     bcrypt.hash("renu@#21",salt,(err,hash)=>{
    //         console.log(hash)
    //     })
    // })
console.log(req.cookies.token)
let data = jwt.verify(req.cookies.token, 'secret');
console.log(data) //to decrypt data 
res.send("cookie")
})

app.listen(3000,()=>{
    console.log("server start")
})