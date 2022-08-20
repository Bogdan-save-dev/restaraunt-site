import React from 'react'

import './Chef.css'

import { images } from '../../constants'
import { SubHeading } from '../../components'

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef_image" />
    </div>

    <div className="app__wrapper_info">
      <SubHeading title="Chef word" />
      <h2 className="headtext__cormorant">What We Believe In</h2>
      <div className="chef__content">
        <div className="chef__content-qoute">
          <img src={images.quote} alt="qoute" />
          <p className="p__opensans">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex quisquam
            odit est itaque provident distinctio fuga, inventore ea autem, natus
          </p>
        </div>
        <p className="p__opensans">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus,
          amet commodi. Eligendi tempora dicta laboriosam quae, consectetur
        </p>
      </div>

      <div className="chef__sign">
        <p>Kevin Luo</p>
        <p className="p__opensans">Chef & Fouder</p>
        <img src={images.sign} alt="sign" />
      </div>
    </div>
  </div>
)

export default Chef
