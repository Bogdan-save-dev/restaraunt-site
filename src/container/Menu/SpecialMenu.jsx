import React from 'react'

import './SpecialMenu.css'
import { images, data } from '../../constants/index'
import { MenuItem, SubHeading } from '../../components'

const SpecialMenu = () => (
  <div id="menu" className="specialMenu flex__center section__padding">
    <div className="specialMenu__title">
      <SubHeading title="Menu thats fit your pleasure" />
      <h2 className="headtext__cormorant">Todays Special</h2>
    </div>

    <div className="specialMenu__menu">
      <div className="specialMenu__menu-wine flex__center">
        <p className="specialMenu__menu-heading">Wine & Beer</p>
        <div className="specialMenu__menu-items">
          {data.wines.map((wine, idx) => (
            <MenuItem
              key={wine.title + idx}
              tags={wine.tags}
              title={wine.title}
              price={wine.price}
            />
          ))}
        </div>
      </div>

      <div className="specialMenu__menu-img">
        <img src={images.menu} alt="Menu img" />
      </div>

      <div className="specialMenu__menu-cocktails flex__center">
        <p className="specialMenu__menu-heading">Cocktails</p>
        <div className="specialMenu__menu-items">
          {data.cocktails.map((cocktail, idx) => (
            <MenuItem
              key={cocktail.title + idx}
              tags={cocktail.tags}
              title={cocktail.title}
              price={cocktail.price}
            />
          ))}
        </div>
      </div>
    </div>

    <div style={{ marginTop: '15px' }}>
      <button type="button" className="custom__button">
        View More
      </button>
    </div>
  </div>
)

export default SpecialMenu
