import React, { useState } from 'react';
import './index.css';
import { TiStarFullOutline } from 'react-icons/ti';

const StarRating = ({ id, value, onChangeRating = () => {} }) => {
  const [rating, setRating] = useState(value);
  const [hover, setHover] = useState(0);
  return (
    <div className="star-rating">
      {[...Array(5)].map((star, index) => {
        index += 1;
        return (
          <button
            type="button"
            id={id}
            key={index}
            className={index <= (hover || rating || value) ? 'on' : 'off'}
            onClick={() => {
              if (!value) {
                setRating(index);
                onChangeRating(index);
              }
            }}
            onMouseEnter={() => {
              if (!value) {
                setHover(index);
              }
            }}
            onMouseLeave={() => {
              if (!value) {
                setHover(rating);
              }
            }}
            disabled={value}
          >
            <TiStarFullOutline className="star" />
          </button>
        );
      })}
    </div>
  );
};
export default StarRating;
