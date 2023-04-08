import React from 'react';

const Map = () => {
    return (
        <div class="grid grid-cols-2 p-8 ">
            <div class="pl-8 pt-8 ">
                <h1 class="text-5xl text-slate-500 px-5 pt-8">Need Help for business inquiries?</h1>
                <p class="px-5 py-2">Tell us about your business challenges and we’ll get back to you soon.</p>
                <p class=""><h1 class="italic px-5 py-2 text-xl font-bold">Head office</h1>
                    <p class="px-5 text-lg">Jln cempaka Wangi No 22, Jakarta - Indonesia</p>
                </p>
                <p class=""><h1 class="italic px-5 py-2 text-xl font-bold">Email Us</h1>
                    <p class="px-5 text-lg">support@domain.tld</p>
                </p>

            </div>
            <div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d253840.65295108253!2d106.68942934652101!3d-6.229386698647731!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3e945e34b9d%3A0x5371bf0fdad786a2!2sJakarta%2C%20Indonesia!5e0!3m2!1sen!2sbd!4v1680878625742!5m2!1sen!2sbd"
                    width="600"
                    height="450"
                    style={{ border: "0" }}
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    );
};

export default Map;