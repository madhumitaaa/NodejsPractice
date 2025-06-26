/*const hp=require('http');
hp.createServer((req,res)=>{
    res.write("<h1>HEY MADHU IS LEARNING NODEJS</h1>");
    res.end();
    
}).listen(4500);*/
//console.log(process.argv)
const fs=require('fs')
const input=process.argv
if(input[2]=='add')
{
    fs.writeFileSync(input[3],input[4])
}
 else if(input[2]=='remove')
 {
    fs.unlinkSync(input[3])
 }
 else{
    console.log("invalid op")
 }