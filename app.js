const request= require('request')

const url = 'http://api.weatherstack.com/current?access_key=e9c2820eb129d21b55e8bfb2b68eeed5&query=New%20York'

request({ url: url }, (error, response)=>{
    const data = JSON.parse(response.body);
   console.log(data.current)
})

