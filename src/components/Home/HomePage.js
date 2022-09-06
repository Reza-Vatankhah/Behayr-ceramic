import React from 'react';
import Search from './Search';
import Section from './Section';
import Cards from './Cards';
import Video from './Video/Video';

const HomePage = () => {
    return (
        <div>
            <Search/>
            <Section/>
            <Video/>
            <Cards/>
        </div>
    );
};

export default HomePage;