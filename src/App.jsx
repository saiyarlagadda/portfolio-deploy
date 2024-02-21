// import logo from './logo.svg';
// import './App.css';
import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
// import { Switch} from 'react-router-dom';
import Nav from "./Nav/Nav.jsx";
import Home from "./HomePage/Home.jsx";
import Footer from "./Footer/Footer.jsx";
import About from "./About/about.jsx";
import Contact from "./Contact/contact.jsx";
import Projects from "./Projects/projects.jsx";

const App = ()=> {

  return (
    <>
    <Router>
    <Nav/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route Path='/about' element={<About/>}/>
      <Route path='/projects' element={<Projects/>}/>
      <Route path='/contact' element={<Contact/>}/>
    </Routes>
    <Footer/>
    </Router>
    </>
  );
}

export default App;
