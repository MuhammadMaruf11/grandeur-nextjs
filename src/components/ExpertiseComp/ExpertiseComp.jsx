/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */

const ExpertiseComp = () => {
    return (
        <section className="px-3">
            <div className="grid lg:grid-cols-2 items-center max-w-screen-xl mx-auto">
                <div className="order-2 lg:order-1">
                    <div className="bg-indigo-300 bg-opacity-30 backdrop-blur-sm border-2 border-indigo-300 p-4 rounded-md">
                        <h2 className="lg:text-3xl text-2xl font-bold mb-4 text-theme">Our Expertise</h2>
                        <p className="text-justify lg:text-base text-sm">
                            WiFi Settings in Labor Camps: Navigating the complexities of connectivity in labor camps requires specialized knowledge and experience. At Grandeur Technologies, we excel in designing, implementing, and optimizing WiFi networks specifically tailored to the unique requirements of labor camp environments. Our solutions ensure seamless connectivity, high performance, and reliable coverage, empowering businesses to operate efficiently and effectively.
                            <br /><br />
                            A2P SMS Service: Communication is key in any business operation, and our A2P (Application-to-Person) SMS service provides a robust platform for businesses to engage with their stakeholders effectively. Whether it's sending notifications, alerts, or promotional messages, our A2P SMS service offers reliability, scalability, and unparalleled reach, enabling businesses to stay connected with their audience at all times.
                            <br /><br />
                            Software Development: In the ever-evolving landscape of technology, custom software solutions are essential for businesses to stay ahead of the curve. At Grandeur Technologies LLC, we specialize in developing tailor-made software applications that address the specific needs and challenges of our clients. From enterprise-level solutions to mobile applications, our team of experienced developers delivers robust, scalable, and innovative software solutions that drive business growth and success.
                        </p>
                    </div>
                </div>
                <div className="order-1 lg:order-2">
                    <img loading="lazy" className='mx-auto' src="/img/about/our-expertise.webp" alt="expertise" />
                </div>
            </div>
        </section>
    );
};

export default ExpertiseComp;