const express = require("express");
var request = require("request");
const path = require('path');
var router =express.Router();
const app = express();
//app.set("view engine", "ejs")
const port = process.env.PORT || 5000; // previously this was 3000

/*
  callBackendAPI = async () => {
    const response = await fetch('/express_backend');
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message) 
    }
    return body;
  };
*/
/*x
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
*/
app.route('/survey-results-post')

.post(function(req,res){
  console.log("post found");
  res.send("Posted!")
});



    router.get('/hello/:name', function(req, res) {
        res.send('hello ' + req.params.name + '!');
    });

    // apply the routes to our application
    app.use('/', router);
  
//app.get("/", (req,res)=>{
//	console.log("in root")
  // Correctly finds the html file...
  //res.sendFile(path.join(__dirname, "../public", "index.html"));
	
  //res.send({message: "in root"})
//	res.se
	//res.render("public/index")
//});
/*
app.get("submit-survey-results", (request, res)=>{
  console.log("survey-result-found");
});
*/
/*
app.get("/submit-survey-results", (req,res)=> {
  
  request (
    "http://localhost:5000",
    function(error,response,body){
      res.send({message:"5000"})
      if(!error &&response.statusCode == 200){
        var parsedBody =JSON.parse(body);
        console.log("in survery results");
        //var temp_c = parsedBody["current"]["temp_c"]
        //res.send({temp_c})
        
      }
    })
   
});
*/
/*
app.get("/", (req,res)=>{
	console.log("in second get")
  // Correctly finds the html file...
  //res.sendFile(path.join(__dirname, "../public", "index.html"));
	
  res.send({message: "in second get"})
//	res.se
	//res.render("public/index")
});
*/


/*

app.get('/express_backend', (req, res) => { //Line 9
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' }); //Line 10
});

*/

/* Starts the server listening on port 3000  */
app.listen(5000)
console.log("Hello")