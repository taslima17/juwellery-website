import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
    const [service, setService] = useState([]);
    const { id } = useParams();
    useEffect(() => {
        fetch('/product.json')
            .then(res => res.json()).then(data => setService(data))
    }, [])
    const currentService = service.find(s => s.id === id);
    return (
        <div>
            <div class="productBanner">
                <h1>Our Products / {currentService?.name}</h1>
            </div>
            <div class='flex justify-center  items-center mt-8'>
                <div class="p-5 w-1/3"><img src={currentService?.img_url} className="w-50 mx-auto p-lg-5 img-fluid" alt="" /></div>
                <div class="p-5">
                    <h5 class="font-sans italic text-2xl font-bold">{currentService?.name}</h5>
                    <p class="py-3"><span class="font-bold"> Price: </span> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;    {currentService?.price}</p>
                    <p class="py-3"><span class="font-bold"> Availability: </span>      &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  Available</p>
                    <p class="py-3"><span class="font-bold"> Category: </span> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;       {currentService?.category}</p>
                    <p class="py-3"><span class="font-bold"> Size: </span> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  S </p>
                    <p class="py-3"><span class="font-bold"> Material: </span> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;       Gold</p>

                    <div class="m-auto"><button class="rounded my-8 border bg-slate-950 font-semibold text-slate-50 px-16 py-4">Add to cart</button></div>

                </div>


            </div>
            <div class="text center">
                <h1 class=" py-8  text-3xl text-center">Product Details</h1>
                <p class="w-1/2 text-center m-auto">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus similique iure hic dignissimos quaerat consequatur qui quo numquam incidunt saepe distinctio ea, tenetur ipsa cupiditate, soluta autem reiciendis! Eum, est. Laudantium ut, architecto, harum qui non numquam fugit ipsa quae, facilis placeat odit nemo similique quod deserunt dolore magni.</p>
            </div>
        </div>
    );
};

export default ProductDetails;