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


class User {
    constructor(index, firstName, lastName, year, dept, email, studyTimes, locations, similarClass, studySetting, problemApproach, outgoingness, planning) {
        this.index=index;
        this.firstName=firstName;
        this.lastName=lastName;
        this.year=year;
        this.dept=dept;
        this.email=email;
        this.studyTimes=studyTimes;
        this.locations=locations;
        this.similarClass=similarClass;
        this.studySetting=studySetting;
        this.problemApproach=problemApproach;
        this.outgoingness=outgoingness;
        this.planning=planning;
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
    var weight= calcWeightGeneral();
    this.matrix[user1.index][user2.index] = weight;
    this.matrix[user2.index][user1.index] = weight;
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
        distances[srcUser] = 0; //set distance to source game equal to 0
        let ancestors = new Array(this.size);
        ancestors[srcGame] = -1;
    
        for (let i = 1; i < this.size; i++) {
            let closestGame = -1;
            let minDistance = Number.MAX_VALUE;
            for (let gameIndex = 0; gameIndex < this.size; gameIndex++) {
                if (!visited[gameIndex] && distances[gameIndex] < minDistance) {
                    closestGame = gameIndex;
                    minDistance = distances[gameIndex];
                }
            }
    
}
class availablilityGraph {
    constructor(size) {
        if(size<=0) {
            return;
        }
        this.size=size;
        this.matrix=Array(size).fill(0).map(() => new Array(size).fill(0));
    }
    addEdge(user1, user2) {
        var weight= calcWeightCompatibility();
        this.matrix[user1.index][user2.index] = weight;
        this.matrix[user2.index][user1.index] = weight;
    }
}