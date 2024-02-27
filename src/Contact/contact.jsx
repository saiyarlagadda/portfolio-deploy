import React, { Component } from 'react'
import "./contact.css"
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Form from "./Form";
export default class Contact extends Component {
  render() {
    return (
      <>
      {/* <div className='section-title'>
        <p>Lets Get-in</p>
        <h1>Touch</h1>
      <div className='contact-left'></div>
      <div className='contact-right'></div>
      </div> */}
      <div className="contact-container">
      <div className="section-title">
      <p>Let's Get in</p>
      <h1>Touch</h1>
      </div>
      </div>
      <div className='contact-form-container'>
      <div className="contact-left">
        {/* Content for left container */}
        <div className="contact-info">
              <div className="contact-item">
                <i className="fas fa-envelope"><EmailIcon sx={{fontSize:50}}/></i>
                <p>ysai.uni9@gmail.com</p>
              </div>
              <div className="contact-item">
                <i className="fas fa-phone"><PhoneIcon sx={{fontSize:50}}/></i>   
                <p> +1234567890</p>
              </div>
              <div className="contact-item">
                <i className="fas fa-map-marker-alt"><LocationOnIcon sx={{fontSize:50}}/></i>
                <p>W Taylor Street, Chicago, USA</p>
              </div>
        </div>
      </div>
      <div className="contact-right">
        {/* Content for right container */}
        <Form/>
      </div>
    </div>
      </>
    )
  }
}

