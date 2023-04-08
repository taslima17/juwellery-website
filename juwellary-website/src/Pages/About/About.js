import React from 'react';
import AboutBanner from './AboutBanner/AboutBanner';
import WhyUs from './AboutBanner/WhyUs';
import OurHistory from './OurHistory/OurHistory';

const About = () => {
    return (
        <div>
            <AboutBanner></AboutBanner>
            <WhyUs></WhyUs>
            <OurHistory></OurHistory>
        </div>
    );
};

export default About;