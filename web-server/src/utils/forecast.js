const request = require('request')

const forecast =(latitude,longitude, callback)=>{
    const url = 'http://api.weatherstack.com/current?access_key=e9c2820eb129d21b55e8bfb2b68eeed5&query='+latitude+','+longitude+'&units=f'
    request({ url , json:true },(error, {body})=>{
        if(error){
            callback('Unable to connect to weather service', undefined)
        }else if(body.error){
            callback('Unable to find location',undefined)
        }
        else{
            callback(undefined,{
                Temperature: body.current.temperature,
                Preciptation: body.current.precip
            })
        }
    })
}


module.exports = forecast