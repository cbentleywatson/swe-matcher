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


    
  // List of all cars satisfing all the filters
  const [filteredList, setFilteredList] = useState(DataT);
  // Selected filter
  const [selectedFilter, setSelectedFilter] = useState();

  const filterByCategory = (filteredData) => {
    //in here is where we want to switch between arrays
    // Avoid filter for null value
    if (!selectedFilter) {
      return filteredData;
    }

    var filteredUsers;
    if (selectedFilter == "Compatibility")
    {
        filteredUsers = users_c;
        axios.get('http://localhost:5000/getUser')
      .then((response) => {
        //alert("in response");
        console.log("Sent From the test");
        //console.log(JSON.stringify(response.data));
        //console.log(response.data);
        //console.log(response.body.data.new_users_c);
        users_c = response.data.new_users_c;
        //writeToFile (users_c, "./new_users_c.txt");
        users_a = response.data.new_users_a;
        //writeToFile (users_a, "./new_users_a.txt");
        users_t = response.data.new_users_g;
        //writeToFile (users_t, "./new_users_t.txt");
        console.log(users_c);
        alert("usersc.FirstName" + users_c[0].FirstName);

        //this.setState({firstName: response.firstName, lastName: response.lastName, email: response.email})
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

        //alert(filteredUsers);
        //alert(users_c);
    }
    else if (selectedFilter == "Availability")
    {
        filteredUsers = users_a;
    }
    else
    {
        filteredUsers = users_t;
    }
    return filteredUsers;
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
    var filteredData = filterByCategory(DataT);
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
                  <img className="car-image" src= {"https://i.pinimg.com/564x/02/3d/99/023d9921b290368909e47bb8b6e02f0d.jpg"} alt= "car-img"/>
                  <h2 className="user-name">{`${item.FirstName}${" " + item.LastName}`}</h2>
              </div>
            
          </div>
        ))}
      </div>
    </div>
  );
}