import Image from "next/image";

const MissionComp = () => {
    return (
        <section className="px-3">
            <div className="grid lg:grid-cols-2 gap-6 items-center max-w-screen-xl mx-auto">
                <div className=" order-2 lg:order-1">
                    <div className="bg-indigo-300 bg-opacity-30 backdrop-blur-sm border-2 border-indigo-300 md:p-8 p-4 rounded-md">
                        <h2 className="lg:text-3xl text-2xl font-bold mb-4 text-theme">Our Mission</h2>
                        <p className="text-justify lg:text-base text-sm">
                            At Grandeur Technologies LLC, our mission is to empower businesses operating in labor camps with cutting-edge technological solutions that enhance connectivity, communication, and efficiency. We are committed to leveraging our expertise to bridge the digital divide and foster innovation in even the most challenging environments.
                        </p>
                    </div>
                </div>
                <div className="order-1 lg:order-2">
                    <Image width={623} height={286} className='mx-auto' src="/img/about/our-mission.webp" alt="mission" />
                </div>
            </div>
        </section>
    );
};

export default MissionComp;