import React from 'react';
import web from '../../src/Images/algo_t_comp.png';
import Common from './Common.jsx';
import Timeline from './Timeline.jsx';
import womanImage from '../../src/Images/woman.png';
import "../sass/about.css";

const About = () => {
    return (
        <>
            <div className="common-section">
                <Common 
                    name='About'
                    description="Find Out More of What We Are All About"
                    imgsrc={web}
                    visit='/blog'
                    btname="Our Education"
                    />
            </div>
            <div className="about-section">
                <img src={womanImage}/>
                <h1>Closing the Gap</h1>
                <p>
                The Queen's University Algorithmic Network & Trading Team is Canada's premier Quant-Finance community with a key focus on education and professional development. Our goal is to bridge the gap between undergraduate academia and the Quantitative Finance industry.
                </p>
            </div>
            <div className="pillars-title">
                <h1>Three Pillars</h1>
            </div>
            <div className="pillars">
                <div className="pillar-first-section">
                    <h3>Collaboration</h3>
                    <p>Compounding returns begin with compounding relationships</p>
                    <img src="http://quantt.ca/wp-content/uploads/2020/07/coool.png" />
                </div>
                <div className="pillar-second-section">
                    <h3>Research</h3>
                    <p>The financial markets are continuously evolving, our work must evolve with it</p>
                    <img src="http://quantt.ca/wp-content/uploads/2020/07/austin-distel-wD1LRb9OeEo-unsplash.png" />
                </div>
                <div className="pillar-third-section">
                    <h3>Application</h3>
                    <p>A model must be usable in production, an idea must be grounded in reality</p>
                    <img src="http://quantt.ca/wp-content/uploads/2020/07/app.png" />
                </div>
            </div>
            <div className="timeline-title">
                <h1>Timeline</h1>
            </div>
            <Timeline />
        </>
    );
};
export default About;