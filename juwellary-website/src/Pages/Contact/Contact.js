import React from 'react';
import ContactBanner from './ContactBanner';
import ContactForm from './ContactForm';
import Map from './Map';



const Contact = () => {
    return (
        <div>
            <ContactBanner></ContactBanner>
            <Map></Map>
            <ContactForm></ContactForm>
        </div>
    );
};

export default Contact;