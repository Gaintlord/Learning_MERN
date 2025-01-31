
function usercourses(app){
    app.get('/courses/SeeACourse',(req,res)=>
        {
          res.send("okay courses working")
        }
        )
        
        app.get('/courses/seeAllCourses',(req,res)=>
        {
        
        }
        )

   
        
}

module.exports = {
    course:usercourses
}