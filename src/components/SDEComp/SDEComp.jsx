/* eslint-disable @next/next/no-img-element */

const SDEComp = () => {
    return (
        <section className="">
            <div className="grid grid-cols-2 items-center max-w-screen-xl mx-auto">
                <div className="px-3">
                    <img loading='lazy' className='mx-auto' src="/img/solutions/software-development.webp" alt="choose" />
                </div>
                <div className="px-3">
                    <div className="bg-indigo-300 bg-opacity-30 backdrop-blur-sm border-2 border-indigo-300 p-8 rounded-md">
                        <h2 className="text-3xl font-bold mb-4 text-theme">Software Development</h2>
                        <p className='text-justify mb-4'>
                            Software Development: In the ever-evolving landscape of technology, custom software solutions are essential for businesses to stay ahead of the curve. At Grandeur Technologies LLC , we specialize in developing tailor-made software applications that address the specific needs and challenges of our clients. From enterprise-level solutions to mobile applications, our team of experienced developers delivers robust, scalable, and innovative software solutions that drive business growth and success.
                        </p>
                        <ul className=" list-[disclosure-closed] marker:text-[#f37022] list-inside space-y-2">
                            <li>Elevating Businesses Through Custom Software Solutions</li>
                            <li>Elevating Ideas, Powering Progress: Your Vision, Our Code</li>
                            <li>Elevating Possibilities, One Line of Code at a Time</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SDEComp;