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
            <img src={currentService?.img_url} className="w-50 mx-auto p-lg-5 img-fluid" alt="" />
            <div className="p-lg-5">
                <h5>{currentService?.name}</h5>
                <p>{currentService?.price}</p>
            </div>
        </div>
    );
};

export default ProductDetails;