/* eslint-disable @next/next/no-img-element */
import { computerSystemData } from "@/allData/computerSystemData";
import SectionHeader from "@/components/SectionHeader/SectionHeader";

const ComputerSystemComp = () => {

    const simpleText = `Computer Systems &  `;
    const textTheme = `Communication Equipment Software Trading.`;
    const description = `We provide to notch internet services with professional hands. We not only think about present security but also it’s future. Future security is our first priority.`;

    return (
        <section className=" bg-cover bg-no-repeat bg-top pb-20">
            <div className="max-w-7xl mx-auto px-3">
                <>
                    <SectionHeader simpleText={simpleText} textTheme={textTheme} description={description} />
                </>
                <>
                    <div className="grid grid-cols-1 bg-indigo-300 bg-opacity-30 backdrop-blur-sm border border-indigo-300 rounded-md">
                        {computerSystemData?.map((detail, index) => {
                            return (
                                <details key={index} className="group">
                                    <summary className="flex items-center justify-between p-4 list-none border border-indigo-300 cursor-pointer">
                                        {detail?.title && <h4 className="text-base uppercase font-medium">
                                            {" "}
                                            {detail.title}
                                        </h4>}
                                        <span className="transition group-open:rotate-180">
                                            <i className="fa-sharp fa-solid fa-chevron-down"></i>
                                        </span>
                                    </summary>
                                    <div className="border border-indigo-300 p-4">
                                        {detail?.content && <p className="mb-3">{detail?.content}</p>}
                                        <ul className=" list-[disclosure-closed] marker:text-[#f37022] list-inside space-y-2">
                                            {detail?.descriptions.map((listItem, index) => {
                                                return (
                                                    <li className="" key={index}>{listItem}</li>
                                                )
                                            })}
                                        </ul>
                                    </div>
                                </details>
                            )
                        })}
                    </div>
                </>
            </div>
        </section>
    );
};

export default ComputerSystemComp;