let express = require('express');
let app = express()
var bodyParser = require('body-parser')
let jsonParser = bodyParser.json()
const mongoose = require('mongoose');
let gConfig = {}
let cors = require('cors')
gConfig.jwt = require('jsonwebtoken');
const socketIo = require('socket.io');

mongoose.connect('mongodb://localhost:27017/test', { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log('Connected!'));

const connection = mongoose

// midlewares
app.use(jsonParser)
app.use(cors())
app.use(express.json());
app.set('view engine','hbs')
app.use(express.static('public'));
// running server on port
const server = app.listen(3000,()=>{
    console.log('app running on 3000')
})

app.get('/admin', (req, res) => {
    res.render('admin');
});

app.get('/user', (req, res) => {
    res.render('user');
});

gConfig.server = server
gConfig.io = socketIo(server);
gConfig.io.on('connection', (socket) => {
    console.log('A user connected');
});
console.log(gConfig.server);
// common file
require('./config/config')(gConfig);

// route/Apis
require('./routes/getTeams')(app,gConfig)
require('./routes/getPlayer')(app,gConfig)
require('./routes/saveTeams')(app,gConfig)
require('./routes/savePlayer')(app,gConfig)
require('./routes/saveUser')(app,gConfig)
require('./routes/login')(app,gConfig)

// route api for template
require('./routes/landingpage')(app,gConfig)


// Models
require('./models/usermanagement')(connection,gConfig)
require('./models/teams')(connection,gConfig)
require('./models/players')(connection,gConfig)

module.exports = app;
