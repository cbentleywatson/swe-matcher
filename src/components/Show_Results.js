import { useEffect, useState } from "react";
import "./result_style.css";
import all_compatibility_data from "./Basic_Questions"


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
        filteredUsers = DataC;
    }
    else if (selectedFilter == "Availability")
    {
        filteredUsers = DataA;
    }
    else
    {
        filteredUsers = DataT;
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
            <div className="user-year">{`Year: ${item.Year}`}</div>
            <div className="user-dept">{`Department: ${item.Department}`}</div>
            <div className="user-studySetting">{`Prefer to work: ${item.StudySetting}`}</div>
            <div className="user-studySetting">{`Days: ${item.StudyDay}${"// Time:" + item.StudyTime}`}</div>
            <div className="user-studySetting">{`Personality: ${item.ProblemApproach + ", " + item.Outgoingness + ", " + item.Planning}`}</div>
            <div className="user-email">{`Email address: ${item.Email}`}</div>
          </div>
        ))}
      </div>
    </div>
  );
}