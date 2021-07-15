import React from 'react';
import web from '../../src/Images/algo_t_comp.png';
import Common from './Common.jsx';

const About = () => {
    return (
        <>
            <Common 
                name='Education'
                description="Our Members Have the Opportunity to Learn the Theory and Skills Needed to be Strong Candidates for the Industry"
                imgsrc={web}
                visit='/blog'
                btname="Our Blog"
                />
        </>
    );
};
export default About;