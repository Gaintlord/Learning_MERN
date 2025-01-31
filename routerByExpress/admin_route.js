const {Router} = require('express');

const adminRouter = Router();

adminRouter.get('/signup',(req,res)=>{
    res.send('working as of now')
}
)

adminRouter.post('/login',(req,res)=>
{

}
)

module.exports = {
    adminRouter:adminRouter
}