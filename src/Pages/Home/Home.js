import React from 'react';
import Banner from './Banner';
import BussinessSum from './BussinessSum';
import NewsLetter from './NewsLetter';
import Products from './Products';
import Reviews from './Reviews';
import Supports from './Supports';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <BussinessSum></BussinessSum>
            <Reviews></Reviews>
            
            <Products></Products>
            <Supports></Supports>
            <NewsLetter/>

        </div>
    );
};

export default Home;