import React, { useEffect, useRef } from 'react'
import { InstagramOutlined, LinkedinOutlined, GithubOutlined, MailOutlined} from '@ant-design/icons';
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
        <div ref={headRef} className='title'>
          Dnyanesh Ghodse
        </div><br />
        <p>Front End Engineer</p>
      </div>
      <div className='social-icons'>
        <div className="icons">
          <MailOutlined color='red' className='icon'/>
          {/* <span>Mail</span> */}
        </div>
        <div className="icons" >
          <GithubOutlined className='icon'/>
          {/* <span>Github</span> */}
        </div>
        <div className="icons">
          <LinkedinOutlined className='icon'/>
          {/* <span>LinkedIn</span> */}
        </div>
        <div className="icons">
          <InstagramOutlined className='icon'/>
          {/* <span>Instagram</span> */}
        </div>
      </div>
    </div>
  )
}

export default Header