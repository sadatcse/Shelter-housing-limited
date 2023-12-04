import React from 'react';
import Core from '../Section/Homepage/Core';
import Banner from '../Section/Homepage/Banner';
import Upcoming from '../Section/Homepage/Upcoming';
import Stat from '../Section/Homepage/Stat';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Upcoming></Upcoming>
            <Core></Core>
            <Stat></Stat>
        </div>
    );
};

export default Home;