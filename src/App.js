import './App.css';
import React, {useState} from 'react';
import Navbar from './Components/Navbar';
import News from './Components/News';
import LoadingBar from 'react-top-loading-bar'
import {BrowserRouter as Router,Switch,Route,} from "react-router-dom";

const App = () => {
  const [progress, setProgress] = useState(0)
  const pageSize = 50;
  const apiKey = "95c834fa3f9f4d57b03ff84517d5f352"  

  
  
    return (
      <div>
        <Router>
        <Navbar />    
        <LoadingBar
        height={3}
        color='#f11946'
        progress={progress}
        
      />
        <Switch>
          <Route exact path="/general"><News setProgress = {setProgress} apiKey={apiKey}  key="general" pageSize={pageSize} country='in'  category='general'/></Route>
          <Route exact path="/business"><News setProgress = {setProgress} apiKey={apiKey}  key="business" pageSize={pageSize} country='in'  category='business'/></Route>
          <Route exact path="/entertainment"><News setProgress = {setProgress} apiKey={apiKey}  key="entertainment" pageSize={pageSize} country='in'  category='entertainment'/></Route>
          <Route exact path="/health"><News setProgress = {setProgress} apiKey={apiKey}  key="health" pageSize={pageSize} country='in'  category='health'/></Route>
          <Route exact path="/science"><News setProgress = {setProgress} apiKey={apiKey}  key="science" pageSize={pageSize} country='in'  category='science'/></Route>
          <Route exact path="/sport"><News setProgress = {setProgress} apiKey={apiKey}  key="sport" pageSize={pageSize} country='in'  category='sport'/></Route>
          <Route exact path="/technology"><News setProgress = {setProgress} apiKey={apiKey}  key="technology" pageSize={pageSize} country='in'  category='technology'/></Route>
          
        </Switch>
        </Router>
      </div>
    )
  }

export default App;

// MY NEWSAPI : 95c834fa3f9f4d57b03ff84517d5f352