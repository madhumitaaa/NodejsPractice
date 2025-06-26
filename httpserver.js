const http =require('http');


const port=process.env.PORT||3000;


const server=http.createServer((req,res)=>{
    console.log(req.url)
        res.statusCode=200;
        res.setHeader('Content-type','text/html')
        res.end('<h1>this is meee</h1><p>Heyy there!</p>')
      ;
})
server.listen(port,()=>{
  console.log(`server is running on port ${port}`);
})