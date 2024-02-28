
//   import React, { Component } from 'react'
//   import { useHistory } from 'react-router-dom';




// /*Scroll animation timeline.*/



// /*Scroll animation timeline.*/
// export default class Projectview extends Component {
    
//     // constructor(props) {
//     //   super(props);
//     //   this.artshopRef = React.createRef();
//     //   this.depressionRef = React.createRef();
//     //   this.iotRef = React.createRef();
//     //   this.bciRef = React.createRef();
//     // }
  
//     // componentDidMount() {
//     //   const options = {
//     //     root: null,
//     //     rootMargin: '0px',
//     //     threshold: 1, // Adjust as needed to control when the intersection is detected
//     //   };
  
//     //   this.observeElement(this.artshopRef.current);
//     //   this.observeElement(this.depressionRef.current);
//     //   this.observeElement(this.iotRef.current);
//     //   this.observeElement(this.bciRef.current);
//     // }
  
//     // componentWillUnmount() {
//     //   if (this.observer) {
//     //     this.observer.disconnect();
//     //   }
//     // }
  
//     // observeElement(element) {
//     //   if (!element) return;
  
//     //   this.observer = new IntersectionObserver(this.handleIntersection, {
//     //     root: null,
//     //     rootMargin: '0px',
//     //     threshold: 1, // Adjust as needed to control when the intersection is detected
//     //   });
//     //   this.observer.observe(element);
//     // }
  
//     // handleIntersection = (entries, observer) => {
//     //   entries.forEach(entry => {
//     //     if (entry.isIntersecting) {
//     //       entry.target.classList.add('fadeIn');
//     //       entry.target.classList.add('fadeInBottom');
//     //     } else {
//     //       entry.target.classList.remove('fadeIn');
//     //       entry.target.classList.remove('fadeInBottom');
//     //     }
//     //   });
//     // };
//     // const history = useHistory();

//     // const handleNavigateToProjects = () => {
//     //   // Redirect to the '/projects' route
//     //   history.push('/projects');
//     // };
//     render() {
//       return(
//         <>

//         <div className='exp'>
//           <h2>My Work..</h2>
//         <div className='exp1'>
//           <div className="card-container fadeIn" ref={this.artshopRef}>
//             <div className="picture-container">
//             </div>
//             <div className="text-container">
//               <h1>ARTSTHOP</h1>
//               <p>ARTSTHOP is Website Designed for Artist to potrait there art.</p>
//               <div class="gtb-btn2 fadeInBottom" ref={this.artshopRef}>GitHub</div>
//             </div>
//           </div>

//           <div className="card-container fadeIn" ref={this.depressionRef}>
//             <div className="picture-container">
//             </div>
//             <div className="text-container">
//               <h1>Depression Related Posts-ML</h1>
//               <p>Detection on depression related post using Machine Learning.</p>
//               <div class="gtb-btn2 fadeInBottom">GitHub</div>
//             </div>
//           </div>

//           <div className="card-container fadeIn" ref={this.iotRef}>
//             <div className="picture-container">
//             </div>
//             <div className="text-container">
//               <h1>IOT Project</h1>
//               <p>Smart Water Dispensary using IOT and related projects</p>
//               <div class="gtb-btn2 fadeInBottom">GitHub</div>
//             </div>
//           </div>

//           <div className="card-container fadeIn" ref={this.bciRef}>
//             <div className="picture-container">
//             </div>
//             <div className="text-container">
//               <h1>Brain-Computer Interface Project</h1>
//               <p>BCI Research Application - Coming Soon.. </p>
//               <div class="gtb-btn2 fadeInBottom" ref={this.cardRef}>In Progress</div>
//             </div>
//           </div>

//           {/* <div className="card-container">
//             <div className="picture-container">
//             </div>
//             <div className="text-container">
//               <h1>Your Text Here</h1>
//               <p>Additional information or description goes here.</p>
//             </div>
//           </div>

//           <div className="card-container">
//             <div className="picture-container">
//             </div>
//             <div className="text-container">
//               <h1>Your Text Here</h1>
//               <p>Additional information or description goes here.</p>
//             </div>
//           </div> */}
//           </div>
//           {/* <h2 className='more' onClick={handleNavigateToProjects}>More..</h2> */}
//           </div>
//           </>
//       )
//     }
//   }


import React, { Component } from 'react';
import '../asserts/wolfgang-hasselmann-nX3cS5pgGNY-unsplash.jpg'

export default class Projectview extends Component {
  render() {
    const projectData = [
      {
        title: 'ARTSTHOP',
        description: 'Website Designed for Artist to potrait there art.',
        githubLink: 'https://github.com/saiyarlagadda/ARTSTHOP.git', // Replace with your actual GitHub link
        imageUrl: require('../asserts/ARTSTHOP.jpg'), // Replace with your image URL
      },
      {
        title: 'Depression Related Posts-ML',
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
        title: 'Brain_computer Interface Project',
        description: 'BCI Research Application - In Progress',
        githubLink: 'https://github.com/saipfw/cs590_13.git', // Replace with your actual GitHub link
        imageUrl: require('../asserts/BCI.jpg'), // Replace with your image URL
      },
    ];

    return (
      <>
        <div className='exp'>
          <h2>My Work..</h2>
          <div className='exp1'>
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
        </div>
      </>
    );
  }
}
