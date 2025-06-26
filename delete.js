const dbConnect=require('./mongodb')
const deleteData=async()=>{
   let data= await dbConnect();
   let result=await data.deleteOne({name:'vivo'})
    console.warn(data); 
}
deleteData();