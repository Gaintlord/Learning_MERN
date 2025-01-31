const {Router} = require('express');

const courseRouter = Router();

courseRouter.get('',(req,res)=>{
res.send('working fine here')
})

courseRouter.get('/SeeACourse',(req,res)=>
    {
        const a = req.query.name
      res.send(`${a} bhai sahib chal raha hai `)
    }
    )
    
    courseRouter.get('/seeAllCourses',(req,res)=>
    {
    
    }
    )

    module.exports = {
        courseRouter:courseRouter
    }
