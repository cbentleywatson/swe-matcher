//con

function sortDistances(users) {
  let size = users.length;
  var newUsers = users;
  let minimum = 0;

  for (let i = 0; i < size; i++) {
    minimum = i;
    for (let j = i + 1; j < size; j++) {
      if (newUsers[j].distance < newUsers[minimum].distance) {
        minimum = j;
      }
    }

    if (minimum != i) {
      let temp = newUsers[i];
      newUsers[i] = newUsers[minimum];
      newUsers[minimum] = temp;
    }
  }

  return newUsers;
}

//cw#
function calcWeightAvailability(user1, user2) {
  let weight = 0.1;
  studytimes1 = user1.studyTimes.length;
  studytimes2 = user2.studyTimes.length;
  studyDays1 = user1.studyDays.length;
  studyDays2 = user2.studyDays.length;
  locations1 = user1.locations.length;
  locations2 = user2.locations.length;
  for (var i = 0; i < studytimes1; i++) {
    for (var j = 0; j < studytimes2; j++) {
      if ((user1.studyTimes)[i] === (user2.studyTimes)[j]) {
        weight += 1;
      }
    }
  }
  for (var i = 0; i < studyDays1; i++) {
    for (var j = 0; j < studyDays2; j++) {
      if ((user1.studyDays)[i] === (user2.studyDays)[j]) {
        weight += 1;
      }
    }
  }
  if (user1.studyLength === user2.studyLength) {
    weight += 1;
  }
  for (var i = 0; i < locations1; i++) {
    for (var j = 0; j < locations2; j++) {
      if ((user1.locations)[i] === (user2.locations)[j]) {
        weight += 2;
      }
    }
  }
  return 1 / weight;

}
function calcWeightCompatibility(user1, user2) {
  let weight = 0.1
  let simClass1 = user1.similarClass.toLowerCase();
  let simClass2 = user2.similarClass.toLowerCase();
  if (user1.dept === user2.dept) { //If the two users have similar department, add 1 to the weight
    weight++;
  } if (simClass1 === simClass2) {
    weight += 5; //If the users have the same class, add 5 to the weight
  } if (user1.studySetting === user2.studySetting) {
    weight++; //if the users have the same study setting, problem approach, planning, and outgoingness,
    //add 1 to the weight
  } if (user1.problemApproach === user2.problemApproach) {
    weight++;
  } if (user1.planning === user2.planning) {
    weight++;
  } if (user1.outgoingness === user2.outgoingness) {
    weight++
  }
  return 1 / weight; //the weight between them is 1/weight, which means that the smaller the weight,
  //the more similar the users are to each other, compatibility wise
}

function calcWeightGeneral(user1, user2) {
  let weight1 = 1 / (calcWeightAvailability(user1, user2));
  let weight2 = 1 / (calcWeightCompatibility(user1, user2));
  return 1 / (weight1 + weight2);
}

class User {
  constructor(new_user, index, distance) {
    this.index = index;
    this.firstName = new_user.FirstName;
    this.lastName = new_user.LastName;
    this.year = new_user.Year;
    this.dept = new_user.Department;
    this.email = new_user.Email;
    this.studyTimes = new_user.StudyTime;
    this.studyDays = new_user.StudyDay;
    this.studyLength = new_user.StudyLength;
    this.locations = new_user.Location;
    this.similarClass = new_user.SimilarClass;
    this.studySetting = new_user.StudySetting;
    this.problemApproach = new_user.ProblemApproach;
    this.outgoingness = new_user.Outgoingness;
    this.planning = new_user.Planning;
    this.distance = distance;
    this.json = JSON.stringify(new_user);
  }
}

class generalGraph {
  constructor(size) {
    if (size <= 0) {
      return;
    }
    this.size = size;
    this.matrix = Array(size).fill(0).map(() => new Array(size).fill(0));
  }
  addEdge(user1, user2) {
    var weight = calcWeightGeneral(user1, user2);
    this.matrix[user1.index][user2.index] = weight;
    this.matrix[user2.index][user1.index] = weight;
  }
  dijkstra(sourceUser) {
    let distances = new Array(this.size); //array of the shortest distances from every user to the source user
    let visited = new Array(this.size);//boolean array keeping track of the users visited
    for (let userIndex = 0; userIndex < this.size; userIndex++) {
      distances[userIndex] = Number.MAX_VALUE;
      visited[userIndex] = false;
    }
    distances[sourceUser] = 0; //set distance to source user equal to 0
    let ancestors = new Array(this.size);
    ancestors[sourceUser] = -1;

    for (let i = 1; i < this.size; i++) {
      let closestUser = -1;
      let minDistance = Number.MAX_VALUE;
      for (let userIndex = 0; userIndex < this.size; userIndex++) {
        if (!visited[userIndex] && distances[userIndex] < minDistance) {
          closestUser = userIndex;
          minDistance = distances[userIndex];
        }
      }
      visited[closestUser] = true;

      // Update dist value of the
      // adjacent vertices of the
      // picked vertex.
      for (let userIndex = 0; userIndex < this.size; userIndex++) {
        let edgeDistance = this.matrix[closestUser][userIndex];

        if (edgeDistance > 0 && ((minDistance + edgeDistance) < distances[userIndex])) {
          ancestors[userIndex] = closestUser;
          distances[userIndex] = minDistance + edgeDistance;
        }
      }
    }

    for (var i = 0; i < distances.length; i++) {
      users[i].distance = distances[i];
    }
  }


}
class compatibleGraph {
  constructor(size) {
    if (size <= 0) {
      return;
    }
    this.size = size;
    this.matrix = Array(size).fill(0).map(() => new Array(size).fill(0));
  }
  addEdge(user1, user2) {
    var weight = calcWeightCompatibility(user1, user2);
    this.matrix[user1.index][user2.index] = weight;
    this.matrix[user2.index][user1.index] = weight;
  }
  dijkstra(sourceUser) {
    let distances = new Array(this.size); //array of the shortest distances from every user to the source user
    let visited = new Array(this.size);//boolean array keeping track of the users visited
    for (let userIndex = 0; userIndex < this.size; userIndex++) {
      distances[userIndex] = Number.MAX_VALUE;
      visited[userIndex] = false;
    }
    distances[sourceUser] = 0; //set distance to source user equal to 0
    let ancestors = new Array(this.size);
    ancestors[sourceUser] = -1;

    for (let i = 1; i < this.size; i++) {
      let closestUser = -1;
      let minDistance = Number.MAX_VALUE;
      for (let userIndex = 0; userIndex < this.size; userIndex++) {
        if (!visited[userIndex] && distances[userIndex] < minDistance) {
          closestUser = userIndex;
          minDistance = distances[userIndex];
        }
      }
      visited[closestUser] = true;

      // Update dist value of the
      // adjacent vertices of the
      // picked vertex.
      for (let userIndex = 0; userIndex < this.size; userIndex++) {
        let edgeDistance = this.matrix[closestUser][userIndex];

        if (edgeDistance > 0 && ((minDistance + edgeDistance) < distances[userIndex])) {
          ancestors[userIndex] = closestUser;
          distances[userIndex] = minDistance + edgeDistance;
        }
      }
    }

    for (var i = 0; i < distances.length; i++) {
      users[i].distance = distances[i];
    }
  }
}


class availabilityGraph {
  constructor(size) {
    if (size <= 0) {
      return;
    }
    this.size = size;
    this.matrix = Array(size).fill(0).map(() => new Array(size).fill(0));
  }
  addEdge(user1, user2) {
    var weight = calcWeightAvailability(user1, user2);
    this.matrix[user1.index][user2.index] = weight;
    this.matrix[user2.index][user1.index] = weight;
  }
  dijkstra(sourceUser) {
    let distances = new Array(this.size); //array of the shortest distances from every user to the source user
    let visited = new Array(this.size);//boolean array keeping track of the users visited
    for (let userIndex = 0; userIndex < this.size; userIndex++) {
      distances[userIndex] = Number.MAX_VALUE;
      visited[userIndex] = false;
    }
    distances[sourceUser] = 0; //set distance to source user equal to 0
    let ancestors = new Array(this.size);
    ancestors[sourceUser] = -1;

    for (let i = 1; i < this.size; i++) {
      let closestUser = -1;
      let minDistance = Number.MAX_VALUE;
      for (let userIndex = 0; userIndex < this.size; userIndex++) {
        if (!visited[userIndex] && distances[userIndex] < minDistance) {
          closestUser = userIndex;
          minDistance = distances[userIndex];
        }
      }
      visited[closestUser] = true;

      // Update dist value of the
      // adjacent vertices of the
      // picked vertex.
      for (let userIndex = 0; userIndex < this.size; userIndex++) {
        let edgeDistance = this.matrix[closestUser][userIndex];

        if (edgeDistance > 0 && ((minDistance + edgeDistance) < distances[userIndex])) {
          ancestors[userIndex] = closestUser;
          distances[userIndex] = minDistance + edgeDistance;
        }
      }
    }

    for (var i = 0; i < distances.length; i++) {
      users[i].distance = distances[i];
    }
  }
}

// import './User.js';
// import generalGraph from './User.js';
// import compatibleGraph from './User.js';
// import availabilityGraph from './User.js';
//const mongoose = require('mongoose');
const express = require("express");
var request = require("request");
const path = require('path');
var router = express.Router();
const app = express();
const fs = require('fs')
//const fs = require('browserify-fs')




// This section creates an "in memory" JSON data base and makes sure
// sure it's representation is valid in case of illegal writes.
// On startup all of the json objects in the file are loaded and
const string_array = [];
const users_as_java_script_objects = [];
var users = [];
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
        //console.log(line);
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
  //console.log(string_array[i]);
  users_as_java_script_objects.push(JSON.parse(string_array[i]));

}
for (let i = 0; i < users_as_java_script_objects.length; i++) {
  const obj = users_as_java_script_objects[i];
  var user = new User(obj, i, 0);
  user.distance = 0;
  users.push(user);

}
console.log("PRE_CHECK");
console.log(users);

var usersComp = users;
var usersAvail = users;
var usersGen = users;
var sourceUser1 = usersComp[usersComp.length - 1];
var sourceUser2 = usersAvail[usersAvail.length - 1];
var sourceUser3 = usersGen[usersGen.length - 1];


cGraph = new compatibleGraph(usersComp.length);
for (var i = 0; i < usersComp.length; i++) {
  for (var j = 0; j < usersComp.length; j++) {
    cGraph.addEdge(usersComp[i], usersComp[j]);
  }
}
aGraph = new availabilityGraph(usersAvail.length);
for (var i = 0; i < usersAvail.length; i++) {
  for (var j = 0; j < usersAvail.length; j++) {
    aGraph.addEdge(usersAvail[i], usersAvail[j]);
  }
}
gGraph = new generalGraph(usersGen.length);
for (var i = 0; i < usersGen.length; i++) {
  for (var j = 0; j < usersGen.length; j++) {
    gGraph.addEdge(usersGen[i], usersGen[j]);
  }
}

//if its filtered for compatibility
cGraph.dijkstra(sourceUser1.index);
var newUsers1 = new Array();
newUsers1 = sortDistances(usersComp);
console.log(users);
const newUsersC = [];
for (var i = 0; i < users.length; i++) {
  newUsersC.push(users[i].json);
}

// console.log("CGRAPH");
// console.log(users);
//if filtered for general compatibility and availability


gGraph.dijkstra(sourceUser3.index);
var newUsers3 = new Array();
newUsers3 = sortDistances(usersGen);
console.log(users);
const newUsersGeneralCompatibility = [];

for (var i = 0; i < users.length; i++) {
  newUsersGeneralCompatibility.push(users[i].json);
}
// console.log("gGRAPH");
// console.log(users);
//if filtered for availability 




aGraph.dijkstra(sourceUser2.index);
var availabilty_result_strins = new Array();
availabilty_result_strins = sortDistances(usersAvail);
console.log(users);
const newUsersA = [];
for (var i = 0; i < users.length; i++) {
  newUsersA.push(users[i].json);
}
// console.log("aGRAPH");
// console.log(users);

console.log(newUsersC);
console.log(newUsersGeneralCompatibility);
console.log(newUsersA);





var cors = require('cors')
const port = process.env.PORT || 5000; // previously this was 3000
app.set('port', port);

app.use(cors())

app.get('/test-mongo', (req, resp) => {
  resp.send("app is working");

});









router.get('/getUser/:name', function (req, res) {
  const content = req.params.name
  const new_user = JSON.parse(content)

  // just the router.get with 
  const three_array = {
    "new_users_c": newUsersC,
    "new_users_a": newUsersA,
    "new_users_g": newUsersGeneralCompatibility
  };


  users_as_java_script_objects.push(new_user);
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

  res.send(three_array);

});


app.listen(5000);