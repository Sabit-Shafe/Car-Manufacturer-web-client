import React from 'react';
import Banner from './Banner';
import BussinessSum from './BussinessSum';
import CountDown from './CountDown';
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
            <CountDown></CountDown>
            <Products></Products>
            <Supports></Supports>
            <NewsLetter/>

        </div>
    );
};

export default Home;