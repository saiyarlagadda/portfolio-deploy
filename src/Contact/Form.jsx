// import React, { useState } from 'react';
// import "./form.css"

// const Form = () => {
//   const initialFormData = {
//     name: '',
//     email: '',
//     message: ''
//   };

//   const [formData, setFormData] = useState(initialFormData);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prevState => ({
//       ...prevState,
//       [name]: value
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission here, e.g., send data to server
//     const name = formData.name;
//     const email = formData.email;
//     const message = formData.message;
//     console.log(name, email, message);
    
//     // Reset the form data
//     setFormData(initialFormData);

//     console.log('Form submitted:', formData);
//   };

//   return (
//     <>
//     <form className='contact-form' onSubmit={handleSubmit}>
//       <div className="form-group">
//         <label htmlFor="name">Name:</label>
//         <input
//           type="text"
//           id="name"
//           name="name"
//           value={formData.name}
//           onChange={handleChange}
//           required
//         />
//       </div>
//       <div className="form-group">
//         <label htmlFor="email">Email:</label>
//         <input
//           type="email"
//           id="email"
//           name="email"
//           value={formData.email}
//           onChange={handleChange}
//           required
//         />
//       </div>
//       <div className="form-group">
//         <label htmlFor="message">Message:</label>
//         <textarea
//           id="message"
//           name="message"
//           value={formData.message}
//           onChange={handleChange}
//           required
//         ></textarea>
//       </div>
//       <button className='btn btn2' type="submit">Submit</button>
//     </form>
//     </>
//   );
// };

// export default Form;





// import React, { useState } from 'react';
// import './form.css';
// import firebase from 'firebase/app'; // Import firebase from firebase/app
// import 'firebase/database'; 

// const Form = () => {
//   const initialFormData = {
//     name: '',
//     email: '',
//     message: ''
//   };

//   const [formData, setFormData] = useState(initialFormData);
//   const [showSuccess, setShowSuccess] = useState(false);

//   const firebaseConfig = {
//     apiKey: "AIzaSyAFtsCSb5QSoBcoFFKkrKifTxnK6Kff7yk",
//     authDomain: "contactform-255c9.firebaseapp.com",
//     databaseURL: "https://contactform-255c9-default-rtdb.firebaseio.com",
//     projectId: "contactform-255c9",
//     storageBucket: "contactform-255c9.appspot.com",
//     messagingSenderId: "175207190607",
//     appId: "1:175207190607:web:721516c5974c02858d1a3a",
//     measurementId: "G-KX1FL5H5G3"
//   };

//   // Initialize Firebase
//   firebase.initializeApp(firebaseConfig); // Initialize Firebase using firebase module
//   const database = firebase.database()
//   const ref = database.ref("message")

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prevState => ({
//       ...prevState,
//       [name]: value
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission here, e.g., send data to server
//     const name = formData.name;
//     const email = formData.email;
//     const message = formData.message;
//     console.log(name, email, message);

//     ref.push({
//       name: name,
//       email: email,
//       message: message
//     })

//     // Reset the form data
//     setFormData(initialFormData);

//     // Show success message
//     setShowSuccess(true);

//     // Hide success message after 3 seconds
//     setTimeout(() => {
//       setShowSuccess(false);
//     }, 3000);
//   };

//   return (
//     <>
//       <form className='contact-form' onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label htmlFor="name">Name:</label>
//           <input
//             type="text"
//             id="name"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="email">Email:</label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="message">Message:</label>
//           <textarea
//             id="message"
//             name="message"
//             value={formData.message}
//             onChange={handleChange}
//             required
//           ></textarea>
//         </div>
//         <button className='btn btn2' type="submit">Submit</button>
//       </form>

//       {/* Show success message if form submitted successfully */}
//       {showSuccess && <div className="success-message">Form submitted successfully!</div>}
//     </>
//   );
// };

// export default Form;


import React, { useState } from 'react';
import './form.css';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/database';


const firebaseConfig = {
    apiKey: "AIzaSyAFtsCSb5QSoBcoFFKkrKifTxnK6Kff7yk",
    authDomain: "contactform-255c9.firebaseapp.com",
    databaseURL: "https://contactform-255c9-default-rtdb.firebaseio.com",
    projectId: "contactform-255c9",
    storageBucket: "contactform-255c9.appspot.com",
    messagingSenderId: "175207190607",
    appId: "1:175207190607:web:721516c5974c02858d1a3a",
    measurementId: "G-KX1FL5H5G3",
};

// Initialize Firebase
try {
  firebase.initializeApp(firebaseConfig);
} catch (error) {
  console.error('Firebase initialization error', error.stack);
}

const Form = () => {
  const initialFormData = {
    name: '',
    email: '',
    message: ''
  };

  const [formData, setFormData] = useState(initialFormData);
  const [showSuccess, setShowSuccess] = useState(false);

  const database = firebase.database(); // Get a reference to the database
  const ref = database.ref("messages"); // Reference to the 'messages' node

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, message } = formData;

    try {
      await ref.push({
        name,
        email,
        message
      });
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 3000);
      setFormData(initialFormData);
    } catch (error) {
      console.error('Error submitting form', error);
      // Handle error (e.g., show error message to user)
    }
  };

  return (
    <>
      <form className='contact-form' onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button className='btn btn2' type="submit">Submit</button>
      </form>

      {/* Show success message if form submitted successfully */}
      {showSuccess && <div className="success-message">Form submitted successfully!</div>}
    </>
  );
};

export default Form;
