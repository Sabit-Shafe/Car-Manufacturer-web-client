import React from 'react';
import image1 from '../../assets/images/auto-parts-1.png'

const Banner = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img className="h-60" src={image1}  alt=""/>
    <div>
      <h1 className="text-5xl font-bold">Car Mania</h1>
      <p className="py-6">Perfect auto car parts and better quality</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
    );
};

export default Banner;