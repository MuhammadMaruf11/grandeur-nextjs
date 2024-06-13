/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */

import SectionHeader from "../SectionHeader/SectionHeader";

const ContactUsComp = () => {

    const simpleText = `Get in touch to learn more about`
    const textTheme = `our ISP solutions and how we can help you.`
    const description = `We provide to notch internet services with professional hands. We not only think about present security but also it’s future. Future security is our first priority.`;

    return (
        <section className='px-3'>
            <SectionHeader simpleText={simpleText} textTheme={textTheme} description={description} />
            <div className="grid max-w-screen-xl items-center gap-6 mx-auto rounded-lg lg:grid-cols-2">
                <div className="">
                    <div className="space-y-2 text-center">
                        <h2 className="text-4xl font-bold leading-tight text-theme">Let's talk!</h2>
                        <p>Message us now to discuss your needs.</p>
                    </div>
                    <img src="/img/contact.webp" alt="" className="" />
                </div>
                <div className="w-full mx-auto  bg-indigo-300 bg-opacity-30 backdrop-blur-sm border-2 border-indigo-300 rounded-md md:p-14 p-5">
                    <form noValidate="" className="space-y-6">
                        <div>
                            <label htmlFor="name" className="text-sm">Full name</label>
                            <input id="name" type="text" placeholder="" className="mt-1 w-full p-3 rounded dark:bg-gray-100" />
                        </div>
                        <div>
                            <label htmlFor="email" className="text-sm">Email</label>
                            <input id="email" type="email" className="mt-1 w-full p-3 rounded dark:bg-gray-100" />
                        </div>
                        <div>
                            <label htmlFor="message" className="text-sm">Message</label>
                            <textarea id="message" rows="3" className="mt-1 w-full p-3 rounded dark:bg-gray-100"></textarea>
                        </div>
                        <button type="submit" className="border border-theme text-theme hover:bg-theme hover:text-white transition-all ease-linear px-3 py-2">Send Message</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactUsComp;