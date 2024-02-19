// import logo from './logo.svg';
// import './App.css';
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./Nav/Nav.jsx";
import Home from "./HomePage/Home.jsx";
import Footer from "./Footer/Footer.jsx"

const App = ()=> {

  return (
    <>
    <Nav/>
    <Home/>
    <Footer/>
    </>
  );
}

export default App;
