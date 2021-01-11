const express = require('express');
const cors=require('cors');
const csurf=require('csurf')
const bodyParser = require('body-parser')
const session=require('express-session')
const MongoStore=require('connect-mongodb-session')(session)
const mongoose=require('mongoose')
const mongoUri="mongodb+srv://turd_waffle:SaifKhan@cluster0.lltqs.mongodb.net/spotify-auth-api"

const port=process.env.PORT || 8080

const app = express();

const client_id = '9e2edbc49fcb49f78cce20df400672ca'; // Your client id
const client_secret = '7ddc179f4f974e22a0953745b3ce9519'; // Your secret

const routes=require('./routes/routes')

//get spotify token
const getToken=async ()=>{
    
}


//connecting to database
mongoose.connect(mongoUri, {useNewUrlParser:true})
const db=mongoose.connection;
db.on('err', err=>console.log(err))
db.on('open', ()=>{console.log('connected to database')})

//sessions
app.use(session({
    name:'session',
    secret:'gludius maximus',
    expires: new Date(Date.now() + 24 * 60 * 60 * 1000)
}))

app.use(csurf())

//connecting to react ui
app.use(express.static(__dirname + '../client/public'))

app.use(cors())//cors helps in connecting multiple ports
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))//returns urlencoded middleware, and checks for content-type rest-api requests
app.use('/api', routes);

app.listen(port, ()=>{
    console.log('connected to port '+port);
})