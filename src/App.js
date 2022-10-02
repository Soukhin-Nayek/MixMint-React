import './App.css';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';
import Signin from './components/Signin';
import Signup from './components/Signup';
import React, {useState}  from "react";
import Alert from "./components/Alert";

import {
  HashRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App(){
  const [alert, Setalert] = useState(null);
  return (
    <>
    <Router>
      <div className="App bg-dark" style={{"minHeight":"100vh"}}>
        <Navbar/>
      <Alert alert={alert}/>
        <Routes>
        <Route exact path="/" element={<Dashboard/>}/>         
        <Route exact path="/Signup"  element={<Signup Setalert={Setalert}/>}/>
        <Route exact path="/Signin" element={<Signin Setalert={Setalert}/>}/>
        </Routes>
      </div>
    </Router>

    </>
  );
}

export default App;
