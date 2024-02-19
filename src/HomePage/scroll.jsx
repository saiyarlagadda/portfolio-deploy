
import React, { useState, useEffect } from 'react';
import '../HomePage/scroll.css';

const Scroll = () => {
  const [scrollPos, setScrollPos] = useState(100); // Initial scroll position

  useEffect(() => {
    const handleScroll = () => {
      setScrollPos(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
    <div className="scroll-section">
      <div className="scroll-text-container" style={{ transform: `translateX(-${scrollPos}px)` }}>
        <div className="scroll-text">
          <span>&bull;Data Science &bull;Web Devlopment &bull;BCI &bull;IOT</span>
        </div>
      </div>
    </div>
    </>
  );
};

export default Scroll;



