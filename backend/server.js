const mongoose = require('mongoose');
const express = require("express");
var request = require("request");
const path = require('path');
var router =express.Router();
const app = express();

var cors = require('cors')
const port = process.env.PORT || 5000; // previously this was 3000
app.set('port', port);

app.use(cors())

mongoose.connect('mongodb://localhost:27017/',{
	dbname: 'my-dbname',
	useNewUrlParser: true,
	useUnifiedTopology: true
	},err => err ? console.log(err) :
	console.log(' connected to my-dbname database'));

  const userSchema = new mongoose.Schema({
	name : {
		type: String,
		required : true,
	},
	date: {
		type: Date,
		default: Date.now,
	},

});

const User = mongoose.model('users', userSchema);
User.createIndexes();
// end of db set up??
app.get('/test-mongo', (req,resp) =>{
	resp.send("app is working");

});









app.get('/simplest/:name', function (req, res, next) {
  //res.json({msg: 'This is CORS-enabled for all origins!'})

    //res.send({ title: 'GeeksforGeeks' });
    console.log("first name: " + req.params.name );
    res.send("first name: " + req.params.name );
   
})

/*
const firebase = require("firebase");
require("firebase/firestore");

firebase.initializeApp({
    apiKey: "AIzaSyAbsyhPmWwBkwxihBLXU-rRd2JAHa-SYI0",
    authDomain: "swe-matcher.firebaseapp.com",
    projectId: "swe-matcher"
  });

var db = firebase.firestore();
*/


app.route('/test-post')
/* Basic Tests*/
.post(function(req,res){
  console.log("post found");
  res.send("Posted!");
});

app.route('/simplest2')
/* Basic Tests*/
.get(function(req,res){
  console.log("post found");
  res.send("Posted!");
});



router.get('/test-get/:name', function(req, res) {
  res.send('hello ' + req.params.name + '!');
  console.log("got get");
});



// WORKING!!!! -- Gives the string from get request
// The string can then be parsed and manipulated
/*
router.get('/simplest/:name', (req, res) => {
    
    //var user =JSON.parse(req.params.name);
    //res.send('hello ' + req.params.name + '!');
    //res.send({ title: 'GeeksforGeeks' });
    
    res.send("From the simplest function");
    console.log("first name: " + req.params.name );
   // console.log("last name: "+ req.params.last);
  });
*/


/*
app.route('/simplest/:name').get(function(){
    
  //var user =JSON.parse(req.params.name);
  //res.send('hello ' + req.params.name + '!');
  //res.send({ title: 'GeeksforGeeks' });
  
  res.send("From the simplest function");
  console.log("first name: " + req.params.name );
 // console.log("last name: "+ req.params.last);
});

('/simplest/:name', (req, res) => {
    
  //var user =JSON.parse(req.params.name);
  //res.send('hello ' + req.params.name + '!');
  //res.send({ title: 'GeeksforGeeks' });
  
  res.send("From the simplest function");
  console.log("first name: " + req.params.name );
 // console.log("last name: "+ req.params.last);
});

*/










router.get('/test-longer/:name', function(req, res) {
    
    var user =JSON.parse(req.params.name);
    res.send('hello ' + req.params.name + '!' + " From user obj: "+ user.fn);
    console.log("first name:" + req.params.name );
   // console.log("last name: "+ req.params.last);
  });

  /// working
  router.get('/submit-user-results:results', function(req, res) {
    
    var user =JSON.parse(req.params.name);
    res.send('hello ' + req.params.results + '!' + " From user obj: "+ user.fn);
    console.log("first name:" + req.params.results );
   // console.log("last name: "+ req.params.last);
  });



/*
const bodyParser = require("body-parser");

router.post(‘/login’,(req, res) => {
    var user_name = req.body.user;
    var password = req.body.password;
    console.log(“User name = “+user_name+”, password is “+password);
    res.end(“yes”);
    });
*/






/* Basic Tests*/
/*
app.route('/survey-results-post')

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
*/

/* Backend proper */
router.get('/match/id', function(req, res) {
  res.send('hello ' + req.params.name + '!');
});


router.get('/response', function(req, res) {
    res.send('hello ' + req.params.name + '!');
  });



    // apply the routes to our application
app.use('/', router);
  

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
console.log("Hello");
app.listen(5000);
