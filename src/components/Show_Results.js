import { useEffect, useState } from "react";
import "./result_style.css";

const img = new Image(100, 200); // width, height
img.src = "https://picsum.photos/200/301";

export default function Show_Results() {
    const DataC = [
        {
          firstName: "Lindsay",
          url: "4.png",
          lastName: "Lord",
          year: "4th year",
          dept: "Engineering", 
          email: "lindsay.lord",
          studyTimes: "Monday Tuesday Evening", 
          locations: "Marston",
          similarClass: "CEN3031",
          virtual: "Zoom",
          studySetting: "Group", 
          problemApproach: "Theoretical",
          outgoingness: "Extroverted", 
          planning: "Plan Ahead"
        },
        {
            firstName: "Maya",
            lastName: "Harris",
            url: "1.png",
            year: "3rd year",
            dept: "Engineering", 
            email: "blah",
            studyTimes: "Monday Tuesday Evening", 
            locations: "Marston",
            similarClass: "CEN3031",
            virtual: "Zoom",
            studySetting: "Group", 
            problemApproach: "Theoretical",
            outgoingness: "Extroverted", 
            planning: "Plan Ahead"
          },
          {
            firstName: "Joe",
            lastName: "Sulkes",
            url: "2.png",
            year: "2nd year",
            dept: "Engineering", 
            email: "cool_email",
            studyTimes: "Monday Tuesday Evening", 
            locations: "Marston",
            similarClass: "CEN3031",
            virtual: "Zoom",
            studySetting: "Group", 
            problemApproach: "Theoretical",
            outgoingness: "Extroverted", 
            planning: "Plan Ahead"
          },
        
    ];

    const DataA = [
        {
            firstName: "Maya",
            lastName: "Harris",
            url: "1.png",
            year: "3rd year",
            dept: "Engineering", 
            email: "blah",
            studyTimes: "Monday Tuesday Evening", 
            locations: "Marston",
            similarClass: "CEN3031",
            virtual: "Zoom",
            studySetting: "Group", 
            problemApproach: "Theoretical",
            outgoingness: "Extroverted", 
            planning: "Plan Ahead"
          },
        {
          firstName: "Lindsay",
          lastName: "Lord",
          url: "3.png",
          year: "4th year",
          dept: "Engineering", 
          email: "lindsay.lord",
          studyTimes: "Monday Tuesday Evening", 
          locations: "Marston",
          similarClass: "CEN3031",
          virtual: "Zoom",
          studySetting: "Group", 
          problemApproach: "Theoretical",
          outgoingness: "Extroverted", 
          planning: "Plan Ahead"
        },
          {
            firstName: "Joe",
            lastName: "Sulkes",
            url: "2.png",
            year: "2nd year",
            dept: "Engineering", 
            email: "cool_email",
            studyTimes: "Monday Tuesday Evening", 
            locations: "Marston",
            similarClass: "CEN3031",
            virtual: "Zoom",
            studySetting: "Group", 
            problemApproach: "Theoretical",
            outgoingness: "Extroverted", 
            planning: "Plan Ahead"
          }
        
      ];
      const DataT = [
        {
            firstName: "Joe",
            lastName: "Sulkes",
            url: "2.png",
            year: "2nd year",
            dept: "Engineering", 
            email: "cool_email",
            studyTimes: "Monday Tuesday Evening", 
            locations: "Marston",
            similarClass: "CEN3031",
            virtual: "Zoom",
            studySetting: "Group", 
            problemApproach: "Theoretical",
            outgoingness: "Extroverted", 
            planning: "Plan Ahead"
          },
        {
            firstName: "Maya",
            lastName: "Harris",
            url: "1.png",
            year: "3rd year",
            dept: "Engineering", 
            email: "blah",
            studyTimes: "Monday Tuesday Evening", 
            locations: "Marston",
            similarClass: "CEN3031",
            virtual: "Zoom",
            studySetting: "Group", 
            problemApproach: "Theoretical",
            outgoingness: "Extroverted", 
            planning: "Plan Ahead"
          },
        {
          firstName: "Lindsay",
          lastName: "Lord",
          url: "3.png",
          year: "4th year",
          dept: "Engineering", 
          email: "lindsay.lord",
          studyTimes: "Monday Tuesday Evening", 
          locations: "Marston",
          similarClass: "CEN3031",
          virtual: "Zoom",
          studySetting: "Group", 
          problemApproach: "Theoretical",
          outgoingness: "Extroverted", 
          planning: "Plan Ahead"
        }
        
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
              <img className="car-image" src= {item.url} alt= "car-img"/>
            <h3 className="user-name">{`${item.firstName}${" " + item.lastName}`}</h3>
            <div className="user-year">{`Year: ${item.year}`}</div>
            <div className="user-dept">{`Department: ${item.dept}`}</div>
            <div className="user-virtual">{`Preference for: ${item.virtual}`}</div>
            <div className="user-studySetting">{`Prefer to work in: ${item.studySetting}`}</div>
            <div className="user-studySetting">{`Email address: ${item.email}`}</div>
          </div>
        ))}
      </div>
    </div>
  );
}