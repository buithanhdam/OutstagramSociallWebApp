const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const AuthRoute = require('./routes/AuthRoutes');
const UserRoute = require('./routes/UserRoutes');

const app = express();
dotenv.config();

app.use(bodyParser.json({limit:'30mb',extended: true}));
app.use(bodyParser.urlencoded({limit:'30mb',extended: true}));

mongoose.connect(process.env.MONGOOSE_ACCESS_CONNECT,{useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>{app.listen(process.env.PORT, ()=>{console.log(`app listen on port http://localhost:${process.env.PORT}`)})})
.catch((err)=>{console.log(err)})

app.use('/auth',AuthRoute);
app.use('/user',UserRoute);
