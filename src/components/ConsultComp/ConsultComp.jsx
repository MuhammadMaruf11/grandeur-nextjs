import React from 'react';
import SectionHeader from '../SectionHeader/SectionHeader';
import Link from 'next/link';
import Image from 'next/image';

const ConsultComp = ({ consultationData }) => {
    const simpleText = `Our Consultation`
    const textTheme = `Team.`
    const description = `We provide to notch internet services with professional hands. We not only think about present security but also it’s future. Future security is our first priority.`;
    return (
        <section>
            <div className="xl:max-w-5xl lg:max-w-4xl mx-auto px-3">
                <>
                    <SectionHeader simpleText={simpleText} textTheme={textTheme} description={description} />
                </>
                <>
                    <div className="grid grid-cols-1 md:grid-cols-2  gap-3 xl:gap-38 lg:gap-12 ">
                        {consultationData?.map((data, index) => {
                            const { name, img, number1, number2, email, designation } = data;
                            return (
                                <div key={index}
                                    // onClick={() => handleScroll(url.split('=')[1])}
                                    className=" bg-indigo-300 bg-opacity-30 backdrop-blur-sm border-2 border-indigo-300 flex flex-col items-center text-center  rounded-md transition-all ease-linear hover:shadow-2xl">
                                    <div className="border-indigo-300 border-b-2 p-3 w-full">
                                        <Image width={300} height={300} className="rounded-full mx-auto w-2/3" src={img} alt="icons" />
                                    </div>
                                    <div className="p-4 space-y-1">
                                        <h3 className="text-2xl text-theme font-bold">{name}</h3>
                                        <p className="lg:text-lg font-bold">{designation}</p>
                                        <p className="lg:text-base text-sm">Mobile: {number1}</p>
                                        <p className="lg:text-base text-sm">Mobile: {number2}</p>
                                        <Link className="text-theme font-bold" href={`mailto:${email}`}>Email: {email}</Link>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </>
            </div>
        </section>
    );
};

export default ConsultComp;