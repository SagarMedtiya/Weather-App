const express = require('express')
const path = require('path')

console.log(__dirname)
console.log(__filename)
const app = express()

app.get('',(req,res)=>{
    res.send('Hello express')
})

app.get('/help',(req,res)=>{
    res.send({
        name: 'Andrew',
        age: 27
    })
})



app.listen(3000,()=>{
    console.log('Server is up on port 3000')
})