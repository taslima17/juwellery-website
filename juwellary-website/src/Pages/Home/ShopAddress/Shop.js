import React from 'react';

const shops = [{ img: "https://demo.moxcreative.com/edel/wp-content/uploads/sites/47/2021/06/two-young-women-in-a-shop-looking-at-jewellery--e1624451979312.jpg", name: "Royal Edel JGC", place: "Jakarta, Indonesia" }, { img: "https://demo.moxcreative.com/edel/wp-content/uploads/sites/47/2021/06/blonde-jewelry-worker-presenting-a-beautiful-necklace-to-a-woman-in-a-jewelry-store-e1624452037505.jpg", name: "Royal Edel Illinois", place: "Illinois, Us America" }, { img: "https://demo.moxcreative.com/edel/wp-content/uploads/sites/47/2021/06/a-mature-woman-using-a-digital-tablet-using-the-touch-screen-stock-taking-in-a-small-gift-shop--e1624452005532.jpg", name: "Royal Edel Toronto", place: "Toronto, Canada" }, { img: "https://demo.moxcreative.com/edel/wp-content/uploads/sites/47/2021/06/elegantly-dressed-woman-makes-handmade-necklaces-working-with-needles-and-thread-in-workshop--e1624452054447.jpg", name: "Royal Edel Bonn", place: "Bonn, Germany" },]
const Shop = () => {
    return (
        <div class="p-5 text-center"><h1 class="text-5xl">New Opening Store</h1>
            <p class="p-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere culpa beatae quis vitae explicabo ex, excepturi eius non incidunt expedita soluta magni veritatis, sunt temporibus natus repellendus saepe voluptas provident!</p>

            <div class="grid grid-cols-2 p-5 m-auto">


                {
                    shops.map(s => (
                        <div class="grid grid-cols-2 p-5">
                            <div>
                                <img src={s.img} alt="" />

                            </div>

                            <div class="ps-5 bg-slate-700 text-slate-50 text-left">
                                <h2 class="p-2 italic font-bold">{s.place}</h2>
                                <h1 class="p-2 font-lg font-bold ">{s.name}</h1>

                                <p class="p-2 text-slate-400">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero obcaecati eveniet dolorem excepturi. Vel, praesentium?</p>
                                {/* <button class="border-2 p-3 m-2 rounded-3xl bg-red-800"> View on Map</button> */}
                            </div>

                        </div>
                    ))}





            </div>
        </div>
    );
};

export default Shop;