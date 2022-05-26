import React from 'react';
import image from '../../assets/images/16700234_1806684386266672_7586328481787826858_o.jpg'

const MyPortfolio = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <img src={image} alt="" className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">Abdullah Sabit Shafe</h1>
      <p className="py-6">Junior Frontend Developer.
      Bsc in CSE.
      </p>
      <p >EMAIL : abdullahsabit32@gmail.com</p>
      <p >Projects Link</p>
      <a href="https://sports-gear-warehouse-5e15c.web.app/"><p className="text-bold text-primary">Sports Gear warehouse </p></a>
      <a href="https://visa-consultant-2f7c5.web.app/"><p className="text-bold text-primary">Visa Consultancy Services</p></a>
      <a href="https://proudct-review-shafe.netlify.app/"><p className="text-bold text-primary">Product Review app</p></a>
     <a href="https://drive.google.com/file/d/14D-aGN6mLgvn20P35YlxF5jA8pmKQwnp/view" > <button  className="btn btn-primary mt-5">My resume</button></a> 
    </div>
  </div>
</div>
    );
};

export default MyPortfolio;