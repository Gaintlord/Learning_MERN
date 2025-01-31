const express  = require("express");
const mongoose  = require("mongoose");
const{usermodel} = require("./DataBase")
const app = express();
require('dotenv').config();
console.log(process.env.MongoDB_uri);
app.use(express.json())

const {userRouter} = require("./routerByExpress/user_route.js");
const {courseRouter}  = require("./routerByExpress/user_courses.js");
const {adminRouter} = require("./routerByExpress/admin_route.js")
 app.use('/user',userRouter);
 app.use('/course',courseRouter);
 app.use('/admin',adminRouter)





async function start () {
    await mongoose.connect(`${process.env.MongoDB_uri}`)
       app.listen(3001)
    
}

start();