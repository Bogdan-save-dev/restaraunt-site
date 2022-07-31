import React, { useState } from 'react'

import { GiHamburgerMenu } from 'react-icons/gi'
import { MdOutlineRestaurantMenu } from 'react-icons/md'

import images from './../../constants/images'
import './Navbar.css'

const Navbar = () => {
  const [toggle, setToggle] = useState(false)

  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <img src={images.gericht} alt="app logo" />
      </div>
      <ul className="navbar__links">
        <li className="p__opensans">
          <a href="#home">Home</a>
        </li>
        <li className="p__opensans">
          <a href="#about">About</a>
        </li>
        <li className="p__opensans">
          <a href="#Contact">Contact</a>
        </li>
        <li className="p__opensans">
          <a href="#menu">menu</a>
        </li>
        <li className="p__opensans">
          <a href="#awards">Awards</a>
        </li>
      </ul>

      <div className="navbar__login">
        <a href="#login" className="p__opensans">
          Log in/ Register
        </a>
        <div />
        <a href="/" className="p__opensans">
          Book table
        </a>
      </div>
      <div className="navbar-smallscreen">
        <GiHamburgerMenu
          color="#fff"
          fontSize={27}
          onClick={() => setToggle(true)}
        />

        {toggle && (
          <div className="navbar-smallscreen_overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu
              fontSize={27}
              className="overlay__close"
              onClick={() => setToggle(false)}
            />

            <ul className="navbar-smallscreen-links">
              <li className="p__opensans">
                <a href="#home">Home</a>
              </li>
              <li className="p__opensans">
                <a href="#about">About</a>
              </li>
              <li className="p__opensans">
                <a href="#Contact">Contact</a>
              </li>
              <li className="p__opensans">
                <a href="#menu">menu</a>
              </li>
              <li className="p__opensans">
                <a href="#awards">Awards</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
