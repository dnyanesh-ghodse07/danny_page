import React, { useEffect, useRef } from 'react'
import "./Header.scss"
import { gsap } from 'gsap'

const Header = () => {
  const headRef = useRef<null>(null);
  useEffect(() => {
    gsap.to(headRef.current, { x: 0 });
  }, []);
  return (
    <div className='header'>
      <div>
        <h1 ref={headRef}>
          Dnyanesh Ghodse
        </h1><br />
        <p>Front End Engineer</p>
      </div>
      <div className='social-icons'>
        
      </div>
    </div>
  )
}

export default Header