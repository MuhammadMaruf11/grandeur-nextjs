/* eslint-disable @next/next/no-img-element */

const WifiSolutionComp = () => {
    return (
        <section className="">
            <div className="grid grid-cols-2 items-center max-w-screen-xl mx-auto">
                <div className="px-3">
                    <img loading='lazy' className='mx-auto' src="/img/solutions/wifi-solutions.webp" alt="choose" />
                </div>
                <div className="px-3">
                    <div className="bg-indigo-300 bg-opacity-30 backdrop-blur-sm border-2 border-indigo-300 p-8 rounded-md">
                        <h2 className="text-3xl font-bold mb-4 text-theme">WiFi Solutions for Labor Camps</h2>
                        <p className='text-justify mb-4'>
                            WiFi Settings in Labor Camps: Navigating the complexities of connectivity in labor camps requires specialized knowledge and experience. At Grandeur Technologies, we excel in designing, implementing, and optimizing WiFi networks specifically tailored to the unique requirements of labor camp environments. Our solutions ensure seamless connectivity, high performance, and reliable coverage, empowering businesses to operate efficiently and effectively.
                        </p>
                        <ul className=" list-[disclosure-closed] marker:text-[#f37022] list-inside space-y-2">
                            <li className="">Empowering Labor Camps with Seamless Connectivity.</li>
                            <li className="">Empowering Labor Camps with WiFi Connectivity</li>
                            <li className="">Empowering Connectivity, Transforming Labor Camps</li>
                            <li className="">WiFi Solutions for Labor Camps</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WifiSolutionComp;