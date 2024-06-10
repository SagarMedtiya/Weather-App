const express = require('express')
const path = require('path')
const hbs = require('hbs')
const app = express()

//define paths for express config
const viewsPath = path.join(__dirname, '../templates/views')
const partialPath = path.join(__dirname,'../templates/partials')

//setup handlebars engine and views location
app.set('view engine','hbs')
app.set('views',viewsPath)
hbs.registerPartials(partialPath)

app.use(express.static(path.join(__dirname, '../public')))
app.get('',(req,res)=>{
    res.render('index',{
        title:'weather app',
        name : 'sagar'
    })
})

app.get('/about',(req,res)=>{
    res.render('about',{
        title: 'about page',
        name: 'sagar medtiya'
    })
})
app.get('/help',(req,res)=>{
    res.render('help',{
        helpText: 'This is some helpful text',
        title: 'Help',
        name: 'Sagar'
    })
})
app.get('/products',(req,res)=>{
    if(!req.query.search){
        res.send({
            error: 'You must provide a search term'
        })
    }
    res.send({
        products:[]
    })
})

app.get('/help/*',(req,res)=>{
    res.render('404',{
        title: '404',
        name: 'Sagar Medtiya',
        'errorMessage': 'Help article not found'
    })
})

app.get('*',(req,res)=>{
    res.render('404',{
        title: '404',
        name: 'Sagar Medtiya',
        errorMessage: 'Page not found'
    })
})

app.listen(3000,()=>{
    console.log('Server is up on port 3000')
})