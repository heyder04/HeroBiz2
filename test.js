express = require('express');

app = express();

app.get("/home", function(req, res){
    app.send("<h1>Hello World</h1>")
})

app.listen(3000, function(){
    console.log('site is working');
})