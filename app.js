const express = require('express');
const userRouter = require('./routes/user.js');

const app = express();

app.use(express.static('./public'));

app.listen(process.env.PORT || 3000);

app.set('view engine', 'ejs');



app.use(userRouter);

app.use((req,res,next)=>{
    res.render('404',{
        title: "Amadi Chukwuemeka Austin | Software Engineer",
    
        description:"Am a Software Engineer who is passionate about solving complex problems by Building technological solutions out of business needs",});
}
);



module.exports = app;
