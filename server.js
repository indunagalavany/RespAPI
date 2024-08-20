//imposrting of express module
var express=require('express')
var app=express()
var port=1200;
app.get('/about',(req,res)=>{
    res.send('About Page')
})
app.get('/users/:name',(req,res)=>{
    var userName=req.params.name;
    res.send('Hello,${user/Name}!');
})
app.listen(port,()=>{
    console.log('server running')
})