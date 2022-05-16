import React from 'react';
import Banner from './Banner';
import ExceptionalService from './ExceptionalService';
import Info from './Info';
import MakeAppointment from './MakeAppointment';
import Services from './Services';
import Testimonials from './Testimonials';

const Home = () => {
    return (
        <section className='px-12'>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <ExceptionalService></ExceptionalService>
            <MakeAppointment></MakeAppointment>
            <Testimonials></Testimonials>
        </section>
    );
};

export default Home;