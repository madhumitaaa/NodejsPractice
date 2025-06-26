const dbConnect=require('./mongodb')


//console.warn(dbConnect())//we get a promise as output now we canhandle promise in different ways one is promise another is async await
/*dbConnect().then((resp)=>{
    console.warn(resp.find().toArray())
})//this also returns a prmise now we need to resolve it too*/

// dbConnect().then((resp)=>{
//     resp.find().toArray().then((data)=>{
//         console.warn(data)
//     })
   
// })
/*
const main=()=>{
    console.log("main function called");
}
//here we will be handling the dbConnect func
main()*/
const main= async ()=>{
   let data=await dbConnect();
   data=await data.find().toArray();
   console.warn(data);

}
main()