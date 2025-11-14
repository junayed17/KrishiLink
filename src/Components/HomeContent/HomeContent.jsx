import React from 'react';
import Slider from '../../slider/slider';
import HowItWork from '../HowItWork/HowItWork';
import LatestCrops from '../Crops/LatestCrops';
import Blog from '../Blog/Blog';

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
    </div>
  );
};

export default HomeContent;