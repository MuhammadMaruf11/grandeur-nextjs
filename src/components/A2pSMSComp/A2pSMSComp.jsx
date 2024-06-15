/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */

const A2pSMSComp = () => {
    return (
        <section id="sms" className="py-20 px-3">
            <div className="grid lg:grid-cols-2 gap-6 items-center max-w-screen-xl mx-auto">
                <div className="order-2 lg:order-1">
                    <div className="bg-indigo-300 bg-opacity-30 backdrop-blur-sm border-2 border-indigo-300 md:p-8 p-4 rounded-md">
                        <h2 className="lg:text-3xl text-2xl font-bold mb-4 text-theme">A2P SMS Solutions</h2>
                        <p className="text-justify mb-4 lg:text-base text-sm">
                            A2P SMS Service: Communication is key in any business operation, and our A2P (Application-to-Person) SMS service provides a robust platform for businesses to engage with their stakeholders effectively. Whether it's sending notifications, alerts, or promotional messages, our A2P SMS service offers reliability, scalability, and unparalleled reach, enabling businesses to stay connected with their audience at all times.
                        </p>
                        <ul className=" list-inside lg:text-base text-sm list-[disclosure-closed] marker:text-[#f37022] space-y-2">
                            <li>Reliable Connections, Seamless Communication</li>
                            <li>A2P SMS Solutions Tailored for Success</li>
                            <li>Streamlined Communication Solutions for A2p SMS service</li>
                        </ul>
                    </div>
                </div>
                <div className="order-1 lg:order-2">
                    <img loading='lazy' className='mx-auto' src="/img/solutions/A2PMessaging.webp" alt="choose" />
                </div>
            </div>
        </section>
    );
};

export default A2pSMSComp;