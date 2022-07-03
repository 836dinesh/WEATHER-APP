const path=require('path');
const express=require('express');
const hbs=require('hbs');
const geocode=require('./util/geocode');
const forecast=require('./util/forecast');

//defining path for express config
const publicDirPath=path.join(__dirname,'../public');
const viewsPath=path.join(__dirname,'../templates/views')
const partialsPath=path.join(__dirname,'../templates/partials')


// const pathForHelpPage=path.join(__dirname,'../public/help.html')
// const pathFromAboutPage=path.join(__dirname,'../public/about.html')

const app=express();

//setup handlebars engine and view location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
 hbs.registerPartials(partialsPath)

//setup static directory
app.use(express.static(publicDirPath))

app.get('', (req, res)=>{
    res.render('index', {
        title:'weather app',
        name:'dinesh'
    })
})

app.get('/about', (req, res) => {
        res.render('about', {
            name:'dinesh',
            title:"about"
        });
})

app.get('/help', (req, res)=>{
    res.render('help',{
        name:'dinesh',
        title:'help'
    })
})

app.get('/products',(req, res)=>{
    if(!req.query.search){
       return res.send({
            error:'plz provide search term '
        })
    }
    console.log(req.query.search)
    res.send({
        products:[]
    })
})

// app.use('/help', express.static(pathForHelpPage))
// app.use('/about', express.static(pathFromAboutPage))

app.get('/weather', (req, res)=>{
    if(!req.query.address){
        return res.send({
            error:'pl provide address'
        })
    }
    geocode(req.query.address , (err, data)=>{
        if(err){
            return res.send(err)
        }
        forecast(data.latitude,data.longitude ,(err, forecastData)=>{
            if(err){
                return res.send(err)
            }
            res.send({
                forecast:forecastData,
                location:req.query.address
            })
        })
    })
})

app.get('/help/*', (req,res)=>{
    res.render('404', {
        errormsg:'help artical does not found'
    })
})

app.get('*', (req,res)=>{
    res.render('404',{
        errormsg:'404 ERROR'
    })
})

app.listen(3000, ()=>{
    console.log('server is up on 3000 port')
});