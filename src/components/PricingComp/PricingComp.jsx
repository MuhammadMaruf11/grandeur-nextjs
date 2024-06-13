import Link from "next/link";
import SectionHeader from "../SectionHeader/SectionHeader";

export const PricingComp = () => {

    const simpleText = 'Transparent pricing.'
    const textTheme = 'Pay as you grow.'
    const description = ` Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque rem aperiam, eaque ipsa quae. Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium.`

    return (
        <section className="bg-indigo-300 bg-opacity-30 backdrop-blur-sm py-20">
            <div className="px-3 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl xl:max-w-screen-2xl">
                <SectionHeader simpleText={simpleText} textTheme={textTheme} description={description} />
                <div className="grid text-white md:gap-12 gap-3 row-gap-5 lg:max-w-screen-lg sm:row-gap-10 xl:grid-cols-4 md:grid-cols-2 xl:max-w-screen-2xl sm:mx-auto">
                    <div className="flex flex-col justify-between p-8 transition-all duration-300 bg-indigo-950  rounded shadow-sm sm:items-center hover:shadow-2xl hover:shadow-indigo-950">
                        <div className="text-center">
                            <div className="text-lg text-white font-semibold">Personal Starter</div>
                            <div className="flex items-end justify-center mt-2">
                                <div className="mr-1 text-theme-2 text-5xl font-bold">$15</div>
                                <div className="mb-1">/ mo</div>
                            </div>
                            <div className="">25 Mbps Speed</div>
                            <ul className="mt-2 space-y-3 text-start list-inside list-[disclosure-closed] marker:text-[#f37022]">
                                <li className="">Free Instalation</li>
                                <li className="">Free 1 Month Trial</li>
                                <li className="">Call Support</li>
                                <li className="">Free 2 Mbps Bonus</li>
                                <li className="">500+ GB FUP</li>
                            </ul>
                        </div>
                        <div>
                            <Link
                                href="/"
                                className="inline-flex items-center justify-center w-full h-12 px-6 mt-6 font-medium tracking-wide text-white transition duration-200 bg-theme rounded shadow-md hover:bg-theme-2 focus:shadow-outline focus:outline-none"
                            >
                                Order Package
                            </Link>
                            <p className="max-w-xs mt-6 text-xs  sm:text-sm sm:text-center sm:max-w-sm sm:mx-auto">
                                Sed ut unde omnis iste natus accusantium doloremque.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col justify-between p-8 transition-all duration-300 bg-indigo-950  rounded shadow-sm sm:items-center hover:shadow-2xl hover:shadow-indigo-950">
                        <div className="text-center">
                            <div className="text-lg text-white font-semibold">Personal Medium</div>
                            <div className="flex items-end justify-center mt-2">
                                <div className="mr-1 text-theme-2 text-5xl font-bold">$25</div>
                                <div className="mb-1">/ mo</div>
                            </div>
                            <div className="">50 Mbps Speed</div>
                            <ul className="mt-2 space-y-3 text-start list-inside list-[disclosure-closed] marker:text-[#f37022]">
                                <li className="">Free Instalation</li>
                                <li className="">Free 1 Month Trial</li>
                                <li className="">Call Support</li>
                                <li className="">Free 2 Mbps Bonus</li>
                                <li className="">500+ GB FUP</li>
                            </ul>
                        </div>
                        <div>
                            <Link
                                href="/"
                                className="inline-flex items-center justify-center w-full h-12 px-6 mt-6 font-medium tracking-wide text-white transition duration-200 bg-theme rounded shadow-md hover:bg-theme-2 focus:shadow-outline focus:outline-none"
                            >
                                Order Package
                            </Link>
                            <p className="max-w-xs mt-6 text-xs  sm:text-sm sm:text-center sm:max-w-sm sm:mx-auto">
                                Sed ut unde omnis iste natus accusantium doloremque.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col justify-between p-8 transition-all duration-300 bg-indigo-950  rounded shadow-sm sm:items-center hover:shadow-2xl hover:shadow-indigo-950">
                        <div className="text-center">
                            <div className="text-lg text-white font-semibold">Business Starter</div>
                            <div className="flex items-end justify-center mt-2">
                                <div className="mr-1 text-theme-2 text-5xl font-bold">$75</div>
                                <div className="mb-1">/ mo</div>
                            </div>
                            <div className="">150 Mbps Speed</div>
                            <ul className="mt-2 space-y-3 text-start list-inside list-[disclosure-closed] marker:text-[#f37022]">
                                <li className="">Free Instalation</li>
                                <li className="">Free 1 Month Trial</li>
                                <li className="">Call Support</li>
                                <li className="">Free 2 Mbps Bonus</li>
                                <li className="">500+ GB FUP</li>
                            </ul>
                        </div>
                        <div>
                            <Link
                                href="/"
                                className="inline-flex items-center justify-center w-full h-12 px-6 mt-6 font-medium tracking-wide text-white transition duration-200 bg-theme rounded shadow-md hover:bg-theme-2 focus:shadow-outline focus:outline-none"
                            >
                                Order Package
                            </Link>
                            <p className="max-w-xs mt-6 text-xs  sm:text-sm sm:text-center sm:max-w-sm sm:mx-auto">
                                Sed ut unde omnis iste natus accusantium doloremque.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col justify-between p-8 transition-all duration-300 bg-indigo-950  rounded shadow-sm sm:items-center hover:shadow-2xl hover:shadow-indigo-950">
                        <div className="text-center">
                            <div className="text-lg text-white font-semibold">Corporate Basic</div>
                            <div className="flex items-end justify-center mt-2">
                                <div className="mr-1 text-theme-2 text-5xl font-bold">$250</div>
                                <div className="mb-1">/ mo</div>
                            </div>
                            <div className="">500 Mbps Speed</div>
                            <ul className="mt-2 space-y-3 text-start list-inside list-[disclosure-closed] marker:text-[#f37022]">
                                <li className="">Free Instalation</li>
                                <li className="">Free 1 Month Trial</li>
                                <li className="">Call Support</li>
                                <li className="">Free 2 Mbps Bonus</li>
                                <li className="">500+ GB FUP</li>
                            </ul>
                        </div>
                        <div>
                            <Link
                                href="/"
                                className="inline-flex items-center justify-center w-full h-12 px-6 mt-6 font-medium tracking-wide text-white transition duration-200 bg-theme rounded shadow-md hover:bg-theme-2 focus:shadow-outline focus:outline-none"
                            >
                                Order Package
                            </Link>
                            <p className="max-w-xs mt-6 text-xs  sm:text-sm sm:text-center sm:max-w-sm sm:mx-auto">
                                Sed ut unde omnis iste natus accusantium doloremque.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};