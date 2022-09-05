import React, { useEffect, useState } from 'react';
import ham from '../../assests/menu.svg'
import "./Navbar.scss"
const Navbar = () => {
  const [width, setWidth] = useState<number>(0);
  const [visible, setVisible] = useState<boolean>(true);

  useEffect(() => {
    updateWidth();
    window.addEventListener('resize', updateWidth)
    return () => window.removeEventListener('resize', updateWidth);
  }, [width])

  const updateWidth = () => {
    const inWidth = window.innerWidth;
    setWidth(inWidth);
  }

  return (
    <div className='navbar'>
      <div className="nav">
        <div className="logo">
          Dnyanesh
        </div>
        {
          width < 600 ? <button className="ham_icon" onClick={() => setVisible(!visible)}>
          <img src={ham} alt="" />
        </button> : <div className="nav_links">
          <ul>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Skills</a>
            </li>
            <li>
              <a href="">Projects</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
          </ul>
        </div>
        }
        {
          visible && <div className="ham_menu">
          <ul>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Skills</a>
            </li>
            <li>
              <a href="">Projects</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
          </ul>
        </div>
        }
      </div>
    </div>
  )
}

export default Navbar