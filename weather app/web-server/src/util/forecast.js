const request = require('request');

const forecast=(lat,long,callback)=>{
    const url=`http://api.weatherstack.com/current?access_key=942dda1894ffe1868e00ddd2ddccc361&query=${lat},${long}&units=s`
    request({url:url,json:true},(err,res)=>{
        if(err){
            callback('unable to fecth data',undefined)
        }else if(res.body.error){
            callback('location not found ',undefined)
        }else {
            callback(undefined,`temprature  is ${res.body.current.temperature} kelvin and wind speed is ${res.body.current.wind_speed}`)
        }
    })
}

module.exports=forecast