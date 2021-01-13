const express=require('express')
const bodyParser = require('body-parser')
const session=require('express-session')
const MongoStore=require('connect-mongodb-session')(session)
const mongoose=require('mongoose')
const cors=require('cors');
const csurf=require('csurf');
const mongoUri="mongodb+srv://turd_waffle:SaifKhan@cluster0.lltqs.mongodb.net/spotify-auth-api"

const port=process.env.PORT || 8080

const app = express();

const routes=require('./routes/routes')

const store=new MongoStore({
    uri:mongoUri,
    collections:'spotify-sessions'
})

store.on('error', err=>console.log(err))

//connecting to database
mongoose.connect(mongoUri, {useNewUrlParser:true})
const db=mongoose.connection;
db.on('err', err=>console.log(err))
db.on('open', ()=>{console.log('connected to database')})
//sessions

app.use(session({
    secret:'gludius maximus',
    expires: new Date(Date.now() + 24 * 60 * 60 * 1000),
    store:store,
    resave:true,
    cookie:{
        httpOnly:true,
        secure:true,
    }
}))

//custom cors config
const corsOptions={
    origin:'http://localhost:3000/',
    methods: "GET,HEAD,POST,PATCH,DELETE,OPTIONS",
    credentials:true,
    allowedHeaders: "Content-Type, Authorization, X-Requested-With",
}

//currently it's a test middleware which i will delete later
app.get('/cookie', cors(corsOptions) ,(req, res)=>{
    const option={
        secure:true,
        httpOnly:false,
        domain:'http://localhost:3000/'
    }

    return res
        .cookie('cookieName', 'cookieValue', option)
        .status(200)
        .send('cookie sent')
})

//connecting to react ui
app.use(cors(corsOptions))//cors helps in connecting multiple ports

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))//returns urlencoded middleware, and checks for content-type rest-api requests
app.use('/api', routes);

app.listen(port, ()=>{
    console.log('connected to port '+port);
})