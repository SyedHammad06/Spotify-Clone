const express = require('express');
const cors=require('cors');
const bodyParser = require('body-parser')
const session=require('express-session')
const MongoStore=require('connect-mongodb-session')(session)
const mongoose=require('mongoose')
const mongoUri="mongodb+srv://turd_waffle:SaifKhan@cluster0.lltqs.mongodb.net/spotify-auth-api"

const port=process.env.PORT || 8080

const app = express();

const routes=require('./routes/routes')

//connecting to database
mongoose.connect(mongoUri, {useNewUrlParser:true})
const db=mongoose.connection;
db.on('err', err=>console.log(err))
db.on('open', ()=>{console.log('connected to database')})

app.use(cors())//cors helps in connecting multiple ports
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))//returns urlencoded middleware, and checks for content-type rest-api requests
app.use('/api', routes);

app.listen(port, ()=>{
    console.log('connected to port '+port);
})