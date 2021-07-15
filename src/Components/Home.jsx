import React from 'react';
import web from '../../src/Images/Vector_Logo-min.jpg';
import Common from './Common';

const Home = () => {
    return (
        <>
           <Common 
               name='Welcome to QUANTT'
               description="Tomorrow's Talent in Capital Markets"
               imgsrc={web}
               visit='/about'
               btname="Learn More"
           />
        </>
    );
};
export default Home;