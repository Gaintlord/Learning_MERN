const { Schema, default: mongoose } = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;
require('dotenv').config();

mongoose.connect(`${process.env.MongoDB_uri}`)


const userSchema = new Schema({
email:{type:String , unique:true},
password:String,
FirstName:String,
LastName:String


});


const unpaiduserSchema = new Schema({
    email:{type:String , unique:true},
    password:String,
    FirstName:String,
    LastName:String
    
    
    });
const adminSchema =new Schema({

email:{type:String , unique:true},
password:String,
FirstName:String,
LastName:String


})

const courseSchema =new Schema({
    Title:String,
    Discription:String,
    price:Number,
    ImageURL:String,
    createrID:ObjectId
})

const purchaseSchema =new Schema({
    userID:ObjectId,
    courseId:ObjectId
})

const usermodel = mongoose.model('user',userSchema)
const adminmodel = mongoose.model('admin',adminSchema)
const coursemodel = mongoose.model('course',courseSchema)
const purchasemodel = mongoose.model('purchase',purchaseSchema)
const unpaidusermodel=mongoose.model('unpaidmodel',unpaiduserSchema)

module.exports = {
    usermodel,
    adminmodel,
    coursemodel,
    purchasemodel,
    unpaidusermodel
}
