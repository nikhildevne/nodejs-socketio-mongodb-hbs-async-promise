let express = require('express')
let app = express()
var bodyParser = require('body-parser')
let jsonParser = bodyParser.json()
const mongoose = require('mongoose');
let gConfig = {}
let cors = require('cors')
let connection;
gConfig.jwt = require('jsonwebtoken');

mongoose.connect('mongodb://127.0.0.1:27017/test')
.then(() => console.log('Connected!'));

connection = mongoose

// custom midleware
function midleware(req,res,next){
    next()
}

// midlewares
app.use(midleware)
app.use(jsonParser)
app.use(cors())

// running server on port
app.listen(3000,()=>{
    console.log('app running on 3000')
})

// common file
require('./config/config')(gConfig);

// route/Apis
require('./routes/getUserinfo')(app,gConfig)
require('./routes/getProductDetails')(app,gConfig)
require('./routes/login')(app,gConfig)
require('./routes/saveUsermanagement')(app,gConfig)

// Models
require('./models/usermanagement')(connection,gConfig)
require('./models/products')(connection,gConfig)

module.exports = app;