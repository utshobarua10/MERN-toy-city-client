import React from 'react';
import Banner from '../Banner/Banner';
import Categories from '../Categories/Categories';
import Trending from '../../Trending/Trending';
import Question from '../../Question/Question';

const LandingPage = () => {
    return (
        <div>
            <Banner></Banner>
            <Categories></Categories>
            <Trending></Trending>
            <Question></Question>
        </div>
    );
};

export default LandingPage;