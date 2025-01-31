const {Router}= require('express');


const userRouter = Router();

userRouter.get('',(req,res)=>
    res.send('okay check fine')
    )

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