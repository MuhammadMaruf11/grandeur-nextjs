/* eslint-disable @next/next/no-img-element */
import React from 'react';

const MissionComp = () => {
    return (
        <section className="py-10">
            <div className="grid grid-cols-2 items-center max-w-screen-xl mx-auto">
                <div className="px-3">
                    <img className='w-1/2 mx-auto ' src="/img/about/our-mission.png" alt="mission" />
                </div>
                <div className="px-3">
                    <div className="bg-indigo-300 bg-opacity-30 backdrop-blur-sm border-2 border-indigo-300 p-8 rounded-md">
                        <h2 className="text-3xl font-bold mb-4 text-theme">Our Mission</h2>
                        <p className="text-justify">
                            At Grandeur Technologies LLC, our mission is to empower businesses operating in labor camps with cutting-edge technological solutions that enhance connectivity, communication, and efficiency. We are committed to leveraging our expertise to bridge the digital divide and foster innovation in even the most challenging environments.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MissionComp;