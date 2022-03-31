import { useCallback } from 'react';
import React, { Component } from "react";
import { BrowserRouter, Route, Routes, Link, Redirect} from "react-router-dom";

import 'survey-react/modern.min.css';
import { Survey, StylesManager, Model } from 'survey-react';
import Welcome from './components/Welcome';
import Question from './components/Basic_Questions';

StylesManager.applyTheme("modern");

class  App extends Component {















  /*
state = {
    data: null
  };

  componentDidMount() {
    this.callBackendAPI()
      .then(res => this.setState({ data: res.express }))
      .catch(err => console.log(err));
  }
    // fetching the GET route from the Express server which matches the GET route from server.js
  callBackendAPI = async () => {
    const response = await fetch('/express_backend');
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message) 
    }
    return body;
  };


*/
    render() {
      return (      
         <div>
              <Routes>
              <Route path="/" element={<Welcome />}></Route>
              <Route path="/survey" element={<Question />}></Route>
             </Routes>
        </div>
      );
    }
  }
   
  export default App;

