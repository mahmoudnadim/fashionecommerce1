import React from 'react'
import { FaStar,FaRegStar } from 'react-icons/fa'

export default function Rating({rating}) {
  return (
    <div className="ratingStars flex gap-1">
      {[...Array(5)].map((_, i) =>
        i < rating ? <FaStar className='ratingStar' key={i} /> : <FaRegStar className='ratingStar' key={i} />
      )}
    </div>
  )
}
