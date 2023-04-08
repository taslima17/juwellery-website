import React from 'react';
import './Contact.css'
const ContactForm = () => {
    return (
        <div class="p-8">
            <div class="ContactForm text-center ">
                <h1 class="p-3 text-3xl">Call Us or Send Us a Message</h1>
                <p class="p-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                <div class="grid grid-cols-2 shadow-lg">
                    <div class="bg-gray-950 ">
                        <h1 class="text-2xl p-5 mt-8">Contact our customer service.</h1>
                        <p class="p-5"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                        <h4 class="p-5 text-3xl text-red-300">+6221.2002.2012</h4>
                        <h6 class="mt-5 italic font-bold">Business Hour</h6>
                        <p>
                            Monday - Friday (10.00 AM - 04.00 PM) <br />
                            Saturday - Sunday ( Close)</p>
                    </div>
                    <div>
                        <form class="shadow-lg text-left bg-zinc-50 p-8" action="">
                            <div class="grid gird-cols-2">
                                <label for="fname">First Name</label>
                                <input type="text" id="fname" name="firstname" placeholder="FirstName" />

                                <label for="lname">Last Name</label>
                                <input type="text" id="lname" name="lastname" placeholder="LastName" />
                            </div>
                            <label htmlFor="Email">Email</label>
                            <input type="email" name="Email" id="Email" placeholder='Email' />
                            <label htmlFor="subject">Subject</label>
                            <input type="text" placeholder='Subject' />

                            <label for="message">Message</label>
                            <textarea id="message" name="message" placeholder="Write something.." ></textarea>

                            <input type="submit" value="Submit" />

                        </form>

                    </div>
                </div>

            </div></div>
    );
};

export default ContactForm;