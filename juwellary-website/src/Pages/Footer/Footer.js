import React from 'react';
import './Footer.css'
const Footer = () => {
    return (
        <div class='grid grid-cols-3 bg-blue-950 footer'>
            <div >
                <img src="https://cdn.shopify.com/s/files/1/0436/2610/2933/files/img-2_e4458b51-8daa-411b-af1b-e406123a24fc_500x_1_500x.jpg?v=1614289637" alt="" class="image" />
            </div>
            <div class="info p-5">
                <p class="text-xl p-4">If you have any queries reach us <br /> <span class="text-amber-700 ">atinfo@example.com</span> </p>
                <p class="text-3xl p-2">  (000)123-4567</p>
                <p class="text-sm p-5">For proident, sunt in culpa qui officia deserunt mollit anim id est laborum officia anim</p>
                <button class="bg-slate-100 rounded ms-5 text-slate-950 p-2">Contact Us</button>
            </div>
            <div class="social-media p-5 text-xl ">
                <p>FaceBook</p>
                <p>Instagram</p>
                <p>Twitter</p>
            </div>


        </div>
    );
};

export default Footer;