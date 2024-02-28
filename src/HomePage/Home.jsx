import React, { Component } from 'react'
import { redirect } from 'react-router-dom'
import './home.css'
import '../HomePage/media_home.css'
import "../asserts/Sai Resume_ATS v1.1.pdf"
import Timeline from "./Timeline.jsx"
import "./timeline.css"
import ProjectView from './Projectview.jsx'
import './Projectview.css'
// import {mac} from"../asserts/mac.jpg"
import Scroll from './scroll.jsx'
import LinkedInIcon from '@mui/icons-material/LinkedIn';


const openresume= () => {
    window.location.href="https://github.com/saiyarlagadda/Resume/raw/main/Sai%20Resume_ATS%20v1.5.pdf";
}



// const Mac=() =>{
//     <img src='../asserts/mac.jpg'/>

// }
const Linkdin = () => {
  window.location.href = 'https://www.linkedin.com/in/saiteja-y/';
};

export default class Home extends Component {
  render() {
    return (
      <>
      <section id='profile'>
        <div className='pic_container fadeIn'>
          <img src={require('../asserts/me.jpg')}/>
            {/* <Mac sx={{backgroundImage: `url(${imgurl})` }}/> */}
        </div>
        <div className='text_container fadeInBottom' >
            <p className='text_container_p1 fadeInBottom'>Hello! I'm Sai Yarlagadda</p>
            <h1 className='text_container_main fadeInBottom'>Master's at Purdue University</h1>
            <p className='text_container_p2 fadeInBottom'>A BCI Researcher | Software Engineer | ML Engineer<br/></p>
            {/* <p className='smoothed'>Smoothed text</p> */}
            <div className='btn_container fadeInBottom'>
                <button className='btn btn1' onClick={openresume}>Download</button>
                {/* <button className='btn btn2' onClick={openitem}>Item</button> */}
                <LinkedInIcon sx={{fontSize:60}} onClick={Linkdin}/>
            </div>
        </div>
      </section>
      <section id='ham-profile'>
        {/* <div className='pic_container fadeIn'>
            <Mac/>
        </div> */}
        <div className='text_container fadeInBottom' >
            <p className='text_container_p1 fadeInBottom'>Hello! I'm Sai Yarlagadda</p>
            <h1 className='text_container_main fadeInBottom'>Master's @ Purdue University</h1>
            <p className='text_container_p2 fadeInBottom'>BCI Researcher | Software Engineer<br/></p>
            {/* <p className='smoothed'>Smoothed text</p> */}
            <div className='btn_container fadeInBottom'>
                <button className='btn btn1' onClick={openresume}>Download</button>
                <LinkedInIcon sx={{fontSize:60}} onClick={Linkdin}/>
                {/* <button className='btn btn2' onClick={openitem}>Item</button> */}
            </div>
        </div>
      </section>
      
      {/* Experience section */}
      <section id='experince'>
        {/* <Timeline/> */}
        <Scroll/>
      </section>
      {/* This is Hamburger experience section */}
      <section id='ham-experience'>
        <Scroll/>
      </section>
      {/* Project Section */}
      <section id='projects'>
        <ProjectView/>
      </section>
    </>
    )
  }
}
