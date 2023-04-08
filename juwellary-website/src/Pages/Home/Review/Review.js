import React from 'react';

import Slider from "react-slick";
import './Review.css';

const reviews = [{ name: "Marry queenn", img: "https://th.bing.com/th/id/R.d22bece93393c5ba3402b145c1a338d5?rik=Bu1c3sv9ielK0w&riu=http%3a%2f%2f1.bp.blogspot.com%2f-DT3FkonsqY8%2fU6179nHA6PI%2fAAAAAAAALnA%2fuEcADFSZz5U%2fs1600%2fcute-and-beautiful-girls-wallpapers-058.jpg&ehk=LuVFBOScUePmWqFwS2pm1ulri5XRN%2fxQu3LNQXlIXso%3d&risl=&pid=ImgRaw&r=0" }, { name: "Jessika Arlond", img: "https://th.bing.com/th/id/OIP.R2Y4JcUTdgztFwPUhSFOnAHaK3?pid=ImgDet&rs=1" }, { name: "Melinda Jhones", img: "https://th.bing.com/th/id/OIP.aUBWaCDAYPiAwmq6aamJTwHaHa?w=185&h=185&c=7&r=0&o=5&pid=1.7" }, { name: "Sohana Kabir", img: "https://th.bing.com/th/id/R.32377f6f2b5069201b345e083a6afaee?rik=N5EM0ZMIl%2b3U0g&pid=ImgRaw&r=0" }];
const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
};


const Review = () => {
    return (
        <div class='p-5 m-5 text-center'>
            <h1 class="p-5 text-5xl text-center">What Our Customer Says</h1>
            <Slider {...settings}>
                {
                    reviews.map(r => (
                        <div class="p-10 review ">

                            <img src={r.img} class="w-24 img" alt="" />
                            <h3 class="font-bold">{r.name}</h3>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis porro ipsam ab dicta nulla? Perspiciatis voluptate reprehenderit exercitationem veniam? Obcaecati?</p>
                        </div>
                    ))
                }


            </Slider>
        </div>
    );
};

export default Review;