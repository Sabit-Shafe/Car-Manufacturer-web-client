import React from 'react';
import Banner from './Banner';
import BussinessSum from './BussinessSum';
import CountDown from './CountDown';
import NewsLetter from './NewsLetter';
import Products from './Products';
import Reviews from './Reviews';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <BussinessSum></BussinessSum>
            <Reviews></Reviews>
            <CountDown></CountDown>
            <Products></Products>
            <NewsLetter/>

        </div>
    );
};

export default Home;