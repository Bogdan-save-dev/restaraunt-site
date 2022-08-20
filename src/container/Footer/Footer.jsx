import React from 'react'
import './Footer.css'

import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi'

import { FooterOverlay, Newsletter } from '../../components'
import { images } from '../../constants'

const Footer = () => (
  <div className="footer section__padding">
    <FooterOverlay />
    <Newsletter />

    <div className="footer__links">
      <div className="footer__contact">
        <h2 className="footer__headtext">Contact Us</h2>
        <p className="p__opensans">+1 212-555-1230</p>
      </div>
      <div className="footer__logo">
        <img src={images.gericht} alt="footer logo" />
        <p className="p__opensans">
          The best way to find yourself to lose yourself in the service of
          others
        </p>
        <img
          src={images.spoon}
          alt="spoon"
          className="spoon_img"
          style={{ marginTop: '15px' }}
        />
        <div className="footer__icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>
      <div className="footer__work">
        <h2 className="footer__headtext">Working hours</h2>
        <p className="p__opensans">Monday-Friday</p>
        <p className="p__opensans">08:00 am - 12:00 am</p>
        <p className="p__opensans">Sunday</p>
        <p className="p__opensans">08:00 am - 12:00 am</p>
      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans">2022. Geright</p>
    </div>
  </div>
)

export default Footer
