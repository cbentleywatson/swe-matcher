import 'survey-react/modern.min.css';
import { useCallback } from 'react';

import { Survey, StylesManager, Model } from 'survey-react';
import { NavLink } from 'react-router-dom';
import { scryRenderedComponentsWithType } from 'react-dom/test-utils';
//import{axios} from 'axios' ;
const axios = require('axios');
console.log("log checlk");
StylesManager.applyTheme("modern");
const get_data_lib = require("./ranks.js");
//const functions = =
//const fs = require('browserify-fs')
//lib.get_user_strings_from_db("file.log");

//our global variables that get sent to show_results
var users_c, users_a, users_t;



//alert("Basic Questions Start"); working test funct
/**
 *
 */
/*const run_reset = () => {
  alert("start axios get");
  axios.get('http://localhost:5000/simplest/from_front_end')
        .then(res => {
             return res.json()
        }).then(response => {
              console.log("Sent From the test");
              //this.setState({firstName: response.firstName, lastName: response.lastName, email: response.email})
         })
}
*/

// Make the get request send the user survey data
/*
fetchUser = () => {
  axios.get('http://awesomeserver/users.username')
        .then(res => {
             return res.json()
        }).then(response => {
              this.setState({firstName: response.firstName, lastName: response.lastName, email: response.email})
         })
}
*/


function fetchUser() {
  alert("Fetch user funct");
  axios.get('http://localhost:5000/simplest/fetch_user_response_test')
    .then(res => {
      alert("in res");
      return res.json();
    }).then(response => {
      alert("in response");
      console.log("Sent From the test");
      //this.setState({firstName: response.firstName, lastName: response.lastName, email: response.email})
    })
}

//fetchUser();











// Start Of Back end team script 

/*
//fetch('http://localhost:5000/survey-results-post')
fetch('http://example.com/movies.json')
  .then(response => response.json())
  .then(data => console.log(data));
*/
const user_data_test_submit = async (e) => {
  // name = "kyle"
  //email = "simpl@gmail.com"
  //const handleOnSubmit = async (e) => {
  alert("Began user_data_test_submit");
  e.preventDefault();
  let result = await fetch(
    ' http://localhost:5000/register', {
    method: "post",
    body: body,
    headers: {
      'Content-Type': 'application/json'
    }
  }
  )
  result = await result.json();
  alert("Line 38");
  console.warn(result);
  if (result) {
    alert("Data saved successfully");
    //setEmail("");
    // setName("");
  }
  alert("RECEIVED RESULTS FROM BACKEND")
  //const results = JSON.stringify(sender.data);
  var body = "hello";
}
const handleOnSubmit = async (e) => {
  alert("ran simplest");

  // Attempting to get the results data
  //const results = JSON.stringify(sender.data);
  console.log("Result!");


  alert("before axios");
  fetchUser();
  user_data_test_submit();
  const user_data_test_submit = async (e) => {
    // name = "kyle"
    //email = "simpl@gmail.com"
    //const handleOnSubmit = async (e) => {
    alert("Began user_data_test_submit");
    e.preventDefault();
    let result = await fetch(
      ' http://localhost:5000/simplest/handle_on_submit', {
      method: "post",
      body: body,
      headers: {
        'Content-Type': 'application/json'
      }
    }
    )
    result = await result.json();
    alert("Line 38");
    console.warn(result);
    if (result) {
      alert("Data saved successfully");
      //setEmail("");
      // setName("");
    }
    alert("RECEIVED RESULTS FROM BACKEND")
    //const results = JSON.stringify(sender.data);
    var body = "hello";
  }




}



// End of backend team work






//alert(JSON.stringify(data));

const Basic_Questions = () => {


  const survey = new Model(surveyJSON);

  const alert_and_send = useCallback((sender) => {
    /*The results need to be send right here */
    // e.preventDefault();
    const results = JSON.stringify(sender.data);
    alert("Result!");
    //alert("THIS is Alert and send, which merges the send and results functions");



    //alert(results);
    //alert("Fetch user funct");f

    //const res = await axios.get('https://example.com/someApi');

    /*axios.get('http://localhost:5000/getUser')
      .then((response) => {
        //alert("in response");
        console.log("Sent From the test");
        //console.log(JSON.stringify(response.data));
        //console.log(response.data);
        //console.log(response.body.data.new_users_c);
        users_c = response.data.new_users_c;
        users_a = response.data.new_users_a;
        users_t = response.data.new_users_g;
        //alert(users_c);

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


      })*/


    console.log(get_data_lib.get_user_compatibility_rankings(3));
    window.location.href = 'http://localhost:3000/results';
    //general, ava, compatibility are the options




    //    window.location.href = 'http://localhost:3000/results'
  }, []);
  


  const alertResults = useCallback((sender) => {
    /*The results need to be send right here */

    const results = JSON.stringify(sender.data);
    console.log("Result!");
    window.location.href = 'http://localhost:3000/results';
    //      alert(" results "  +results);
    //      alert(results);
    //const results = JSON.stringify(sender.data);
    // Beginning of functions from the test set up

    /*
    alert("Begin copied lines")
    e.preventDefault();
    let result = await fetch(
      ' http://localhost:5000/register', {
          method: "post",
          body: "hell0",
          headers: {
            'Content-Type': 'application/json'
          }
      }
    )
    result = await result.json();
    console.warn(result);
    if (result) {
        alert("Data saved successfully");
        //setEmail("");
       // setName("");
    }
    */
    // End of pulled functions

    //    alert(results);
  }, []);
  // Start of backend call!
  //const s = sender;
  //survey.onComplete.add(handleOnSubmit);
  //survey.onComplete.add(alertResults);
  survey.onComplete.add(alert_and_send);

  //survey.onComplete.add(get_data);//survey.onComplete.add(handleOnSubmit);

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
          choices: ["Accounting", "Agricultural and Life Sciences", "Arts", "Business",
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
          name: "StudyDay",
          title: "What days of the week are you available?",
          type: "checkbox",
          choices: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]
        },
        {
          name: "StudyTime",
          title: "What is your favorite time to study/do work?",
          type: "checkbox",
          choices: ["Morning", "Early Afternoon", "Late Afternoon", "Nightowl"]
        },
        {
          name: "StudyLength",
          title: "How many hours do you spend at the library per week? ",
          type: "dropdown",
          choices: ["1-10", "11-20", "20+"]
        },

        {
          name: "Location",
          title: "Where would you like to meet to study?",
          type: "checkbox",
          choices: ["Zoom", "Marston", "Library West", "Coffee Shop", "Classroom Hall", "Law Library"]
        },

      ]
    },



    { //======Third page -> Compatibility Questions=======
      "title": "Compatibility Questions",
      "elements": [
        {
          name: "SimilarClass",
          title: "What class do you want a study buddy for the most? (must write a class code)",
          type: "text",
        },
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
          choices: ["Theoretical", "Practical"]
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

    }
  ]
};

export default Basic_Questions;

