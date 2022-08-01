import './Header.css'

import { images } from '../../constants'
import { SubHeading } from '../../components'

const Header = () => (
  <div className="header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Chase the new flavor" />
      <h1 className="header-h1">The key to fine dining</h1>
      <p className="p__opensans" style={{ margin: '2rem 0' }}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil fugit
        aliquam amet alias! Rem, aliquid? Exercitationem architecto magni
        accusantium error ullam quasi voluptatibus, harum ipsum. Aut
        exercitationem odio illo sit?
      </p>
      <button type="button" className="custom__button">
        Explore menu
      </button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.welcome} alt="" />
    </div>
  </div>
)

export default Header
