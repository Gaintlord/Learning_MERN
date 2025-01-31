function creatingroute(app){

    app.get('/user',(req,res)=>
        res.send('okay check fine')
        )

        app.post('/user/signup',(req,res)=>{

        }
        )
        
        app.post('/user/login',(req,res)=>
        {
        
        }
        )
        
        app.post('/user/purchaseCourse',(req,res)=>
        {
        
        }
        )

}

module.exports = {
    createroute:creatingroute 
}