  // import React, { Component } from 'react'


  // export default class Projectview extends Component {
  //   render() {
  //     return (
  //         <>
  //         <div class='exp'>
  //         <h1>Projects</h1>
  //             <div class='exp1'>
  //               <div className='cards'>
  //               <div class='card'>
  //                 <h1>TEXT</h1>
  //                 </div>
  //               {/* <h1 className='text-right'>BCI Project</h1> */}
  //               </div>
  //               <div className='cards'>
  //               <div class='card'>
  //                 <h1>TEXT</h1>
  //               </div>
  //               </div>
  //               <div className='cards'>
  //               <div class='card'>
  //                 <h1>TEXT</h1>
  //               </div>
  //               </div>
  //               <div className='cards'>
  //               <div class='card'>
  //                 <h1>TEXT</h1>
  //               </div>
  //               </div>
  //             </div>
  //         </div>
  //         </>
  //     )
  //   }
  // }

  import React, { Component } from 'react'

/*Scroll animation timeline.*/



/*Scroll animation timeline.*/
  export default class Projectview extends Component {
    
    // constructor(props) {
    //   super(props);
    //   this.artshopRef = React.createRef();
    //   this.depressionRef = React.createRef();
    //   this.iotRef = React.createRef();
    //   this.bciRef = React.createRef();
    // }
  
    // componentDidMount() {
    //   const options = {
    //     root: null,
    //     rootMargin: '0px',
    //     threshold: 1, // Adjust as needed to control when the intersection is detected
    //   };
  
    //   this.observeElement(this.artshopRef.current);
    //   this.observeElement(this.depressionRef.current);
    //   this.observeElement(this.iotRef.current);
    //   this.observeElement(this.bciRef.current);
    // }
  
    // componentWillUnmount() {
    //   if (this.observer) {
    //     this.observer.disconnect();
    //   }
    // }
  
    // observeElement(element) {
    //   if (!element) return;
  
    //   this.observer = new IntersectionObserver(this.handleIntersection, {
    //     root: null,
    //     rootMargin: '0px',
    //     threshold: 1, // Adjust as needed to control when the intersection is detected
    //   });
    //   this.observer.observe(element);
    // }
  
    // handleIntersection = (entries, observer) => {
    //   entries.forEach(entry => {
    //     if (entry.isIntersecting) {
    //       entry.target.classList.add('fadeIn');
    //       entry.target.classList.add('fadeInBottom');
    //     } else {
    //       entry.target.classList.remove('fadeIn');
    //       entry.target.classList.remove('fadeInBottom');
    //     }
    //   });
    // };
    
    
    render() {
      return(
        <>

        <div className='exp'>
          <h2>My Work..</h2>
        <div className='exp1'>
          <div className="card-container fadeIn" ref={this.artshopRef}>
            <div className="picture-container">
            </div>
            <div className="text-container">
              <h1>ARTSTHOP</h1>
              <p>ARTSTHOP is Website Designed for Artist to potrait there art.</p>
              <div class="gtb-btn2 fadeInBottom" ref={this.artshopRef}>GitHub</div>
            </div>
          </div>

          <div className="card-container fadeIn" ref={this.depressionRef}>
            <div className="picture-container">
            </div>
            <div className="text-container">
              <h1>Depression Related Posts-ML</h1>
              <p>Detection on depression related post using Machine Learning.</p>
              <div class="gtb-btn2 fadeInBottom">GitHub</div>
            </div>
          </div>

          <div className="card-container fadeIn" ref={this.iotRef}>
            <div className="picture-container">
            </div>
            <div className="text-container">
              <h1>IOT Project</h1>
              <p>Smart Water Dispensary using IOT and related projects</p>
              <div class="gtb-btn2 fadeInBottom">GitHub</div>
            </div>
          </div>

          <div className="card-container fadeIn" ref={this.bciRef}>
            <div className="picture-container">
            </div>
            <div className="text-container">
              <h1>Brain-Computer Interface Project</h1>
              <p>BCI Research Application - Coming Soon.. </p>
              <div class="gtb-btn2 fadeInBottom" ref={this.cardRef}>In Progress</div>
            </div>
          </div>

          {/* <div className="card-container">
            <div className="picture-container">
            </div>
            <div className="text-container">
              <h1>Your Text Here</h1>
              <p>Additional information or description goes here.</p>
            </div>
          </div>

          <div className="card-container">
            <div className="picture-container">
            </div>
            <div className="text-container">
              <h1>Your Text Here</h1>
              <p>Additional information or description goes here.</p>
            </div>
          </div> */}
          </div>
          <h2 className='more'>More..</h2>
          </div>
          </>
      )
    }
  }
  


// import React, { Component } from 'react'
// import '../HomePage/Projectview.css'

// export default class Projectview extends Component {
//   render() {
//     return (
//       <>
//           <div class='exp'>
//             <h1>Projects</h1>
//               <div class='exp1'>
//                 <div className='card-img'>
//                 </div>
//                 <div className='card-content'>
//                   <span className='card-extra'></span>
//                 </div>
//               </div>
//           </div>
//       </>
//     )
//   }
// }
