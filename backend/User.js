function sortDistances(users) { 
    let size = users.length;
    var newUsers = users;
    let minimum = 0;
    
    for(let i = 0; i < size; i++) {
      minimum = i;
      for(let j = i + 1; j < size; j++){
    if(newUsers[j].distance < newUsers[minimum].distance) {
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
  

function calcWeightAvailability(user1, user2) {
let weight=0.1;
studytimes1 = user1.studyTime.length;
studytimes2 = user2.studyTime.length;
locations1 = user1.location.length;
locations2= user2.location.length;
for(var i=0; i<studytimes1; i++) {
    for(var j=0; j<studytimes2; j++) {
        if((user1.studyTime)[i]===(user2.studyTime)[j]) {
weight+=1;
        }
    }
} 
for(var i=0; i<locations1; i++) {
    for(var j=0; j<locations2; j++) {
        if((user1.location)[i]===(user2.location)[j]) {
weight+=2;
        }
    }
}
return 1/weight;

}
function calcWeightCompatibility(user1, user2) {
    let weight=0.1
    let simClass1 = user1.similarClass.toLowerCase();
    let simClass2=user2.similarClass.toLowerCase();
if(user1.dept===user2.dept) {
weight++;
} if(simClass1===simClass2) {
    weight+=5;
} if(user1.studySetting===user2.studySetting) {
weight++;
} if(user1.problemApproach===user2.problemApproach) {
    weight++;
} if(user1.planning===user2.planning) {
    weight++;
} if(user1.outgoingness===user2.outgoingness) {
    weight++
}
return 1/weight;
} 

function calcWeightGeneral(user1, user2) {
    let weight1 = 1/(calcWeightAvailability(user1, user2));
    let weight2 = 1/(calcWeightCompatibility(user1, user2));
    return 1/(weight1+weight2);
}


// class User {
//     constructor(index, firstName, lastName, year, dept, email, studyTimes, locations, similarClass, studySetting, problemApproach, outgoingness, planning) {
//         this.index=index;
//         this.firstName=firstName;
//         this.lastName=lastName;
//         this.year=year;
//         this.dept=dept;
//         this.email=email;
//         this.studyTimes=studyTimes;
//         this.locations=locations;
//         this.similarClass=similarClass;
//         this.studySetting=studySetting;
//         this.problemApproach=problemApproach;
//         this.outgoingness=outgoingness;
//         this.planning=planning;
//         this.distance=distance;
//     }
// }
class User {
    constructor(new_user) {
        this.index=index;
        this.firstName=new_user.FirstName;
        this.lastName=new_user.LastName;
        this.year=new_user.Year;
        this.dept=new_user.Department;
        this.email=new_user.Email;
        this.studyTimes=new_user.StudyTime;
        this.locations=new_user.Location;
        this.similarClass=new_user.SimilarClass;
        this.studySetting=new_user.StudySetting;
        this.problemApproach=new_user.ProblemApproach;
        this.outgoingness=new_user.Outgoingness;
        this.planning=new_user.Planning;
        this.distance=distance
        this.json = JSON.stringify(new_user);
    }
}



class generalGraph {
constructor(size) {
    if(size<=0) {
        return;
    }
    this.size=size;
    this.matrix=Array(size).fill(0).map(() => new Array(size).fill(0));
}
addEdge(user1, user2) {
    var weight= calcWeightGeneral(user1,user2);
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
    distances[sourceUser] = 0; //set distance to source game equal to 0
    let ancestors = new Array(this.size);
    ancestors[sourceuser] = -1;

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
            ancestors[userIndex] = closestGame;
            distances[userIndex] = minDistance + edgeDistance;
          }
        }
      }
       
      for(var i = 0; i < distances.length; i++) {
        users[i].distance = distances[i];
      }
  }


}
class compatibleGraph {
    constructor(size) {
        if(size<=0) {
            return;
        }
        this.size=size;
        this.matrix=Array(size).fill(0).map(() => new Array(size).fill(0));
    }
    addEdge(user1, user2) {
        var weight= calcWeightCompatibility(user1, user2);
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
        ancestors[sourceuser] = -1;
    
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
           
          for(var i = 0; i < distances.length; i++) {
            users[i].distance = distances[i];
          }
      }
    }
    

class availabilityGraph {
    constructor(size) {
        if(size<=0) {
            return;
        }
        this.size=size;
        this.matrix=Array(size).fill(0).map(() => new Array(size).fill(0));
    }
    addEdge(user1, user2) {
        var weight= calcWeightAvailability(user1, user2);
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
        ancestors[sourceuser] = -1;
    
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
           
          for(var i = 0; i < distances.length; i++) {
            users[i].distance = distances[i];
          }
      }

}

//Making the graphs
var users=[]; //Need to put each user into this array and assign each user their member variables (from the json file)
var sourceUser=users[users.length-1]; //sourceUser is the person that just made an account, assuming that person is pushed to the back of the users array
cGraph = new compatibleGraph(users.length);
  for(var i = 0; i < users.length; i++) {
    for(var j = 0; j < users.length; j++) {
      cGraph.addEdge(users[i], users[j]);
    }
  }

  gGraph = new generalGraph(users.length);
  for(var i = 0; i < users.length; i++) {
    for(var j = 0; j < users.length; j++) {
      gGraph.addEdge(users[i], users[j]);
    }
  }

  aGraph = new availabilityGraph(users.length);
  for(var i = 0; i < users.length; i++) {
    for(var j = 0; j < users.length; j++) {
      aGraph.addEdge(users[i], users[j]);
    }
  }
//if its filtered for compatibility
  cGraph.dijkstra(sourceUser.index);
  var newUsers1 = new Array();
  newUsers1 = sortDistances(users);

//if filtered for availability 
aGraph.dijkstra(sourceUser.index);
  var newUsers2 = new Array();
  newUsers2 = sortDistances(users);
//if filtered for general compatibility and availability
  gGraph.dijkstra(sourceUser.index);
  var newUsers3 = new Array();
  newUsers3 = sortDistances(users);


    