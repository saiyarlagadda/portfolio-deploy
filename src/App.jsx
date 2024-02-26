// import logo from './logo.svg';
// import './App.css';
import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
// import { Switch} from 'react-router-dom';
import Nav from "./Nav/Nav.jsx";
import Home from "./HomePage/Home.jsx";
import Footer from "./Footer/Footer.jsx";
import About from "./About/About.jsx";
import Projects from "./Projects/Projects.jsx";
import Contact from "./Contact/Contact.jsx";
const App = ()=> {

  return (
    <>
    <Router>
    <Nav/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/projects' element={<Projects/>}/>
      <Route path='/contact' element={<Contact/>}/>
    </Routes>
    <Footer/>
    </Router>
    </>
  );
}

export default App;
