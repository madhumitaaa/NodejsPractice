//post api with mongoose
const express=require("express");
require('./config');
const Product=require("./product");

const app=express();
app.use(express.json());

app.post("/create",async(req,resp)=>{
    let data=new Product(req.body);
    let result=await data.save();
    console.log(result)
    resp.send(result)
})

//get ,delete and put api
app.get("/list",async (req,resp)=>{
    let data= await Product.find();
    resp.send(data);
})


app.delete("/delete/:_id",async (req,resp)=>{
    console.log(req.params)
    let data=await Product.deleteOne(req.params)
    resp.send(data);
})







app.listen(5000);

