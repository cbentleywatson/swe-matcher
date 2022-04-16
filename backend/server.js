const express = require("express");
var request = require("request");
const path = require('path');
var router =express.Router();
const app = express();
const port = process.env.PORT || 5000; // previously this was 3000
app.set('port', port)


const firebase = require("firebase");
require("firebase/firestore");

firebase.initializeApp({
    apiKey: "AIzaSyAbsyhPmWwBkwxihBLXU-rRd2JAHa-SYI0",
    authDomain: "swe-matcher.firebaseapp.com",
    projectId: "swe-matcher"
  });

var db = firebase.firestore();



app.route('/test-post')
/* Basic Tests*/
.post(function(req,res){
  console.log("post found");
  res.send("Posted!")
});

router.get('/test-get/:name', function(req, res) {
  res.send('hello ' + req.params.name + '!');
});

app.route('/survey-results-post')
/* Basic Tests*/
.post(function(req,res){
  console.log("survey results input");
  var survey_results = req.body;
  var cur_results =[survey_results];

  cur_results.forEach(function(obj) {
    db.collection("users").add({
        FirstName : obj.FirstName,
        LastName: obj.LastName,
        Year: obj.Year,
        Department: obj.Department,
        Email: obj.Email
    }).then(function(docRef) {
        console.log("Added a user");
    })
    .catch(function(error) {
        console.error("Error adding user: ", error);
    });





  res.send("Posted!")
});


/* Backend proper */
router.get('/match/id', function(req, res) {
  res.send('hello ' + req.params.name + '!');
});



    // apply the routes to our application
app.use('/', router);
});

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