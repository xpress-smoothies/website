import React from 'react';

import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import config from '../config/index.json';

const Reviews = () => {
  const { reviews } = config;
  const { title, subtitle, reviewList } = reviews;

  return (
    <section
      className={`bg-background py-8 text-center max-w-95vw`}
      id="reviews"
    >
      <div className={`py-12 bg-background`}>
        <div className="max-w-95vw mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2
              className={`text-base text-primary font-semibold tracking-wide uppercase leading-15`}
            >
              {title}
            </h2>
            <p className="mt-2 mb-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              {subtitle}
            </p>
            {/* <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            {description}
          </p> */}
          </div>

          <Carousel
            emulateTouch={true}
            autoPlay={true}
            interval={4000}
            infiniteLoop={true}
          >
            {reviewList.map((review, index) => {
              return (
                <div key={index} className="mx-auto">
                  {/* review img */}

                  <div className="sm:hidden">
                    <img src={review.imgPathS} />
                  </div>

                  <div className="hidden sm:inline-flex">
                    <img src={review.imgPathM} />
                  </div>
                  {/* <img src={review.imgPath} className='md:w-3/4 lg:w-1/2' /> */}

                  {/* view on Google Maps btn */}
                  <div className="mx-auto mb-4 w-1/2 md:w-1/3 lg:w-1/6">
                    <a href={review.link} className="flex">
                      <img
                        src="/assets/images/read-review-on-maps-btn.png"
                        className="flex"
                      />
                    </a>
                  </div>

                  {/* Spacers */}
                  <br />
                  <div className="w-full my-4 h-4">
                    <p></p>
                  </div>
                </div>
              );
            })}
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
