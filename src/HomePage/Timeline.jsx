import React, { Component } from 'react'
import Purdue from "../asserts/pu.png"
import fedex from "../asserts/Fedex.png"
import amazon from "../asserts/amazon.png"

export default class Timeline extends Component {
  render() {
    return (
      <>
      <div class="timeline">
        <div class="container left-container">
            <img src={Purdue}/>
            <div class="text-box" >
                <h2>Purdue University </h2>
                <small>2020 - 2021</small>
                <p>Master's in Computer Science<br/>Teaching Assistant | IT-Services</p>
                <span class='left-container-arrow'></span>
            </div>
        </div>
 

        <div class="container right-container">
        <img src={fedex}/>
            <div class="text-box" >
                <h2>FedEx </h2>
                <small>2022 - 2022</small>
                <p>Java Devloper<br/>Java | AWS</p>
                <span class='right-container-arrow'></span>
            </div>
        </div>

      
        <div class="container left-container">
            <img src={amazon}/>
            <div class="text-box" >
                <h2>Amazon </h2>
                <small>2022 - Current</small>
                <p>Software Engineer(L4)-DevOps Engineer<br/>Java | AWS</p>
                <span class='left-container-arrow'></span>
            </div>
        </div>
        </div>

      </>
    )
  }
}
