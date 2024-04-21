/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */

const A2pSMSComp = () => {
    return (
        <section className="py-20">
            <div className="grid grid-cols-2 items-center max-w-screen-xl mx-auto">
                <div className="px-3">
                    <div className="bg-indigo-300 bg-opacity-30 backdrop-blur-sm border-2 border-indigo-300 p-8 rounded-md">
                        <h2 className="text-3xl font-bold mb-4 text-theme">A2P SMS Solutions</h2>
                        <p className="text-justify mb-4">
                            A2P SMS Service: Communication is key in any business operation, and our A2P (Application-to-Person) SMS service provides a robust platform for businesses to engage with their stakeholders effectively. Whether it's sending notifications, alerts, or promotional messages, our A2P SMS service offers reliability, scalability, and unparalleled reach, enabling businesses to stay connected with their audience at all times.
                        </p>
                        <ul className=" list-inside list-[disclosure-closed] marker:text-[#f37022] space-y-2">
                            <li>Reliable Connections, Seamless Communication</li>
                            <li>A2P SMS Solutions Tailored for Success</li>
                            <li>Streamlined Communication Solutions for A2p SMS service</li>
                        </ul>
                    </div>
                </div>
                <div className="px-3">
                    <img loading='lazy' className='mx-auto' src="/img/solutions/A2PMessaging.webp" alt="choose" />
                </div>
            </div>
        </section>
    );
};

export default A2pSMSComp;