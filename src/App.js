import { useCallback } from 'react';
import React, { Component } from "react";
import { BrowserRouter, Route, Routes, Link, Redirect} from "react-router-dom";

import 'survey-react/modern.min.css';
import { Survey, StylesManager, Model } from 'survey-react';
import Welcome from './components/Welcome';
import Question from './components/Basic_Questions';

StylesManager.applyTheme("modern");

class  App extends Component {
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

