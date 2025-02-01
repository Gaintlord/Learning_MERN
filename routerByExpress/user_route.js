const {Router}= require('express');
const {z} = require('zod')
const {usermodel} = require('../DataBase.js')
const userRouter = Router();

userRouter.get('',async (req,res)=>

{
const validate = z.object({
    email:z.string().email(),
    password:z.string().min(8),
    FirstName:z.string(),
    LastName:z.string()
})

try {
validate.parse(req.body)    

const {email,password,FirstName,LastName}=req.body
usermodel.create({
    email:email,
    password:password,
    FirstName:FirstName,
    LastName:LastName
})

res.status(200).send("data is valid and entered")
} catch (error) {
    res.status(400).send("nikal jayo madherchod")
}

})

    userRouter.get('/signup',(req,res)=>{
        res.send('working as of now')
    }
    )
    
    userRouter.post('/login',(req,res)=>
    {
    
    }
    )
    
    userRouter.post('/purchaseCourse',(req,res)=>
    {
    
    }
    )

    module.exports = {
        userRouter:userRouter
    }