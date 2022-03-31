const express = require("express")
const app = express()
const path = require('path');
//app.set("view engine", "ejs")
const port = 5000;

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
/*
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
*/

app.get("/", (req,res)=>{
	res.send("Hello World")
  console.log("Here")
  // Correctly finds the html file...
  //res.sendFile(path.join(__dirname, "../public", "index.html"));
	
  //res.send({message: "json"})
//	res.se
	//res.render("public/index")
})

/*

app.get('/express_backend', (req, res) => { //Line 9
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' }); //Line 10
});

*/


app.listen(5000)
console.log("Hello")