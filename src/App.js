import React, { useEffect, useState, useRef } from "react";
import './App.css';
import Navbar from './components/Navbar/index'
import Sidebar from "./components/Sidebar";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import Home from './pages'




function App() {
  const [Dark, setDark] = useState("false");
  const[ isOpen, setIsOpen] = useState(false);
  const [feedback, setFeedback] = useState("Maybe it's your lucky day.");
  const [claimingNft, setClaimingNft] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen)
  }


  return (
    <>
    <Router>

      <Switch>
        
        <Route path="/" component={Home} exact />

    
      </Switch>

    </Router>
    
    </>
  );
}

export default App;
