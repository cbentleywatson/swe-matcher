import { useEffect, useState } from "react";

import "./result_style.css";
const axios = require('axios');

export default function Show_Results() {
  //putting dummy data here -> backend didn't connect
  //theoretically, we'd get these three arrays from the backend
    const DataC = [
      {"FirstName":"Lindsay","LastName":"Lord","Year":"4th year","Department":"Engineering","Email":"lindsay.lord@ufl.edu","StudyDay":["Monday","Wednesday"],"StudyTime":["Early Afternoon","Late Afternoon"],"StudyLength":"20+","Location":["Coffee Shop","Classroom Hall","Law Library"],"SimilarClass":"cop4020","StudySetting":"Group","ProblemApproach":"Theoretical","Outgoingness":"Extroverted","Planning":"Adapt as you go"},
      {"FirstName":"Joseph ","LastName":"Sulkes","Year":"3rd year","Department":"Engineering","Email":"joe.sulkes@ufl.edu","StudyDay":["Wednesday","Friday"],"StudyTime":["Early Afternoon","Morning"],"StudyLength":"20+","Location":["Zoom","Classroom Hall","Library West"],"SimilarClass":"cop2530","StudySetting":"One on one","ProblemApproach":"Theoretical","Outgoingness":"Introverted","Planning":"Plan Ahead"},
      {"FirstName":"Maya","LastName":"Harris","Year":"3rd year","Department":"Engineering","Email":"maya.harris@ufl.edu","StudyDay":["Wednesday"],"StudyTime":["Early Afternoon"],"StudyLength":"11-20","Location":["Marston"],"SimilarClass":"ddd","StudySetting":"Group","ProblemApproach":"Theoretical","Outgoingness":"Ambiverted","Planning":"Plan Ahead"}
        
    ];

    const DataA = [
      {"FirstName":"Joseph ","LastName":"Sulkes","Year":"3rd year","Department":"Engineering","Email":"joe.sulkes@ufl.edu","StudyDay":["Wednesday","Friday"],"StudyTime":["Early Afternoon","Morning"],"StudyLength":"20+","Location":["Zoom","Classroom Hall","Library West"],"SimilarClass":"cop2530","StudySetting":"One on one","ProblemApproach":"Theoretical","Outgoingness":"Introverted","Planning":"Plan Ahead"},
      {"FirstName":"Lindsay","LastName":"Lord","Year":"4th year","Department":"Engineering","Email":"lindsay.lord@ufl.edu","StudyDay":["Monday","Wednesday"],"StudyTime":["Early Afternoon","Late Afternoon"],"StudyLength":"20+","Location":["Coffee Shop","Classroom Hall","Law Library"],"SimilarClass":"cop4020","StudySetting":"Group","ProblemApproach":"Theoretical","Outgoingness":"Extroverted","Planning":"Adapt as you go"},
      {"FirstName":"Maya","LastName":"Harris","Year":"3rd year","Department":"Engineering","Email":"maya.harris@ufl.edu","StudyDay":["Wednesday"],"StudyTime":["Early Afternoon"],"StudyLength":"11-20","Location":["Marston"],"SimilarClass":"ddd","StudySetting":"Group","ProblemApproach":"Theoretical","Outgoingness":"Ambiverted","Planning":"Plan Ahead"}
        
    ];

    const DataT = [
      {"FirstName":"Maya","LastName":"Harris","Year":"3rd year","Department":"Engineering","Email":"maya.harris@ufl.edu","StudyDay":["Wednesday"],"StudyTime":["Early Afternoon"],"StudyLength":"11-20","Location":["Marston"],"SimilarClass":"ddd","StudySetting":"Group","ProblemApproach":"Theoretical","Outgoingness":"Ambiverted","Planning":"Plan Ahead"},
      {"FirstName":"Joseph ","LastName":"Sulkes","Year":"3rd year","Department":"Engineering","Email":"joe.sulkes@ufl.edu","StudyDay":["Wednesday","Friday"],"StudyTime":["Early Afternoon","Morning"],"StudyLength":"20+","Location":["Zoom","Classroom Hall","Library West"],"SimilarClass":"cop2530","StudySetting":"One on one","ProblemApproach":"Theoretical","Outgoingness":"Introverted","Planning":"Plan Ahead"},
      {"FirstName":"Lindsay","LastName":"Lord","Year":"4th year","Department":"Engineering","Email":"lindsay.lord@ufl.edu","StudyDay":["Monday","Wednesday"],"StudyTime":["Early Afternoon","Late Afternoon"],"StudyLength":"20+","Location":["Coffee Shop","Classroom Hall","Law Library"],"SimilarClass":"cop4020","StudySetting":"Group","ProblemApproach":"Theoretical","Outgoingness":"Extroverted","Planning":"Adapt as you go"},
        
    ];
    var users_c, users_a, users_t;
    var complete_filtered_users = new Array();


    
  // List of all cars satisfing all the filters
  const [filteredList, setFilteredList] = useState(DataT);
  // Selected filter
  const [selectedFilter, setSelectedFilter] = useState();

  function handleAxiosStuff () {
    axios.get('http://localhost:5000/getUser')
    .then((response) => {
      //alert("in response");
      console.log("Sent From the test");
      users_c = response.data.new_users_c;
      users_a = response.data.new_users_a;
      users_t = response.data.new_users_g;
      var parse_me;

      parse_me = JSON.parse(users_c[0]);
      for (let i = 0; i < users_c.length; i++) {
        complete_filtered_users[i] = parse_me;
      }
      
    })
    .then(() => {
      console.log("TEST OF RECEIPY");
      //console.log(all_compatibility_data[1])
    })
    .catch((error) => {
      alert("Error! " + error);
      //alert("request " + request);
      console.log(error);
    })
  }


  const filterByCategory = (complete_filtered_users) => {
    //in here is where we want to switch between arrays
    // Avoid filter for null value
    if (!selectedFilter) {
      return complete_filtered_users;
    }

    var filteredUsers;
    if (selectedFilter == "Compatibility")
    {
      axios.get('http://localhost:5000/getUser')
      .then((response) => {
        //alert("in response");
        console.log("Sent From the test");
        users_c = response.data.new_users_c;
        users_a = response.data.new_users_a;
        users_t = response.data.new_users_g;
        var parse_me;
  

        for (let i = 0; i < users_c.length; i++) {
          parse_me = JSON.parse(users_c[i]);
          complete_filtered_users[i] = parse_me;

        }
        
      })
      .then(() => {
        console.log("TEST OF RECEIPY");
        //console.log(all_compatibility_data[1])
      })
      .catch((error) => {
        alert("Error! " + error);
        //alert("request " + request);
        console.log(error);
      })
      //console.log(users_c[0]);
      console.log('complete');
      console.log(complete_filtered_users);
    }
    else if (selectedFilter == "Availability")
    {
      handleAxiosStuff();
      filteredUsers = users_a;
      complete_filtered_users = null;
      for (let i = 0; i < filteredUsers.length; i++) {
        complete_filtered_users[i] = JSON.parse(filteredUsers[i]);
      }
      console.log(complete_filtered_users);
    }
    else
    {
      handleAxiosStuff();
      filteredUsers = users_t;
      complete_filtered_users = null;
      for (let i = 0; i < filteredUsers.length; i++) {
        complete_filtered_users[i] = JSON.parse(filteredUsers[i]);
      }
    }
    return complete_filtered_users;
  };

  // Toggle seletedFilter state
  const handleFilterChange = (event) => {
    const input = event.target.id;
    if (input === selectedFilter) {
      setSelectedFilter("");
    } else {
      setSelectedFilter(input);
    }
  };

  useEffect(() => {
    var filteredData = filterByCategory(complete_filtered_users);
    console.log("filter");

    console.log(filteredData[0]);
    //console.log(users_c[0]);
    //console.log(typeof(DataC[0]));

    setFilteredList(filteredData);
  }, [selectedFilter]);

  return (
    <div className="App">
        <h1> <center>MatchMakers - Results</center></h1>
    <div className="user-filter">{`Current Selection: ${selectedFilter}`}</div>
    <h3>Filter by:</h3>
      <div id="year-options" onClick={handleFilterChange}>
        <div
          className={selectedFilter === "Compatibility" ? "active-option" : "filter-option"}
          id="Compatibility"
        > 
          Compatibility
        </div>
        <div
          className={selectedFilter === "Availability" ? "active-option" : "filter-option"}
          id="Availability"
        >
          Availability
        </div>
        <div
          className={selectedFilter === "Combined" ? "active-option" : "filter-option"}
          id="Combined"
        >
          Combined
        </div>
      </div>

      <div id="user-list">
        {filteredList.map((item, index) => (
          <div className="car-item" key={index}>
              <div>
                  <h2 className="user-name">{`${filteredList.FirstName}${" " + item.LastName}`}</h2>
              </div>
            
          </div>
        ))}
      </div>
    </div>
  );
}