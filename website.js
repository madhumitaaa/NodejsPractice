
const {Console} =require('console');
const fs=require('fs');
const http =require('http');
const port=process.env.PORT||3000;


const server=http.createServer((req,res)=>{
    console.log(req.url)
     res.statusCode=200;
        res.setHeader('Content-type','text/html')
    if(req.url=='/')
    {
        res.statusCode=200;
           res.end('<h1>this is meee</h1><p>Heyy there!</p>');
    }
        else if(req.url=='/about')
    {
        res.statusCode=200;
           res.end('<h1>this is madhu</h1><p>Heyy there! this is about madhu</p>');
    }
        else if(req.url=='/hello')
    {
        res.statusCode=200;
        const data=fs.readFileSync('index.html')
           res.end(data.toString());
    }

          else{
        
               res.statusCode=400;
                 res.end('<h1>not found</h1><p> server error</p>');
     }
        
})
server.listen(port,()=>{
  console.log(`server is running on port ${port}`);
})