const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const database = require('./database.config');
//เชื่อม DB
mongoose.Promise = global.Promise;
mongoose.connect(database.db, {
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(() =>{
    console.log("เชื่อมต่อแล้ว");
}).catch(error => {
    console.log("เชื่อมต่อไม่สำเร็จ", error.message);
})
//ประกาศ port
const PORT = process.env.PORT || 5000;

//ประกาศ api
const memberAPI = require('./routes/member.routes');

const app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(cors());

app.use('/api/member', memberAPI);

const server = app.listen(PORT, () => {
    console.log('เชื่อมต่อกับพอร์ต 5000 แล้ว!!')
})

