import { useEffect, useState } from "react";
import "./result_style.css";
import all_compatibility_data from "./Basic_Questions"

const img = new Image(100, 200); // width, height
img.src = "https://picsum.photos/200/301";

export default function Show_Results() {
    var DataL =all_compatibility_data[0];
    const DataC = [
      {"FirstName":"amanda","LastName":"poop","Year":"3rd year","Department":"Engineering","Email":"apoop","StudyDay":["Monday","Wednesday"],"StudyTime":["Early Afternoon","Late Afternoon"],"StudyLength":"20+","Location":["Coffee Shop","Classroom Hall","Law Library"],"SimilarClass":"cop4020","StudySetting":"Group","ProblemApproach":"Theoretical","Outgoingness":"Extroverted","Planning":"Adapt as you go"},
      {"FirstName":"lindsay ","LastName":"lord","Year":"5th year","Department":"Arts","Email":"lcjioejf","StudyDay":["Wednesday","Friday"],"StudyTime":["Early Afternoon","Morning"],"StudyLength":"20+","Location":["Zoom","Classroom Hall","Library West"],"SimilarClass":"cop2530","StudySetting":"One on one","ProblemApproach":"Theoretical","Outgoingness":"Introverted","Planning":"Plan Ahead"},
      {"FirstName":"eeee","LastName":"eeee","Year":"3rd year","Department":"Business","Email":"a@gmail","StudyDay":["Wednesday"],"StudyTime":["Early Afternoon"],"StudyLength":"11-20","Location":["Marston"],"SimilarClass":"ddd","StudySetting":"Group","ProblemApproach":"Theoretical","Outgoingness":"Ambiverted","Planning":"Plan Ahead"}
        
    ];

    const DataA = [
      {"FirstName":"lindsay","LastName":"lord","Year":"3rd year","Department":"Engineering","Email":"apoop","StudyDay":["Monday","Wednesday"],"StudyTime":["Early Afternoon","Late Afternoon"],"StudyLength":"20+","Location":["Coffee Shop","Classroom Hall","Law Library"],"SimilarClass":"cop4020","StudySetting":"Group","ProblemApproach":"Theoretical","Outgoingness":"Extroverted","Planning":"Adapt as you go"},
      {"FirstName":"ddd ","LastName":"ddd","Year":"5th year","Department":"Arts","Email":"lcjioejf","StudyDay":["Wednesday","Friday"],"StudyTime":["Early Afternoon","Morning"],"StudyLength":"20+","Location":["Zoom","Classroom Hall","Library West"],"SimilarClass":"cop2530","StudySetting":"One on one","ProblemApproach":"Theoretical","Outgoingness":"Introverted","Planning":"Plan Ahead"},
      {"FirstName":"fff","LastName":"fff","Year":"3rd year","Department":"Business","Email":"a@gmail","StudyDay":["Wednesday"],"StudyTime":["Early Afternoon"],"StudyLength":"11-20","Location":["Marston"],"SimilarClass":"ddd","StudySetting":"Group","ProblemApproach":"Theoretical","Outgoingness":"Ambiverted","Planning":"Plan Ahead"}
        
    ];

    const DataT = [
      {"FirstName":"amanda","LastName":"poop","Year":"3rd year","Department":"Engineering","Email":"apoop","StudyDay":["Monday","Wednesday"],"StudyTime":["Early Afternoon","Late Afternoon"],"StudyLength":"20+","Location":["Coffee Shop","Classroom Hall","Law Library"],"SimilarClass":"cop4020","StudySetting":"Group","ProblemApproach":"Theoretical","Outgoingness":"Extroverted","Planning":"Adapt as you go"},
      {"FirstName":"lindsay ","LastName":"lord","Year":"5th year","Department":"Arts","Email":"lcjioejf","StudyDay":["Wednesday","Friday"],"StudyTime":["Early Afternoon","Morning"],"StudyLength":"20+","Location":["Zoom","Classroom Hall","Library West"],"SimilarClass":"cop2530","StudySetting":"One on one","ProblemApproach":"Theoretical","Outgoingness":"Introverted","Planning":"Plan Ahead"},
      {"FirstName":"eeee","LastName":"eeee","Year":"3rd year","Department":"Business","Email":"a@gmail","StudyDay":["Wednesday"],"StudyTime":["Early Afternoon"],"StudyLength":"11-20","Location":["Marston"],"SimilarClass":"ddd","StudySetting":"Group","ProblemApproach":"Theoretical","Outgoingness":"Ambiverted","Planning":"Plan Ahead"}
        
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
      console.log("printing data");
      console.log(all_compatibility_data);

      //console.log(all_compatibility_data[0][0].firstName);
      //console.log(DataL);
      //console.log(all_compatibility_data);
      filteredUsers = DataL;
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

  // Toggle seletedYear state
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
                  <h4 className="user-name">{`${item.FirstName}${" " + item.LastName}`}</h4>
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