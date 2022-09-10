import React from 'react';
import Search from '../../components/Search/Search';
import Section from './Section';
import Cards from '../../components/Cards/Cards';
import Video from '../../components/Video/Video';
import Layout from "../../components/HOC/Layout";

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

export default Layout(HomePage);