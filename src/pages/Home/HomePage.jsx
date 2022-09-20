import React from 'react';
import Search from '../../components/Search/Search';
import Cards from '../../components/Cards/Cards';
import Video from '../../components/Video/Video';
import Layout from "../../components/HOC/Layout";
import LastBlogs from '../../components/LastBlogs/LastBlogs';

const HomePage = () => {
    return (
        <div>
            <Search/>
            <LastBlogs/>
            <Video/>
            <Cards/>
        </div>
    );
};

export default Layout(HomePage);