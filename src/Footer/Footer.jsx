import React, { Component } from 'react'

import {footer} from'../Footer/footer.css'
export default class Footer extends Component {
  render() {
    return (
        <>
        <footer className='footer'>
            <div className='word'>Crafted by Sai Yarlagadda</div>
            {/* <div className='link'>
                <div className='home-mini'>Home</div>
                <div className='about-mini'>about</div>
            </div> */}
        </footer>
        </>
    )
  }
}
