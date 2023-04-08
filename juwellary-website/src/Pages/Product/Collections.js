import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
const Collections = () => {

    const [collection, setCollection] = useState([]);
    useEffect(() => {
        fetch('/product.json')
            .then(res => res.json()).then(data => setCollection(data))
    }, []);
    const navigate = useNavigate();
    const handleDetails = (collection) => {
        const id = collection.id;
        const url = `/product/${id}`;
        console.log(url)
        navigate(url);
    }
    return (
        <div class="grid grid-cols-4 gap-4">
            <div class="">
                <h1>Categories</h1>
            </div>
            <div class="col-span-3">

                <div class="grid grid-cols-3">

                    {
                        collection.map(p => <div key={p.id}>
                            <img src={p.img_url} style={{ width: "50%" }} alt="" />
                            <h1>{p.name}</h1>
                            <p>{p.price}</p>
                            <button onClick={() => handleDetails(p)}>View More</button>


                        </div>)
                    }
                </div>
            </div>

        </div>
    );
};

export default Collections;