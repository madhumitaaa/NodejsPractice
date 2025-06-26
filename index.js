const express=require('express')
const app=express()
const path=require('path')
const publicPath=path.join(__dirname,'public')
 
app.set('view engine','ejs')

app.get('',(req,res)=>{
    res.sendFile(`${publicPath}/index.html`);
});


app.get('/profile',(req,res)=>{
    res.render('profile');
});

app.get('/about',(req,res)=>{
    res.send(`<input type="text" placeholder="username" value="${req.query.name}"/>
        <button>click me</button>
        <a href="/">GO TO HOME PAGE</a>
        
        `); 
});

app.get('/home',(req,res)=>{
    res.send("hello this is home page");
});

app.get('/profile',(_,resp)=>
{
    const user={
            name:Madhu,
            email:'madhu@northamerica.com',
            country:India
    } 
    resp.render('profile',{user})
});
app.listen(5000);