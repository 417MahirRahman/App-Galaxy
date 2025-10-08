import React from 'react';
import Banner1 from '../../components/Banner/Banner1';
import Banner2 from '../../components/Banner/Banner2';
import { Outlet } from 'react-router';

const Home = () => {
    return (
        <div data-theme="light">
            
            <Banner1></Banner1>
            <Banner2></Banner2>
            <Outlet></Outlet>
            <h1>home</h1>
            
        </div>
    );
};

export default Home;