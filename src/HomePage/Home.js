import React, { Component } from 'react'
import { redirect } from 'react-router-dom'
import './home.css'
import "../asserts/Sai Resume_ATS v1.1.pdf"
import Timeline from "./Timeline.js"
import "./timeline.css"
// import {mac} from"../asserts/mac.jpg"

const openresume= () => {
    window.open("/src/asserts/Sai Resume_ATS v1.1.pdf")
}

const openitem=() => {
    redirect.open("/src/asserts/Sai Resume_ATS v1.1.pdf")
}

const Mac=() =>{
    <img src='../asserts/mac.jpg'/>

}

export default class Home extends Component {
  render() {
    return (
      <>
      <section id='profile'>
        <div className='pic_container fadeIn'>
            <Mac/>
        </div>
        <div className='text_container fadeInBottom' >
            <p className='text_container_p1 fadeInBottom'>Hello! I'm Sai Yarlagadda</p>
            <h1 className='text_container_main fadeInBottom'>Master's at Purdue University</h1>
            <p className='text_container_p2 fadeInBottom'>A BCI Researcher | Software Engineer | Intern seeker<br/></p>
            {/* <p className='smoothed'>Smoothed text</p> */}
            <div className='btn_container fadeInBottom'>
                <button className='btn btn1' onClick={openresume}>Download</button>
                <button className='btn btn2' onClick={openitem}>Item</button>
            </div>
            

        </div>
      </section>
      {/* Experience section */}
      <section id='experince'>
      {/* <div className='pic_container'>
            <Mac/>
        </div>
        <div className='text_container'>
            <p className='text_container_p1'>Hello! I'm Sai Yarlagadda</p>
            <h1 className='text_container_main'>Master's at Purdue University</h1>
            <p className='text_container_p2'>A BCI Researcher | Software Engineer | intern seeker<br/></p>
            <div className='btn_container'>
                <button className='btn btn1' onClick={openresume}>Download</button>
                <button className='btn btn2' onClick={openitem}>Item</button>
            </div>
        </div> */}
        <Timeline/>
      </section>
      <section id='projects'>
    
      </section>
    
    </>
    )
  }
}
