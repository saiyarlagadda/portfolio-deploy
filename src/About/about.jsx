import React, { Component } from 'react'
import './about.css'
import "../HomePage/media_home.css"
export default class About extends Component {
  render() {
    return (
      <>
      <section id='about-container'>
        {/* <div className='about-div1'>About</div> */}
        <div className='pic-cards'>
          {/* <div className='pic-cont'></div> */}
        </div>
        <div className='cards'>
          <h2>About me.</h2>
          <div className='line'></div>
          <div className='about-text'>
            <p style={{fontSize:'20px'}}>HI! I am Sai Teja Yarlagadda,</p>
            <p className='semi-bold'>A computer Science Graduate student from Purdue University and Bachelor's<br/> in Information Technology from Acharya Nagarjuna University.</p>
            <p className='semi-bold'>My interest lies in Machine Learning, Brain-Computer Interface and Web-Dev.</p>
            <p></p>
          </div>
          <h2>Skills.</h2>
          <div className='line'></div>
          <div className='about-text'>
            <p><b>Technical: </b> Java, C, C#, Python, JavaScript, MySQL, GitHub, Power BI, Firebase, MS 365, Power Apps.</p>
            <p><b>Web Devlopment: </b>HTML, CSS, SAS, MERN (React Js, Node Js, Express, Mongo DB) Stack, C# Web API’s.</p>
            <p><b>Testing Tools: </b>Mocha+Chai, Jest, Cypress.</p>
            <p><b>Soft Skills: </b>Detail-oriented, Organized, Problem-solving, Collaborative and Communication proficiency.</p>
          </div>
          <h2>Experience.</h2>
          <div className='line'></div>
          <div className='about-text'>
            <p><b>Research Assitant | PURDUE University</b></p>
            <p>&bull; Working on BCI Project that uses Emotiv Sdk to make Cortex apps.</p>
            <p>&bull; EEG Data extraction and mapping feature for BCI applications.</p>
            <p></p>
            <p><b>Teaching Assitant | PURDUE University</b></p>
            <p>&bull; Pioneering as Teaching Assistant assisting Professor and Student regarding coursework.</p>
            <p>&bull; Coursework includes Software Engineering and Software Project Mangement.</p>
            <p><b>Systems Engineer | TCS</b></p>
            <p>&bull; Engaged in a productive discussion and successfully persuaded implementation of a Machine Learning Model for patient record screening, ensuring timely detection of abnormal records and immediate alerts.</p>
            <p>&bull; Integrated GE Centricity and Epic Systems, resulting in a 30% reduction in manual data entry for electronic health record (EHR) management.</p>
            <p></p>
          </div>
        </div>
      </section>
      {/* <section id='ham-about-container'>
      <div className='ham-pic-cards'></div>
        <div className='ham-cards'></div>
      </section> */}
      </>
    )
  }
}

