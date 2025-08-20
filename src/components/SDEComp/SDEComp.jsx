import Image from "next/image";

const SDEComp = () => {
    return (
        <section id="software" className="px-3">
            <div className="grid lg:grid-cols-2 gap-6 items-center max-w-screen-xl mx-auto">
                <div className="">
                    <Image width={628} height={430} className='mx-auto' src="/img/solutions/software-development.webp" alt="choose" />
                </div>
                <div className="">
                    <div className="bg-indigo-300 bg-opacity-30 backdrop-blur-sm border-2 border-indigo-300 md:p-8 p-4 rounded-md">
                        <h2 className="lg:text-3xl text-2xl font-bold mb-4 text-theme">Software Development</h2>
                        <p className='text-justify mb-4 lg:text-base text-sm'>
                            Software Development: In the ever-evolving landscape of technology, custom software solutions are essential for businesses to stay ahead of the curve. At Grandeur Technologies LLC , we specialize in developing tailor-made software applications that address the specific needs and challenges of our clients. From enterprise-level solutions to mobile applications, our team of experienced developers delivers robust, scalable, and innovative software solutions that drive business growth and success.
                        </p>
                        <ul className=" list-[disclosure-closed] lg:text-base text-sm marker:text-[#f37022] list-inside space-y-2">
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