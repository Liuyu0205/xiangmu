var fs=require("fs");
var http=require("http");
var server=http.createServer(function(req,res){
	res.setHeader('Access-Control-Allow-Origin',"*");
	if(req.url=="/data/person.json"){
		fs.readFile("data/person.json","utf-8",function(err,data){
		res.end(data)
		});
	}
	else if(req.url=="/data/song.json"){
		fs.readFile("data/song.json","utf-8",function(err,data){
		res.end(data)
		});
	}
	else if(req.url=="/data/radio.json"){
		fs.readFile("data/radio.json","utf-8",function(err,data){
		res.end(data)
		});
	}
	else if(req.url=="/data/list.json"){
		fs.readFile("data/list.json","utf-8",function(err,data){
		res.end(data)
		});
	}   
	console.log(req.url);
	

});
server.listen(3000);