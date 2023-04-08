import React from 'react';

const collection = [{
    name: "Ladies diamond Breslate",
    img: "https://d1e0b1m7y2tal1.cloudfront.net/catalog/product/images/14k-gold-designer-ladies-diamond-bracelet-710ct-p-6298_ye.jpg",
    price: "230$",
    details: "Lorem, ipsum dolor sit amet consectetur adipisicing elit."
}, {
    name: "Tiered Diamond Sapphire Necklace",
    img: "https://i.pinimg.com/originals/5f/8a/3a/5f8a3abb7500f6761094d142c39e310b.jpg",
    price: "300$",
    details: "Lorem, ipsum dolor sit amet consectetur adipisicing elit."
},
{
    name: "Hoop Earring",
    img: "https://images.designtrends.com/wp-content/uploads/2016/10/12110350/diamond-hoop-earrings-design.jpg",
    price: "300$",
    details: "Lorem, ipsum dolor sit amet consectetur adipisicing elit."
},
{
    name: "Diamond Stone Nosepin",
    img: "https://images.bonanzastatic.com/afu/images/3ece/9657/bf96_8449868967/s-l1600.jpg",
    price: "90$",
    details: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. "
}

];

const BestCollections = () => {
    return (
        <div class='p-3'>
            <h1 class="p-5 text-5xl text-center">Our New Arrivals</h1>
            <div class="grid grid-cols-4 gap-4 p-5">
                {
                    collection.map(c => (
                        <div class="shadow-lg text-center p-5">

                            <img src={c.img} class="p-10" alt="" />
                            <h6>{c.name}</h6>
                            <p class="text-red-800 font-bold"> Price: {c.price}</p>
                            <p class="text-slate-900">{c.details}</p>
                        </div>
                    ))


                }
            </div>

        </div>
    );
};

export default BestCollections;