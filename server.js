const express= require("express");
const app= express();

app.get('/',function(request,response){
    response.send('YEEE');
});
app.listen(69,function(){
    console.log("Server is up at port 69")
});