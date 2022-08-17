import React from 'react'
import './Laurels.css'
import { images, data } from '../../constants'
import SubHeading from './../../components/SubHeading/SubHeading'
import AwardCard from './AwardCard'

const Laurels = () => (
  <div className="laurels app__bg app__wrapper section__padding" id="awards">
    <div className="app__wrapper_info">
      <SubHeading title="Awards & recognition" />
      <h1 className="headtext__cormorant">Our Laurels</h1>

      <div className="laurels__award">
        {data.awards.map((item, idx) => (
          <AwardCard key={item + idx} award={item} />
        ))}
      </div>
    </div>
    <div className="app__wrapper_img">
      <img src={images.laurels} alt="laurels" />
    </div>
  </div>
)

export default Laurels
