import React from 'react';
import Banner from './Banner';
import Products from './Products';
import Reviews from './Reviews';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Reviews></Reviews>
            <Products></Products>

        </div>
    );
};

export default Home;