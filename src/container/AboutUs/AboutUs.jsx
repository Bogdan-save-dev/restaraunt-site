import { images } from '../../constants'

import './AboutUs.css'

const AboutUs = () => (
  <div className="aboutus app__bg flex__center section__padding" id="about">
    <div className="aboutus-overlay flex__center">
      <img src={images.G} alt="g letter" />
    </div>
    aboutus
    <div className="aboutus__content flex__center">
      <div className="aboutus__content-about">
        <h1 className="headtext__cormorant">About us</h1>
        <img src={images.spoon} alt="spoon image" className="spoon__img" />
        <p className="p__opensans">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit ut
          expedita magnam maiores nemo quaerat omnis repellendus odio voluptate,
        </p>
        <button type="button" className="custom__button">
          Know more
        </button>
      </div>

      <div className="aboutus__content-knife flex__center">
        <img src={images.knife} alt="about_knife" />
      </div>

      <div className="aboutus__content-history">
        <h1 className="headtext__cormorant">Our History</h1>
        <img src={images.spoon} alt="spoon image" className="spoon__img" />
        <p className="p__opensans">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit ut
          expedita magnam maiores nemo quaerat omnis repellendus odio voluptate,
        </p>
        <button type="button" className="custom__button">
          Know more
        </button>
      </div>
    </div>
  </div>
)

export default AboutUs
