import React from 'react';
import image1 from '../../assets/images/auto-parts-1.png'

const Banner = () => {
    return (
        <div class="hero min-h-screen bg-base-200">
  <div class="hero-content flex-col lg:flex-row-reverse">
    <img class="h-60" src={image1}  alt=""/>
    <div>
      <h1 class="text-5xl font-bold">Car Mania</h1>
      <p class="py-6">Perfect auto car parts and better quality</p>
      <button class="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
    );
};

export default Banner;