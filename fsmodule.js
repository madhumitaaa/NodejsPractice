const fs=require('fs');
// fs.readFile('file.txt','utf8',(err,data)=>{
//     console.log(err,data)

// })
b=fs.writeFileSync('file2.txt',"this is a data2")
console.log(b)
console.log("finished reading a file")