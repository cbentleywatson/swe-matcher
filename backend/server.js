//connor
const mongoose = require('mongoose');
const express = require("express");
var request = require("request");
const path = require('path');
var router = express.Router();
const app = express();
const fs = require('fs');
//require get_js_objects_from_db from './load_from_db.js';
//import { get_user_strings_from_db } from 'load_from_db.js';
const lib = require("./load_from_db.js");
//const functions = =
//const fs = require('browserify-fs')
lib.get_user_strings_from_db("file.log");
let data = "Hello and Welcome to linuxhint.com"
const string_array = [];
const users_as_java_script_objects = [];
try {
  // read contents of the file
  const data = fs.readFileSync('file.log', 'UTF-8');

  // split the contents by new line
  const lines = data.split(/\r?\n/);

  // print all lines
  lines.forEach((line) => {
    if (line.length > 7) {


      if (line.endsWith("}")) {

        string_array.push(line);
        console.log(line);
      } else {
        console.log("Does Not End with }")
      }
    } else {
      console.log("JSON too Shot");
    }

  });

} catch (err) {
  console.error(err);
}
for (let i = 0; i < string_array.length; i++) {
  console.log(string_array[i]);
  users_as_java_script_objects.push(JSON.parse(string_array[i]));
}

function send_nested(json_list, length) {
  const arr = ['*p0*:', '*p1*:', '*p2*:', '*p3*:', '*p4*:', '*p5*:', '*p6*'];
  let acc = "{"
  for (let i = 0; i < length; i++) {
    let string = JSON.stringify(json_list[i]);
    acc = acc + arr[i] + JSON.stringify(json_list[i]);
  }
  acc = acc + "}";
  acc = acc.replace(/\\/g, '');
  return acc;
}
console.log("Above 2d JSON");
const d_JSON = JSON.stringify({ "p0": string_array[0] });
console.log(JSON.stringify({ "p0": string_array[0] }));
const a = JSON.parse(d_JSON);

console.log("Array parsed: " + JSON.stringify(a.p0));
/*
fs.writeFile('file.txt', data, { flag: 'a' }, (err) => {

  // error handling using throw
  
  if (err) throw err;
  
  })
*/
var cors = require('cors');
const { raw } = require('body-parser');
const port = process.env.PORT || 5000; // previously this was 3000
app.set('port', port);

app.use(cors())


//COMPATIBILITY, AVAILABILITY, COMBINED
app.get('/compatibility/:name', function (req, res, next) {
  //  res.json({msg: 'This is CORS-enabled for all origins!'})
  //  res.send({ title: 'GeeksforGeeks' });
  console.log(req.params.name);
  const list = {
    p0: users_as_java_script_objects[0], p1: string_array[1], p2: string_array[2],
    p3: string_array[3], p4: string_array[4], p5: string_array[5], p6: string_array[6]
  }
  var list2 = { p1: users_as_java_script_objects[0], p2: users_as_java_script_objects[1] };
  var out2 = JSON.stringify(list2);
  console.log(list);
  // res.send(req.params.name );
  acc = JSON.stringify(list2);
  raw = JSON.parse(aa);
  console.log(" raw: " + raw.p1.FirstName);
  acc = acc.replace(/\\/g, '');
  res.send(acc);

  //const content = req.params.name;
  //const new_user = JSON.parse(content);
  //users_as_java_script_objects.push(new_user);
  //var user= User(new_user);
  //    users.push(user);
})


app.get('/simplest/:name', function (req, res, next) {
  //res.json({msg: 'This is CORS-enabled for all origins!'})

  //res.send({ title: 'GeeksforGeeks' });
  console.log(req.params.name);
  res.send(req.params.name);
  const content = req.params.name
  const new_user = JSON.parse(content)
  users_as_java_script_objects.push(new_user);
  //var user= User(new_user);
  //    users.push(user);



  //user.index=users.length-1;
  let addend = "";
  if (string_array.length > 0) {
    addend = "\n"
  }
  fs.appendFile('file.log', (addend + content), err => {
    if (err) {
      console.error(err)
      return
    }
    //done!
  })
})




/* Backend proper */
router.get('/match/id', function (req, res) {
  res.send('hello ' + req.params.name + '!');
});


router.get('/response', function (req, res) {
  res.send('hello ' + req.params.name + '!');
});



// apply the routes to our application
app.use('/', router);


console.log("Hello");
app.listen(5000);