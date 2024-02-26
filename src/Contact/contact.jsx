import React, { Component } from 'react'
import "./contact.css"
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
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
      </div>
    </div>
      </>
    )
  }
}


// import React from 'react';
// import styled from 'styled-components';
// import { MdEmail, MdLocalPhone } from 'react-icons/md';
// import ContactForm from './ContactForm';
// import ContactInfoItem from './ContactInfoItem';
// import SectionTitle from './SectionTitle';

// const ContactSectionStyle = styled.div`
//   padding: 10rem 0;
//   .contactSection__wrapper {
//     display: flex;
//     gap: 5rem;
//     margin-top: 7rem;
//     justify-content: space-between;
//     position: relative;
//   }
//   .contactSection__wrapper::after {
//     position: absolute;
//     content: '';
//     width: 2px;
//     height: 50%;
//     background-color: var(--gray-1);
//     left: 50%;
//     top: 30%;
//     transform: translate(-50%, -50%);
//   }
//   .left {
//     width: 100%;
//     max-width: 500px;
//   }
//   .right {
//     max-width: 500px;
//     width: 100%;
//     border-radius: 12px;
//     /* padding-left: 3rem; */
//   }
//   @media only screen and (max-width: 768px) {
//     .contactSection__wrapper {
//       flex-direction: column;
//     }
//     .contactSection__wrapper::after {
//       display: none;
//     }
//     .left,
//     .right {
//       max-width: 100%;
//     }
//     .right {
//       padding: 4rem 2rem 2rem 2rem;
//     }
//   }
// `;

// export default function ContactSection() {
//   return (
//     <ContactSectionStyle>
//       <div className="container">
//         <SectionTitle heading="contact" subheading="get in touch" />
//         <div className="contactSection__wrapper">
//           <div className="left">
//             {/* <ContactInfoItem icon={<MdLocalPhone />} text="+8801231" /> */}
//             <ContactInfoItem icon={<MdEmail />} text="ysai.uni9@gmail.com" />
//             <ContactInfoItem text="Fort Wayne, Indiana" />
//           </div>
//           <div className="right">
//             <ContactForm />
//           </div>
//         </div>
//       </div>
//     </ContactSectionStyle>
//   );
// }