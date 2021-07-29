import React from 'react'
import { ICard } from './Card.d'
import './Card.scss'
const Card: React.FC<ICard> = ({ content, image, title, points }) => {
  return (
    <div className="card">
      <div className="card__wrapper">
        <div className="card__img">
          <img src={image} alt="card" />
        </div>
        <div className="card__content">
          <div className="card__content__title">
            <p>{title}</p>
          </div>
          <div className="card__content__description">
            <p>{content}</p>
          </div>
          <div className="card__content__points">
            <p>{points} pts</p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Card
