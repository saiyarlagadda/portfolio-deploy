import React, { Component } from 'react';
import '../HomePage/scroll.css';

// let line1=document.querySelector('.line1');
// let line2=document.querySelector('.line2');

// window.onscroll=()=>{
//   let pos =window.scrollY-800;
//   line1.style.left='${pos}px';
//   line1.style.right='${pos}px';

// }

export default class scroll extends Component {


  render() {
    return (
      <>
      <div className='line-scroll'>
      <div className='line1'>
        <h2>UX Desiner Data Science Internet of Things</h2>
      </div>
      <div className='line2'>
        <h2> Brain Computer Interface Cloud Computing</h2>
      </div>
      </div>
      </>
    )
  }
}

