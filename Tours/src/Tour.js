import React, { useState } from 'react';

const Tour = ({tour, removeTour}) => {
  const {image, info, price, name} = tour
  const [readmore, setReadmore] = useState(false)
  return (
    <article className='single-tour'>
      <img src={image} alt={name}/>
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className='tour-price'>${price}</h4>
        </div>
        <p>{readmore? info : `${info.slice(0, 200)}...`}</p>
        <button onClick={()=>{
          setReadmore((prevState)=>!prevState)
        }}>{readmore? 'Read less': 'Read more'}</button>
        <button className='delete-btn' onClick={() => removeTour(tour.id)}>Not interested</button>
      </footer>
    </article>
  )
};

export default Tour;
