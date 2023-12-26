import React from 'react';
import { Link } from 'react-router-dom';
import './SlideShow.scss';

const SlideShow = () => {
  const carouselList = [
    {
      id: 1,
      imageUrl: './assets/images/carousel-summer-discount-image.webp',
      offerText: 'Same Day Delivery!',
      offerInfo: 'There are Plenty of Sales in the Sea, But This One is a Real Treasure',
      buttonText: 'Browse 1000+ Products',
      dataTestId: 'browseProductBtn'
    },
    {
      id: 2,
      imageUrl: './assets/images/carousel-summer-offer-image.webp',
      offerText: 'UP TO 50% OFF',
      offerInfo: 'BIGGEST DEALS ON TOP BRANDS YOU CAN SAVE UP TO 50% ',
      buttonText: 'Get 50% OFF',
      dataTestId: 'getOfferBtn'
    },
    {
      id: 3,
      imageUrl: './assets/images/carousel-summer-sale-image.webp',
      offerText: 'SUMMER SALE',
      offerInfo: 'Cashback* When you purchase Louis Philippe Brand Shirt',
      buttonText: 'Get 100% Cashback',
      dataTestId: 'cashbackBtn'
    }
  ];
  return (
    <div id='carouselExampleCaptions' className='carousel slide' data-bs-ride='false'>
      <div className='carousel-indicators'>
        <button
          type='button'
          data-bs-target='#carouselExampleCaptions'
          data-bs-slide-to={0}
          className='active'
          aria-current='true'
          aria-label='Slide 1'
        />
        <button
          type='button'
          data-bs-target='#carouselExampleCaptions'
          data-bs-slide-to={1}
          aria-label='Slide 2'
        />
        <button
          type='button'
          data-bs-target='#carouselExampleCaptions'
          data-bs-slide-to={2}
          aria-label='Slide 3'
        />
      </div>

      <div className='carousel-inner mt-5'>
        {carouselList.map((carousel) => {
          return (
            <div className='carousel-item  discount-background active' key={carousel.id}>
              <img
                src={carousel.imageUrl}
                className='d-block discount-image '
                alt='summer-discount-image'
              />
              <div className='carousel-caption d-none d-md-block discount-title'>
                <h5 className='discount-info offer-text'>{carousel.offerText}</h5>
                <p className='discount-info offer-info'>{carousel.offerInfo}</p>
                <button
                  className='glow-on-hover discount-info shadow'
                  type='button'
                  data-testid={carousel.dataTestId}>
                  <Link to='/products' className='text-white'>
                    {carousel.buttonText}
                  </Link>
                </button>
              </div>
            </div>
          );
        })}
      </div>

      <button
        className='carousel-control-prev'
        type='button'
        data-bs-target='#carouselExampleCaptions'
        data-bs-slide='prev'>
        <span className='carousel-control-prev-icon' aria-hidden='true' />
        <span className='visually-hidden'>Previous</span>
      </button>
      <button
        className='carousel-control-next'
        type='button'
        data-bs-target='#carouselExampleCaptions'
        data-bs-slide='next'>
        <span className='carousel-control-next-icon' aria-hidden='true' />
        <span className='visually-hidden'>Next</span>
      </button>
    </div>
  );
};

export default SlideShow;
