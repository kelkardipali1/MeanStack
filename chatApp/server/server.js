const express = require('express');

const bodyParser = require('body-parser');
const dbConfig = require('./config/config');
const mongoose = require('mongoose');

const route=require('./routes/routes');
const expressValidator = require('express-validator');
const chatControl=require('./controller/chatController');
const app = express();
require('http').createServer(app);
const cors = require('cors');

app.use(expressValidator());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.use(express.static('../Client'));
app.use('/', route);
const server=app.listen(3000,()=>{ console.log("Server started at port : 3000");

})
mongoose.Promise = global.Promise;

mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});
/**
 * socket connection
 */
const io = require('socket.io').listen(server)
io.sockets.on('connection', function (socket) {
    connections = [];
    connections.push(socket)
    console.log("user connected")
    socket.on('new_msg', function (req) {
        console.log("req in server js======>",req);
        chatControl.addMessage(req, (err, result) => {
            if (err) {
                console.log("error on server while receiving data");
            }
            else {
               // socket.emit('emitMsg', result);
            }
            io.emit(req.recieverId, result);
            io.emit(req.senderId,result);
        })
    })
})
/**
 * socket Disconnect
 **/
io.on('disconnect', function (data) {
    connections.splice(connections.indexOf(socket), 1)
    console.log("user disconnected");

})

