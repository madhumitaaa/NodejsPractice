const express=require('express');
const dbConnect=require('./mongodb');
const app=express();
app.use(express.json());
/*
app.post('/',async(req,resp)=>{
    let data=await dbConnect();
    data=await data.find().toArray();
    resp.send(data)
});*/

app.get('/', (req, res) => {
  res.send('Server is up and running!');
});

app.post('/', async (req, res) => {
    const data = await dbConnect();
    const result = await data.insertOne(req.body); // inserts "peter"
    res.send(result);
});
app.put('/',async(req,resp)=>{
//    console.log(req.body)
let data=await dbConnect();
let result=data.updateOne(
    {name:"nokia14pro"},
    {$set:{price:900}}
)
    resp.send({result:"update"})
})

app.delete("/:id",(req,resp)=>{
    console.log(req.params.id)
    resp.send("done")
})
app.listen(5000)
//mongoose is adv than mongodb as it stops enterning of extra data amd it also includes schemas and models
