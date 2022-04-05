import 'survey-react/modern.min.css';
import { useCallback } from 'react';

import { Survey, StylesManager, Model } from 'survey-react';
import { NavLink } from 'react-router-dom';
import { scryRenderedComponentsWithType } from 'react-dom/test-utils';
import{axios} from 'axios' ;


StylesManager.applyTheme("modern");


/*
//fetch('http://localhost:5000/survey-results-post')
fetch('http://example.com/movies.json')
  .then(response => response.json())
  .then(data => console.log(data));

*/



/*
 const data = {firstName : 'fred'};
  //axios.post('/survey-results-post', data);
      axios({
  method: 'post',
  url: '/survey-results-post',
  data: {
    firstName: 'Fred',
    lastName: 'Flintstone'
  }
  })
  console.log(JSON.stringify)

*/

/*
const data = { username: 'example' };

fetch('https://example.com/profile', {
  method: 'POST', // or 'PUT'
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data),
})
.then(response => response.json())
.then(data => {
  console.log('Success:', data);
})
.catch((error) => {
  console.error('Error:', error);
});
*/
alert("before feftch");
const data = { username: 'example' };
//fetch('https://example.com/profile', {
fetch('http://localhost/survey-results-post', {
  method: 'POST', // or 'PUT'
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data),
})
.then(response => response.json())
.then(data => {
  console.log('Success:', data);
})
.catch((error) => {
  console.error('Error:', error);
});

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: 'React POST Request Example' })
    };
    fetch('https://reqres.in/invalid-url', requestOptions)
        .then(async response => {
            const isJson = response.headers.get('content-type')?.includes('application/json');
            const data = isJson && await response.json();

            // check for error response
            if (!response.ok) {
                // get error message from body or default to response status
                const error = (data && data.message) || response.status;
                return Promise.reject(error);
            }

            this.setState({ postId: data.id })
        })
        .catch(error => {
            this.setState({ errorMessage: error.toString() });
            console.error('There was an error!', error);
        });









alert(JSON.stringify(data));









const Basic_Questions = () => {


    const survey = new Model(surveyJSON);
    const alertResults = useCallback((sender) => {
    /*The results need to be send right here */
      
    const results = JSON.stringify(sender.data);
    console.log("Result!");
  alert("before axios");
 

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
