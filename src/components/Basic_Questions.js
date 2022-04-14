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

      {//======second page -> Availability Questions=======
          "title": "Availability Questions",
          "elements": [
              {
                  name: "StudyTime",
                  title: "What is your favorite time to study/do work?",
                  type: "dropdown",
                  choices: ["Morning", "Early Afternoon", "Late Afternoon","Nightowl"]
              },
              {
                  name: "Workload",
                  title: "How many hours do you spend at the library per week? ",
                  type: "dropdown",
                  choices: ["1-10", "11-20", "20+","Nightowl"]
              },
              {
                  name: "SimilarClass",
                  title: "What class do you want a study buddy for the most? (must write a class code)",
                  type: "text",
              },
              {
                  name: "Schedule",
                  title: "Do you plan your schedule every week or have a flexible schedule?",
                  type: "dropdown",
                  choices: ["Planned", "Flexible"]
              }

          ]
      },
      
      { //======third page -> Compatibiity Questions=======
          "title": "Compatibility Questions",
          "elements": [
              {
                  name: "StudySetting",
                  title: "Would you rather work with a group or one-on-one?",
                  type: "dropdown",
                  choices: ["Group", "One on one"]
              },
              {
                  name: "ProblemApproach",
                  title: "When tackling a problem, are you more theoretical or practical?",
                  type: "dropdown",
                  choices: ["Group", "One on one"]
              },
              {
                  name: "Outgoingness",
                  title: "Are you more extroverted and outgoing, introverted and reserved, or hold qualities of both and am ambiverted?",
                  type: "dropdown",
                  choices: ["Extroverted", "Ambiverted", "Introverted"]
              },
              {
                  name: "Planning",
                  title: "Do you plan ahead and prepare your study itinerary or do you adapt as you go and go with the flow?",
                  type: "dropdown",
                  choices: ["Plan Ahead", "Adapt as you go"]
              }
          ]
      },
  ]
};


export default Basic_Questions;
