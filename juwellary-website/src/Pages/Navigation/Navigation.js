import React from 'react';
import { Link } from 'react-router-dom'
import './Navigation.css'


const Navigation = () => {
    return (
        <div class="text-white items-center flex flex-row justify-around h-14 bg-gradient-to-r from-stone-800 to-stone-950">
            <div>
                <h6 class='logo text-2xl'> Royal Diamond</h6>
            </div>
            <div class="text-sm font-bold">
                <Link to="/home" class="p-5 link">Home</Link>
                <Link to="/about" class="p-5 link">About</Link>
                <Link to="/contact" class="p-5 link">Contact</Link>
                <Link to="/products" class="p-5 link">Products</Link>

            </div>

            <div class="icons">
                <i className="fab fa-facebook-f"></i>
                <i className="fab fa-twitter"></i>
                <i className="fab fa-linkedin-in"></i>
                <i className="fab fa-instagram"></i>
            </div>

        </div>
    );
};

export default Navigation;