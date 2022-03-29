import 'survey-react/modern.min.css';
import { useCallback } from 'react';

import { Survey, StylesManager, Model } from 'survey-react';
import { NavLink } from 'react-router-dom';

StylesManager.applyTheme("modern");

 
const Basic_Questions = () => {
  const survey = new Model(surveyJSON);
  const alertResults = useCallback((sender) => {
    const results = JSON.stringify(sender.data);
    /*The results need to be send right here */

    alert(results);
  }, []);
  survey.onComplete.add(alertResults);

  return (
    <div className="Basic">
     <h1> <center>MatchMakers</center></h1>
      <p><center>Please complete the following survey</center></p>
      <Survey model={survey} />
      <NavLink to="/">Back to Welcome Page</NavLink>
    </div>
    
  );

}

var surveyJSON = {
  pages: [
      {   //======first page -> Basic Questions=======
          "title": "Basic Questions",
          "elements": [
            {
              name: "FirstName",
              title: "Enter your first name:",
              type: "text"
            },
          {
              name: "LastName",
              title: "Enter your last name:",
              type: "text"
          },
          {
              name: "Year",
              title: "Select your year in school",
              type: "dropdown",
              choices: ["1st year", "2nd year", "3rd year", "4th year", "5th year", "Graduate student"]
          },
          {
              name: "Department",
              title: "Select your department",
              type: "dropdown",
              choices: ["Accounting", "Agricultural and Life Sciences", "Arts","Business",
                  "Construction", "Design", "Education", "Engineering", "Health and Human Performance",
                  "Journalism", "Liberal Arts and Sciences", "Natural Resources and Environment",
                  "Nursing", "Public Health", "Other"]
          },
          {
              name: "Email",
              title: "Enter your ufl email address:",
              type: "text"
          }
        ]
      }, 
      
      { //======second page -> Compatibiity Questions=======
          "title": "Compatibility Questions",
          "elements": [
              {
                name: "DaysOfWeek",
                title: "What days of the week?",
                type: "dropdown",
                choices: ["Monday", "Tuesday", "Wednesday","Thursday", "Friday"]
              }
          ]
      },
  ]
};


export default Basic_Questions;
