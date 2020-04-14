var express = require('express');
var app = express();
var loginController = require('./controller/loginControler');
app.set('view engine','ejs');
app.use('/public', express.static('public'));

app.use(express.static('./public'));
loginController(app);
app.listen(3000, ()=>console.log("Server is running on port 3000"));