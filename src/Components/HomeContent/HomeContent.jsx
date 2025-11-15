import React from 'react';
import Slider from '../../slider/slider';
import HowItWork from '../HowItWork/HowItWork';
import LatestCrops from '../Crops/LatestCrops';
import Blog from '../Blog/Blog';
import Success from '../extra2/Success';
import Partners from '../extra2/Partner';

const HomeContent = () => {
  return (
    <div>
      <section>
        <Slider />
      </section>
      <section className="max-w-[1440px] mx-auto px-4">
        <LatestCrops />
      </section>
      <section className="max-w-[1440px] mx-auto px-4">
        <HowItWork />
      </section>
      <section>
        <Blog />
      </section>
      <section>
        <Success/>
      </section>
      <section>
        <Partners/>
      </section>
    </div>
  );
};

export default HomeContent;