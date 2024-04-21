/* eslint-disable @next/next/no-img-element */
import SectionHeader from '../SectionHeader/SectionHeader';
import Link from 'next/link';
import { solutionsData } from '@/allData/solutionsData';

const SolutionsComp = () => {

    const simpleText = `Our Network Solutions`;
    const textTheme = `to solve your packets challenges.`;
    const description = `We provide to notch internet services with professional hands. We not only think about present security but also it’s future. Future security is our first priority.`;

    return (
        <section className=" bg-cover bg-no-repeat bg-top pt-20">
            <div className="max-w-7xl mx-auto px-3">
                <>
                    <SectionHeader simpleText={simpleText} textTheme={textTheme} description={description} />
                </>
                <>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14">
                        {solutionsData?.map((data, index) => {
                            const { icon, title, description, url } = data;
                            return (
                                <div key={index} className=" bg-indigo-300 bg-opacity-30 backdrop-blur-sm border-2 border-indigo-300 flex flex-col items-center gap-4 text-center px-7 rounded-md transition-all ease-linear py-14 hover:shadow-2xl">
                                    <div className="bg-white bg-opacity-50 border-2 border-indigo-300 p-3 mb-3 rounded-md text-4xl">
                                        <img loading="lazy" className="w-8" src={icon} alt="icons" />
                                    </div>
                                    <h3 className="text-xl text-theme font-bold">{title}</h3>
                                    <p className="text-xm">{description}</p>
                                    <Link className="border border-theme text-theme hover:bg-theme hover:text-white transition-all ease-linear px-3 py-2" href={url}>More Details <i className="fa-regular fa-arrow-up-right ms-1"></i></Link>
                                </div>
                            )
                        })}
                    </div>
                </>
            </div>
        </section>
    );
};

export default SolutionsComp;