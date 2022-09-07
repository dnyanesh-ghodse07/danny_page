import React, { useEffect, useState } from 'react';
import ham from '../../assests/menu.svg'
import "./Navbar.scss"
import { Link } from 'react-router-dom';
const Navbar = () => {
  const [width, setWidth] = useState<number>(0);
  const [visible, setVisible] = useState<boolean>();

  useEffect(() => {
    updateWidth();
    window.addEventListener('resize', updateWidth)
    return () => window.removeEventListener('resize', updateWidth);
  }, [width])

  const updateWidth = () => {
    const inWidth = window.innerWidth;
    setWidth(inWidth);
    if (width > 600) {
      setVisible(false)
    }
  }

  return (
    <div className='navbar'>
      <div className="nav">
        <div className="logo">
          <Link to="/">
            Dnyanesh
          </Link>
        </div>
        {
          width < 600 ? <button className="ham_icon" onClick={() => setVisible(!visible)}>
            <img src={ham} alt="" />
          </button> : <div className="nav_links">
            <ul>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/skills">Skills</Link>
              </li>
              <li>
                <Link to="/projects">Projects</Link>
              </li>
              <li>
                <Link to="/contacts">Contact</Link>
              </li>
            </ul>
          </div>
        }
        {
          visible && <div className="ham_menu">
            <ul>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/skills">Skills</Link>
              </li>
              <li>
                <Link to="/projects">Projects</Link>
              </li>
              <li>
                <Link to="/contacts">Contact</Link>
              </li>
            </ul>
          </div>
        }
      </div>
    </div>
  )
}

export default Navbar