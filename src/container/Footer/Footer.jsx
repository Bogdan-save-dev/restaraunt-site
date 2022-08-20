import React from 'react'
import './Footer.css'

import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi'

import { FooterOverlay, Newsletter } from '../../components'
import { images } from '../../constants'

const Footer = () => (
  <div className="footer section__padding">
    <FooterOverlay />
    <Newsletter />
  </div>
)

export default Footer
