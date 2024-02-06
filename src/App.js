// import logo from './logo.svg';
// import './App.css';
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./Nav/Nav.js";
import Home from "./HomePage/Home.js";
import Footer from "./Footer/Footer.js"

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
