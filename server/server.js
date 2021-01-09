const express = require('express');
const cors=require('cors');
const bodyParser = require('body-parser')

const port=process.env.PORT || 8080

const app = express();

const routes=require('./routes/routes')

app.use(cors())//cors helps in connecting multiple ports
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))//returns urlencoded middleware, and checks for content-type rest-api requests
app.use('/api', routes);

app.listen(port, ()=>{
    console.log('connected to port '+port);
})