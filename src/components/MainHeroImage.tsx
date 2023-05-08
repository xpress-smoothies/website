import React from 'react';

import { Carousel } from 'react-responsive-carousel';

import config from '../config/index.json';

const MainHeroImage = () => {
  const { mainHero } = config;

  function carousel() {
    return (
      <Carousel
        emulateTouch={true}
        autoPlay={true}
        interval={4000}
        infiniteLoop={true}
      >
        {mainHero.heroImages.map((heroImg, index) => {
          return (
            <div key={index} className="mx-auto overflow-hidden">
              <div className="md:hidden">
                <img
                  className="h-1/2 w-full object-cover lg:w-full lg:h-full"
                  src={heroImg.imgPathS}
                  alt={heroImg.altText}
                />
              </div>

              <div className="hidden md:inline-flex">
                <img src={heroImg.imgPathM} alt={heroImg.altText} />
              </div>
            </div>
          );
        })}
      </Carousel>
    );
  }

  function carouselBig() {
    return (
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 hidden md:block overflow-hidden">
        {carousel()}
      </div>
    );
  }

  function carouselSmall() {
    return (
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 md:hidden overflow-hidden">
        <div className="h-1/2 w-full object-cover md:h-96 lg:w-full lg:h-full overflow-hidden">
          {carousel()}
        </div>
      </div>
    );
  }

  return (
    <>
      {carouselBig()}
      {carouselSmall()}
    </>
  );
};

export default MainHeroImage;
