import React from 'react';
import Banner from './Banner/Banner';
import Discount from './Discount/Discount';
import Offer from './Discount/Offer';
import BestCollections from './PopularProducts/BestCollections';
import Review from './Review/Review';
import Shop from './ShopAddress/Shop';
<link rel="stylesheet" href="https://rsms.me/inter/inter.css"></link>
const Home = () => {
    return (
        <div className='justify-center'>
            <Banner></Banner>
            <BestCollections></BestCollections>
            <Discount></Discount>
            <Review></Review>
            <Shop></Shop>
            <Offer></Offer>
        </div>
    );
};

export default Home;