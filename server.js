const express = require('express');
require('./config/connect');

const app = express();


app.post('/add', ()=>{
    console.log('add work')
})

app.get('/get', ()=>{
    console.log('get work')
})

app.put('/update', ()=>{
    console.log('update work')
})

app.delete('/delete', ()=>{
    console.log('delete work')
})


app.listen(3000,()=>{
    console.log('server work');
})