import React, { Component } from 'react';
// import {Link, useLocation} from "react-router-dom";
import "./nav.css"
import "../Styles/underline.css"

export default class Nav extends Component {
  render() {
    return (
      <>
      <nav className='main-nav'>
        <div className='logo'>
        <a href='#'>Sai Yarlagadda</a>
        </div>
        <div className='menu-link'>
          <ul>
            <li>
              <a href='#' className='underline'>About</a>
            </li>
            <li>
              <a href='#' className='underline'>Projects</a>
            </li>
            <li>
              <a href='#' className='underline'>Contact</a>
            </li>
          </ul>
        </div>
      </nav>

      {/* This for responsive version */}
      {/* <nav id= "hamburger-nav">
        <div className='logo'>
          <a href='#'>Sai Yarlagadda</a>
        </div>
        <div className='hamburger-menu'>
          <div className='hamburger-icon' onClick={toggleMenu()}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className='hamburger-link'>
          <ul>
            <li>
              <a href='#' onClick={toggleMenu()}>About</a>
            </li>
            <li>
              <a href='#' onClick={toggleMenu()}>Projects</a>
            </li>
            <li>
              <a href='#' onClick={toggleMenu()}>Contact</a>
            </li>
          </ul>
          </div>
          </div>

      </nav> */}
      
      </>

    )
  }
}

/* <nav class="navbar">
// <div class="container-fluid">
//   <div class="navbar-header">
//       <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
//        <span class="icon-bar"></span>
//        <span class="icon-bar"></span>
//        <span class="icon-bar"></span> 
//       </button>
//       <a class="navbar-brand" href="#">Home</a>
//   </div>
//   <div class="collapse navbar-collapse" id="myNavbar">
//     <ul class="nav navbar-nav navbar-right">
//     <li class="active"><a href="#">Home</a></li>
//     <li><a href="#">About</a></li> 
//     <li><a href="#">Portfolio</a></li>
//     <li><a href="#">Contact</a></li>
//     </ul>
//   </div>
// </div>
// </nav> */