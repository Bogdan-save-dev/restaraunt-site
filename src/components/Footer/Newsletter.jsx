import React from 'react'
import SubHeading from '../SubHeading/SubHeading'

import './Newsletter.css'

const Newsletter = () => (
  <div className="newsletter">
    <div className="newsletter__heading">
      <SubHeading title="Newsletter" />
      <h2 className="headtext__cormorant">Subscribe To Our Newsletter</h2>
      <p className="p__opensans">And never miss latest updates!</p>
    </div>

    <div className="newsletter__input flex__center">
      <input type="email" placeholder="Enter your email" />
      <button type="button" className="custom__button">
        Subscribe
      </button>
    </div>
  </div>
)

export default Newsletter
