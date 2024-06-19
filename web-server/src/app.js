const express = require('express')
const path = require('path')
const hbs = require('hbs')
const app = express()
const geocode = require('./utils/geocode')
const forecast = require("./utils/forecast")
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
        return res.send({
            error: 'You must provide a search term'
        })
    }
    res.send({
        products:[]
    })
})
app.get('/weather',(req,res)=>{
    if(!req.query.address){
        return res.send({
            error: 'You must enter the address'
        })
    }


    geocode(req.query.address, (error,{latitude, longitude, location})=>{
        if(error){
            return res.send({ error })
        }
        forecast( latitude,longitude, (error, forecastData)=>{
            if(error){
                return res.send({error})
            }
            res.send({
                forecast: forecastData,
                location,
                address: req.query.address
            })
        })
    })

    // res.send({
    //     forecast: 'It is snowing',
    //     location: 'Philadelphia',
    //     address: req.query.address
    // })
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