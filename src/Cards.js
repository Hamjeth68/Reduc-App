import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>What is sustainableiq.co.uk ?</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/turtle.jpg'
              path='/services'
            />
            <p>
              Sustainbleiq is a key initiative that allows us to work towards our vision of seeing a world free of plastic
              waste. Sustainableiq enables Southeast Asian companies to set ambitious packaging strategies and
              reduce plastic waste.
              We work towards finding ways to use less plastic, promote better packaging, and contribute to a better
              system. We focus on providing solutions, with inclusivity of people, ideas, visions, and approaches.
              Working as a team and with our industry peers, we strive to build strong partnerships through honest
              relationships and communications. Sustainbleiq helps companies understand the environmental and
              economic implications of their plastic packaging choices in a dynamic way,
              We believe that small changes add up to a big difference. We hope to inspire others to find value in
              nature, to live more sustainably and with purpose.
            </p>
          </ul>
          <h2 className='heading-two'>
            How can we help you?</h2>
          <ul className='cards__items'>
            <p>
              <li>
                Getting rid of plastics from your business’ everyday practices can make a huge impact, and it’s
                easy to do with a few small changes.
              </li>
              <li>
                Whether you’re a beginner looking for a few single-use plastics to avoid, or someone well on
                their way to a plastic free life, we have ideas to inspire you at home, work, school, and within the
                community. Check out our resources below and get inspired.
              </li>
              <li>
                Our goal is to prevent plastic waste by improving the plastic packaging circularity journey.
              </li>
            </p>
            <CardItem
              src='images/card-img.jpg'

              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'

              path='/services'
            />
            <CardItem
              src='images/img-4.jpg'

              path='/products'
            />
            <CardItem
              src='images/img-8.jpg'

              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
