import React from 'react'
import './hero.scss';

import { init } from 'ityped';
import { useEffect, useRef } from 'react';

export default function Hero() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1000,
      strings: ['web developer.', 'designer.', 'dog mom.'],
    })
  }, [])

  return (
    <div className='hero' id='hero'>
      <div className="left">
        <div className="imgContainer">
          <img src="assets/hero-picture.png" alt='Alyssa' />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi, I'm</h2>
          <h1>Alyssa.</h1>
          <h3>I'm a <span ref={textRef}></span></h3>

          <div className="buttons">
            <a className='hero-btn contact-btn' href="#contact">CONTACT</a>
            <a className='hero-btn portfolio-btn' href="#portfolio">PORTFOLIO</a>
          </div>
        </div>

      </div>
    </div>
  )
}
