const request = require('request');

const geocode=(add , callback)=>{
    const url= `https://api.mapbox.com/geocoding/v5/mapbox.places/${add}.json?access_token=pk.eyJ1IjoiZGluZXNocGF0aWwiLCJhIjoiY2w0M3ppNmc5MDlldjNjbnl5dXR2aTd1NiJ9.m7B1HzVHQJ1xSnqtVJDyWQ`

    request({url:url,json:true} , (err , res) => {
        if(err){
            callback('not able to reach to server CHECK YOUR INTERNET CONNECTION!!!' , undefined)
        }else if(res.body.features.length===0){
            callback('please provide correct address' , undefined)
        }else {
            callback(undefined, {
                latitude: res.body.features[0].center[1],
                longitude: res.body.features[0].center[0],
                location:res.body.features[0].place_name
            }) 
        }
    })
}

module.exports=geocode;