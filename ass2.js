var exp = require('express');

var app = exp();

app.listen(8100,function(){
	console.log("server started at port 8100");
});

app.get('/greet',function(req,res){
	res.send("<h1>welcome to web app</h1>");
 });

app.get('/login',function(req,res){
	res.sendFile(__dirname + '/login.html');
});


app.get('/logincheck.html',function(req,res){
	var uid = req.query.uid;
	var pwd = req.query.pwd;

	if(uid == "object" && pwd == "knowit")
		res.send("logged in successfully!!!");
	else
		res.send("login failed...");
});

app.all('/*',function(req,res){
	res.send("Invalid URL");
});

	