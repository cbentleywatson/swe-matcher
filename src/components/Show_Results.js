import { useEffect, useState } from "react";
import "./result_style.css";
import Data from "./Data";

export default function App() {
  // Array of all car objects

  // List of all cars satisfing all the filters
  const [filteredList, setFilteredList] = useState(Data);
  // Selected filter
  const [selectedFilter, setSelectedFilter] = useState();

  const filterByCategory = (filteredData) => {
    // Avoid filter for null value
    if (!selectedFilter) {
      return filteredData;
    }

    const filteredUsers = filteredData.filter(
      (user) => user.year === selectedFilter
    );
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
    var filteredData = filterByCategory(Data);
    setFilteredList(filteredData);
  }, [selectedFilter]);

  return (
    <div className="App">
    <div className="user-year">{`Current Selection: ${selectedFilter}`}</div>
      
      <div>Filter by Year</div>
      <div id="year-options" onClick={handleFilterChange}>
        <div
          className={selectedFilter === "2nd year" ? "active-option" : "filter-option"}
          id="2nd year"
        >
          2nd year
        </div>
        <div
          className={selectedFilter === "3rd year" ? "active-option" : "filter-option"}
          id="3rd year"
        >
          3rd year
        </div>
        <div
          className={selectedFilter === "4th year" ? "active-option" : "filter-option"}
          id="4th year"
        >
          4th year
        </div>
      </div>

      <div id="user-list">
        {filteredList.map((item, index) => (
          <div className="car-item" key={index}>
            <div className="user-name">{`Name: ${item.firstName}${" " + item.lastName}`}</div>
            <div className="user-year">{`Year: ${item.year}`}</div>
            <div className="user-dept">{`Department: ${item.dept}`}</div>
            <div className="user-virtual">{`Preference for: ${item.virtual}`}</div>
            <div className="user-studySetting">{`Prefer to work in: ${item.studySetting}`}</div>
          </div>
        ))}
      </div>
    </div>
  );
}