
import React from 'react';
import Services from '../../Home/Services/Services';
import Banner from '../Banner/Banner';
import Review from '../Review/Review';
import ChooseUs from '../ChooseUs/ChooseUs';
import Footer from '../Footer/Footer';



const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Review></Review>
            <ChooseUs></ChooseUs>
            <Footer></Footer>
        </div>
    );
};

export default Home;