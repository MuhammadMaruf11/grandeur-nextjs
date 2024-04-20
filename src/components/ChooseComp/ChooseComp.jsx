/* eslint-disable @next/next/no-img-element */
import React from 'react';

const ChooseComp = () => {
    return (
        <section className="py-10 max-w-screen-xl mx-auto">
            <div className="grid grid-cols-2 items-center max-w-screen-xl mx-auto">
                <div className="px-3">
                    <img className='mx-auto' src="/img/about/choose-us.jpg" alt="choose" />
                </div>
                <div className="px-3">
                    <div className="bg-indigo-300 bg-opacity-30 backdrop-blur-sm border-2 border-indigo-300 p-4 rounded-md">
                        <h2 className="text-3xl font-bold mb-4">Why Choose Grandeur Technologies LLC</h2>
                        <ul className="list-disc list-inside">
                            <li className="mb-2">Local Expertise: With a deep understanding of the local market and regulatory landscape, we are uniquely positioned to cater to the needs of businesses operating in labor camps across the UAE.</li>
                            <li className="mb-2">Innovative Solutions: We are committed to staying at the forefront of technological innovation, continually exploring new technologies and methodologies to deliver cutting-edge solutions that drive business success.</li>
                            <li className="mb-2">Customer-Centric Approach: Our clients are our top priority, and we go above and beyond to understand their needs, provide personalized solutions, and ensure their satisfaction at every step of the journey.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ChooseComp;