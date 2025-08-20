import Image from "next/image";

const ChooseComp = () => {
    return (
        <section className="py-20 px-3">
            <div className="grid gap-6 lg:grid-cols-2 items-center max-w-screen-xl mx-auto">
                <div className="">
                    <Image width={615} height={410} className='mx-auto' src="/img/about/choose-us.webp" alt="choose" />
                </div>
                <div className="">
                    <div className="bg-indigo-300 bg-opacity-30 backdrop-blur-sm border-2 border-indigo-300 md:p-8 p-4 rounded-md">
                        <h2 className="lg:text-3xl text-2xl font-bold mb-4 text-theme">Why Choose Grandeur Technologies LLC</h2>
                        <ul className="lg:text-base text-sm list-[disclosure-closed] text-justify marker:text-[#f37022] list-inside space-y-2">
                            <li className="">Local Expertise: With a deep understanding of the local market and regulatory landscape, we are uniquely positioned to cater to the needs of businesses operating in labor camps across the UAE.</li>
                            <li className="">Innovative Solutions: We are committed to staying at the forefront of technological innovation, continually exploring new technologies and methodologies to deliver cutting-edge solutions that drive business success.</li>
                            <li className="">Customer-Centric Approach: Our clients are our top priority, and we go above and beyond to understand their needs, provide personalized solutions, and ensure their satisfaction at every step of the journey.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ChooseComp;