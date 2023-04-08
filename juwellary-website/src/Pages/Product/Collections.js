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
    const [all, setAll] = useState(true);
    const [ring, setRing] = useState(false);
    const [bracelate, setBracelate] = useState(false);
    const [earring, setEarring] = useState(false);
    const [pendant, setPendant] = useState(false);

    const handleBracelet = () => {
        setAll(false);
        setRing(false);
        setBracelate(true);
        setEarring(false);
        setPendant(false);
    }
    const handleRing = () => {
        setAll(false);
        setRing(true);
        setBracelate(false);
        setEarring(false);
        setPendant(false);
    }
    const handleEarring = () => {
        setAll(false);
        setRing(false);
        setBracelate(false);
        setEarring(true);
        setPendant(false);
    }
    const handlePendant = () => {
        setAll(false);
        setRing(false);
        setBracelate(false);
        setEarring(false);
        setPendant(true);
    }
    const handleAll = () => {
        setAll(true);
        setRing(false);
        setBracelate(false);
        setEarring(false);
        setPendant(false);
    }

    return (
        <div class="grid grid-cols-4 gap-5 p-5">
            <div class=" text-center font-bold ">
                <h1 class="text-2xl border-b-4 p-5 italic border-slate-950">Categories</h1>
                <button class="p-3 m-4 italic" onClick={handleAll} >All</button> <hr />
                <button class="p-3 m-4 italic" onClick={handleBracelet} >Brecelet</button> <hr />
                <button class="p-3 m-4 italic" onClick={handleRing}>Ring</button><hr />
                <button class="p-3 m-4 italic" onClick={handleEarring}>Earring</button><hr />
                <button class="p-3 m-4 italic" onClick={handlePendant}>Pendant</button><hr />
            </div>
            <div class="col-span-3">

                <div class="grid grid-cols-3 p-3 gap-4 m-5">
                    {all && collection.map(p => <div class="rounded font-bold shadow-lg text-center m-4 " key={p.id}>
                        <img src={p.img_url} class="rounded" alt="" />
                        <h1 class="p-3">{p.name}</h1>
                        <p>{p.price}</p>
                        <button class="border p-2 rounded m-4" onClick={() => handleDetails(p)}>View More</button>


                    </div>)
                    }
                    {
                        bracelate && collection.filter(a => a.category === "Bracelet").map(p => <div class="rounded font-bold shadow-lg text-center m-4 " key={p.id}>
                            <img src={p.img_url} class="rounded" alt="" />
                            <h1 class="p-3">{p.name}</h1>
                            <p>{p.price}</p>
                            <button class="border p-2 rounded m-4" onClick={() => handleDetails(p)}>View More</button>


                        </div>)
                    }
                    {
                        ring && collection.filter(a => a.category === "Ring").map(p => <div class="rounded font-bold shadow-lg text-center m-4 " key={p.id}>
                            <img src={p.img_url} class="rounded" alt="" />
                            <h1 class="p-3">{p.name}</h1>
                            <p>{p.price}</p>
                            <button class="border p-2 rounded m-4" onClick={() => handleDetails(p)}>View More</button>


                        </div>)
                    }
                    {
                        pendant && collection.filter(a => a.category === "Pendant").map(p => <div class="rounded font-bold shadow-lg text-center m-4 " key={p.id}>
                            <img src={p.img_url} class="rounded" alt="" />
                            <h1 class="p-3">{p.name}</h1>
                            <p>{p.price}</p>
                            <button class="border p-2 rounded m-4" onClick={() => handleDetails(p)}>View More</button>


                        </div>)
                    }
                    {
                        earring && collection.filter(a => a.category === "Earring").map(p => <div class="rounded font-bold shadow-lg text-center m-4 " key={p.id}>
                            <img src={p.img_url} class="rounded" alt="" />
                            <h1 class="p-3">{p.name}</h1>
                            <p>{p.price}</p>
                            <button class="border p-2 rounded m-4" onClick={() => handleDetails(p)}>View More</button>


                        </div>)
                    }
                </div>
            </div>

        </div>
    );
};

export default Collections;