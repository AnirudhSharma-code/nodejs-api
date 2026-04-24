import express from 'express';

const app=express();


app.get('/',(req,res)=>{
    res.json({
        status:"OK"
    })
})

app.listen(8080,()=>{
    console.log('App is running ..');
})