import Image from "next/image";

const WifiSolutionComp = () => {
    return (
        <section id="wifi" className="px-3">
            <div className="grid lg:grid-cols-2 gap-6 items-center max-w-screen-xl mx-auto">
                <div className="">
                    <Image width={445} height={420} className='mx-auto' src="/img/solutions/wifi-solutions.webp" alt="choose" />
                </div>
                <div className="">
                    <div className="bg-indigo-300 bg-opacity-30 backdrop-blur-sm border-2 border-indigo-300 md:p-8 p-4 rounded-md">
                        <h2 className="lg:text-3xl md:text-2xl font-bold mb-4 text-theme">WiFi Solutions for Labor Camps</h2>
                        <p className='text-justify mb-4  lg:text-base text-sm'>
                            WiFi Settings in Labor Camps: Navigating the complexities of connectivity in labor camps requires specialized knowledge and experience. At Grandeur Technologies, we excel in designing, implementing, and optimizing WiFi networks specifically tailored to the unique requirements of labor camp environments. Our solutions ensure seamless connectivity, high performance, and reliable coverage, empowering businesses to operate efficiently and effectively.
                        </p>
                        <ul className=" list-[disclosure-closed] lg:text-base text-sm marker:text-[#f37022] list-inside space-y-2">
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