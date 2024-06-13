import React from 'react';
import SectionHeader from '../SectionHeader/SectionHeader';

const RequestConnectionComp = () => {

    const simpleText = `Internet Service Provider`
    const textTheme = `Contact Form.`
    const description = `We provide to notch internet services with professional hands. We not only think about present security but also it’s future. Future security is our first priority.`;
    return (
        <section>
            <SectionHeader simpleText={simpleText} textTheme={textTheme} description={description} />
            <div className='max-w-5xl mx-auto'>
                <div className="w-full mx-auto  bg-indigo-300 bg-opacity-30 backdrop-blur-sm border-2 border-indigo-300 rounded-md p-14">
                    <form noValidate="">
                        <div className="grid grid-cols-2 gap-6 mb-6">
                            <div className=''>
                                <label htmlFor="fname" className="text-sm">First Name <span className='text-red-500'>*</span></label>
                                <input id="fname" type="text" placeholder="Ex: John" className="w-full mt-2 p-3 rounded dark:bg-gray-100" required />
                            </div>
                            <div className=''>
                                <label htmlFor="lname" className="text-sm">Last name <span className='text-red-500'>*</span></label>
                                <input id="lname" type="text" placeholder="Ex: Doe" className="w-full mt-2 p-3 rounded dark:bg-gray-100" required />
                            </div>
                            <div className=''>
                                <label htmlFor="number" className="text-sm">Phone Number <span className='text-red-500'>*</span></label>
                                <input id="number" type="text" placeholder="Ex: +xxx1234567890" className="w-full mt-2 p-3 rounded dark:bg-gray-100" required />
                            </div>
                            <div className=''>
                                <label htmlFor="email" className="text-sm">Email <span className='text-red-500'>*</span></label>
                                <input id="email" type="email" placeholder="Ex: example@gmail.com" className="w-full mt-2 p-3 rounded dark:bg-gray-100" required />
                            </div>
                        </div>
                        <div className='mb-6'>
                            <label htmlFor="address" className="text-sm">Address <span className='text-red-500'>*</span></label>
                            <input id="address" type="text" placeholder="Ex: E-9/6 China Town, Naya Paltan, Dhaka-1000" className="w-full mt-2 p-3 rounded dark:bg-gray-100" required />
                        </div>
                        <div className='mb-6'>
                            <label htmlFor="addressLink" className="text-sm">Address Link <span className='text-green-500'>(Optional)</span></label>
                            <input id="addressLink" type="text" placeholder="Ex: https://maps.app.goo.gl/LBXZ38H6CEqeYnr98" className="w-full mt-2 p-3 rounded dark:bg-gray-100" />
                        </div>
                        <div className='mb-6'>
                            <label htmlFor="message" className="text-sm">Message <span className='text-green-500'>(Optional)</span></label>
                            <textarea id="message" rows="3" placeholder="Ex: Ask anything or write something what do you want to know!" className="w-full mt-2 p-3 rounded dark:bg-gray-100"></textarea>
                        </div>
                        <button type="submit" className="border border-theme text-theme hover:bg-theme hover:text-white transition-all ease-linear px-3 py-2">Send Message</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default RequestConnectionComp;