import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'
const Footer = () => {
    return (
        <div class=" footer">
            <div class='grid grid-cols-3 '>
                <div >
                    <img src="https://cdn.shopify.com/s/files/1/0436/2610/2933/files/img-2_e4458b51-8daa-411b-af1b-e406123a24fc_500x_1_500x.jpg?v=1614289637" alt="" class="image" />
                </div>
                <div class="info p-5">
                    <p class=" p-4">If you have any queries reach us at <br /> <span class="text-amber-700 ">info@example.com</span> </p>
                    <p class="text-3xl p-4"> <span class="text-lg">(000)</span> 123-4567</p>
                    <p class="text-sm p-5">For proident, sunt in culpa qui officia deserunt mollit anim id est laborum officia anim</p>
                    <button class="bg-slate-100 rounded ms-5 text-slate-950 p-2">Contact Us</button>
                </div>
                <div class="social-media p-5 text-lg font-serif ml-8">
                    <p><i className="fab fa-facebook-f"></i>FaceBook</p>
                    <p><i className="fab fa-instagram"></i>Instagram</p>
                    <p>  <i className="fab fa-twitter"></i>Twitter</p>
                    <p>   <i className="fab fa-linkedin-in"></i>LinkedIn</p>
                </div>

            </div>
            <div class="mx-auto font-bold text-center py-8">
                <Link to="/home" class="p-5 link">Home</Link>
                <Link to="/about" class="p-5 link">About</Link>
                <Link to="/contact" class="p-5 link">Contact</Link>
                <Link to="/products" class="p-5 link">Products</Link>

            </div>
        </div>
    );
};

export default Footer;