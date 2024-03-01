// import React, { Component } from 'react'
// import "./projects.css"

// export default class Projects extends Component {
//   render() {
//     return (
//       <>
//       <div className='project-section'>
//       <div className="card-container fadeIn">
//             <div className="picture-container">
//             </div>
//             <div className="text-container">
//               <h1>ARTSTHOP</h1>
//               <p>ARTSTHOP is Website Designed for Artist to potrait there art.</p>
//               <div class="gtb-btn2 fadeInBottom">GitHub</div>
//             </div>
//           </div>
//           <div className="card-container fadeIn">
//             <div className="picture-container">
//             </div>
//             <div className="text-container">
//               <h1>ARTSTHOP</h1>
//               <p>ARTSTHOP is Website Designed for Artist to potrait there art.</p>
//               <div class="gtb-btn2 fadeInBottom">GitHub</div>
//             </div>
//           </div>
//           <div className="card-container fadeIn">
//             <div className="picture-container">
//             </div>
//             <div className="text-container">
//               <h1>ARTSTHOP</h1>
//               <p>ARTSTHOP is Website Designed for Artist to potrait there art.</p>
//               <div class="gtb-btn2 fadeInBottom">GitHub</div>
//             </div>
//           </div>
//           <div className="card-container fadeIn">
//             <div className="picture-container">
//             </div>
//             <div className="text-container">
//               <h1>ARTSTHOP</h1>
//               <p>ARTSTHOP is Website Designed for Artist to potrait there art.</p>
//               <div class="gtb-btn2 fadeInBottom">GitHub</div>
//             </div>
//           </div>
//           <div className="card-container fadeIn">
//             <div className="picture-container">
//             </div>
//             <div className="text-container">
//               <h1>ARTSTHOP</h1>
//               <p>ARTSTHOP is Website Designed for Artist to potrait there art.</p>
//               <div class="gtb-btn2 fadeInBottom">GitHub</div>
//             </div>
//           </div>
//           <div className="card-container fadeIn">
//             <div className="picture-container">
//             </div>
//             <div className="text-container">
//               <h1>ARTSTHOP</h1>
//               <p>ARTSTHOP is Website Designed for Artist to potrait there art.</p>
//               <div class="gtb-btn2 fadeInBottom">GitHub</div>
//             </div>
//           </div>
//       </div>
//       </>
//     )
//   }
// }
import React, { Component } from 'react'
import "./projects.css"

export default class projects extends Component {
  render() {
    const projectData = [
      {
        title: 'Fake News Detection',
        description: 'Fake News Detection using Machine learning',
        githubLink: 'https://github.com/saiyarlagadda/Fake-News-detection-ML.git', // Replace with your actual GitHub link
        imageUrl: require('../asserts/fake.jpg'), // Replace with your image URL
      },
      {
        title: 'C# Web Application',
        description: 'C# Web Application using WebAPIs and SQL Database',
        githubLink: 'https://github.com/saiyarlagadda/C-WebAPI-s.git', // Replace with your actual GitHub link
        imageUrl: require('../asserts/c.jpg'), // Replace with your image URL
      },
      // ... Add more project objects with their details
      {
        title: 'Bajan Society website v1.0',
        description: 'Bajan Society FW v1.0 undeployed',
        githubLink: 'https://github.com/BhajanScoiety/BhajanProject', // Replace with your actual GitHub link
        imageUrl: require('../asserts/bj.jpg'), // Replace with your image URL
      },

      {
        title: 'Limb Classification',
        description: 'Detection of Limbs using EEG Signals - In Progress',
        githubLink: 'https://github.com/saipfw/cs590_13.git', // Replace with your actual GitHub link
        imageUrl: require('../asserts/eeg.jpg'), // Replace with your image URL
      },

      {
        title: 'ARTSTHOP',
        description: 'Website Designed for Artist to potrait there art.',
        githubLink: 'https://github.com/saiyarlagadda/ARTSTHOP.git', // Replace with your actual GitHub link
        imageUrl: require('../asserts/ARTSTHOP.jpg'), // Replace with your image URL
      },
      {
        title: 'ML-Project',
        description: 'Detection on depression related post using Machine Learning.',
        githubLink: 'https://github.com/saiyarlagadda/Detection-of-Depression-Related-Posts-ML.git', // Replace with your actual GitHub link
        imageUrl: require('../asserts/ML.jpg'), // Replace with your image URL
      },
      // ... Add more project objects with their details
      {
        title: 'IOT-Agriculture',
        description: 'Smart water Dispenser and other IOT Applications',
        githubLink: 'https://github.com/saiyarlagadda/IOT-Lab.git', // Replace with your actual GitHub link
        imageUrl: require('../asserts/iot.jpg'), // Replace with your image URL
      },

      {
        title: 'Brain-computer Interface Project',
        description: 'BCI Research Application - In Progress',
        githubLink: 'https://github.com/saipfw/cs590_13.git', // Replace with your actual GitHub link
        imageUrl: require('../asserts/BCI.jpg'), // Replace with your image URL
      },
    ];
    return (
      <>
      <div className='project-section'>
      {projectData.map((project) => (
              <div className="card-container fadeIn" key={project.title}>
                <div className="picture-container" style={{ backgroundImage: `url(${project.imageUrl})` }}>
                </div>
                <div className="text-container">
                  <h1>{project.title}</h1>
                  <p>{project.description}</p>
                  <a href={project.githubLink} target="_blank" rel="noreferrer" className="gtb-btn2 fadeInBottom">GitHub</a>
                </div>
              </div>
            ))} 
      </div>
      </>
    )
  }
}
