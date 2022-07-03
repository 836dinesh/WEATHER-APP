
const geocode=require('./util/geocode');
const forecast=require('./util/forecast');
const address=process.argv[2];

if(!address){
    console.log('plz provide address')
}else {
    geocode(address ,(err, data)=>{
        if(err){
            return console.log(err)
        }
        forecast(data.latitude,data.longitude ,(err, forecastData)=>{
            if(err){
                return console.log(err)
            }
            console.log(data.location);
            console.log(forecastData)
        })
    })
}





//RAW APRROACH

// const url = 'http://api.weatherstack.com/current?access_key=942dda1894ffe1868e00ddd2ddccc361&query=37.8267,-122.4233&units=s'
// request({url:url,json:true} , (err,res) => {
//     if(err){
//         console.log('unable to fecth data')
//     }else if(res.body.error){
//         console.log('location not found ')
//     }else{
//         const temperature=res.body.current.temperature;
//         const windSpeed=res.body.current.wind_speed;
//         console.log(`temprature  is ${temperature} and wind speed is ${windSpeed}`);
//     }
// })

// const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/pune.json?access_token=pk.eyJ1IjoiZGluZXNocGF0aWwiLCJhIjoiY2w0M3ppNmc5MDlldjNjbnl5dXR2aTd1NiJ9.m7B1HzVHQJ1xSnqtVJDyWQ'
// request({url:geocodeURL,json:true} , (err,res) => {
//     if(err){
//         console.log('eenable to load data')
//     }else if(res.body.features.length===0){
//         console.log('please provide correct address')
//     }else {
//         const latitude = res.body.features[0].center[1]
//         const longitude = res.body.features[0].center[0]
//         console.log(latitude, longitude)
//     }
// })

