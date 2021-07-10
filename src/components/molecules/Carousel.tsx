import React, { DragEvent } from 'react'
import './Carousel.scss'
import { ICarousel } from './Carousel.d'
import 'react-alice-carousel/lib/alice-carousel.css'
import AliceCarousel from 'react-alice-carousel'

const Carousel: React.FC<ICarousel> = ({ id, images }) => {
  const responsive = {
    0: { items: 1 },
    1024: { items: 1, paddingRight: 0 },
  }
  const handleOnDragStart = (e: DragEvent<HTMLImageElement>) =>
    e.preventDefault()

  const renderItems = (items: string[]) => {
    return items.map((item, index) => (
      <div
        key={`${id}-${index}`}
        className={`item carousel-item carousel-item-${index}`}
        data-value={index + 1}
      >
        <img
          onDragStart={handleOnDragStart}
          src={item}
          alt={`carousel item ${index}`}
        />
      </div>
    ))
  }
  return (
    <AliceCarousel
      mouseTracking
      responsive={responsive}
      items={renderItems(images)}
      paddingRight={20}
      disableDotsControls={true}
      disableButtonsControls={true}
    />
  )
}
export default Carousel
