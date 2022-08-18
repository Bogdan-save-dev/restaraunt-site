import React from 'react'
import { images, data } from '../../constants'
import {
  BsInstagram,
  BsArrowLeftShort,
  BsArrowRightShort,
} from 'react-icons/bs'
import SubHeading from './../../components/SubHeading/SubHeading'
import './Gallery.css'

const imagesArr = [
  images.gallery01,
  images.gallery02,
  images.gallery03,
  images.gallery04,
]

const Gallery = () => {
  const scrollRef = React.useRef(null)

  const scroll = (direction) => {
    const { current } = scrollRef

    if (direction === 'left') {
      current.scrollLeft -= 300
    } else {
      current.scrollLeft += 300
    }
  }

  return (
    <div className="gallery flex__center">
      <div className="gallery__content">
        <SubHeading title="Instagram" />
        <h1 className="headtext__cormorant">Photo Gallery</h1>
        <p className="p__opensans" style={{ color: '#aaa', marginTop: '2rem' }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
          cupiditate magnam modi aut qui, sapiente rem ea itaque magni
        </p>
        <button type="button" className="custom__button">
          ViewMore
        </button>
      </div>

      <div className="gallery__images">
        <div className="gallery__images_container" ref={scrollRef}>
          {imagesArr.map((image, idx) => (
            <div
              key={image + idx}
              className="gallery__imaages-card flex__center"
            >
              <img src={image} alt="gallery image" />
              <BsInstagram className="gallery__image-icon" />
            </div>
          ))}
        </div>
        <div className="gallery__images_arrows">
          <BsArrowLeftShort
            className="gallery__arrow-icon"
            onClick={() => scroll('left')}
          />
          <BsArrowRightShort
            className="gallery__arrow-icon"
            onClick={() => scroll('right')}
          />
        </div>
      </div>
    </div>
  )
}

export default Gallery
