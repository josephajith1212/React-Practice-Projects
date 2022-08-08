import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index, setIndex] = useState(0)
  const {name, job, image, text} = people[index]
  const nextPerson = () => {
    setIndex(
      index===people.length-1? 0 : index+1
    )
  }
  const prevPerson = () => {
    setIndex(
      index === 0 ? people.length - 1 : index - 1
    )
  }
  const randomPerson = () => {
    let randNum = Math.floor(Math.random() * people.length)
    if (randNum === index) randNum += 1
    if (randNum > people.length-1) randNum = 0
    console.log(randNum)
    setIndex(randNum)
  }
  return (
    <article className='review'>
      <div className="img-container">
        <img src={image} alt={name} className='person-img'/>
        <span className='quote-icon'>
          <FaQuoteRight />
        </span>
      </div>
      <h4 className='author'>{name}</h4>
      <p className='job'>{job}</p>
      <p className='info'>{text}</p>
      <div className='button-container'>
        <button className='prev-btn' onClick={prevPerson}>
          <FaChevronLeft />
        </button>
        <button className='next-btn' onClick={nextPerson}>
          <FaChevronRight />
        </button>
      </div>
      <button className='random-btn' onClick={randomPerson}>
        surprise me
      </button>
    </article>
  )
};

export default Review;
