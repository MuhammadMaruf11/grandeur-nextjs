'use client';
import Link from "next/link";
import SectionHeader from "../SectionHeader/SectionHeader";
import { servicesData } from "@/allData/servicesData";
import { usePathname } from "next/navigation";


const ServicesComp = () => {

    const pathname = usePathname();

    const filterDatas = pathname === "/" ? servicesData?.slice(0, 3) : servicesData;

    const textWhite = `Our Services done by professionals`;
    const textTheme = `to solve your packets challenges.`;
    const description = `We provide to notch internet services with professional hands. We not only think about present security but also it’s future. Future security is our first priority.`;

    return (
        <section className="bg-[url('/img/bg/BGLine-01.svg')] bg-cover bg-no-repeat bg-top py-20">
            <div className="max-w-7xl mx-auto px-3">
                <>
                    <SectionHeader textWhite={textWhite} textTheme={textTheme} description={description} />
                </>
                <>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14">
                        {filterDatas?.map((data, index) => {
                            const { icon, title, description, url } = data;
                            return (
                                <div key={index} className=" bg-indigo-300 bg-opacity-30 backdrop-blur-sm border-2 border-indigo-300 flex flex-col items-center gap-4 text-center px-7 rounded-md transition-all ease-linear py-14 hover:shadow-2xl">
                                    <div className="bg-white bg-opacity-50 border-2 border-indigo-300 p-3 mb-3 rounded-md text-4xl">
                                        <i className={icon}></i>
                                    </div>
                                    <h3 className="text-xl text-theme font-bold">{title}</h3>
                                    <p className="text-xm">{description}</p>
                                    <Link className="border border-theme text-theme hover:bg-theme hover:text-white transition-all ease-linear px-3 py-2" href={url}>More Details <i className="fa-regular fa-arrow-up-right ms-1"></i></Link>
                                </div>
                            )
                        })}
                    </div>
                    {pathname === '/' && <div className="text-center mt-12">
                        <Link className="rounded-tl-3xl rounded-br-3xl border border-theme text-theme  hover:bg-theme hover:text-white transition-all ease-linear p-4" href='/services'>Explore Our Servies</Link>
                    </div>}
                </>
            </div>
        </section>
    );
};

export default ServicesComp;