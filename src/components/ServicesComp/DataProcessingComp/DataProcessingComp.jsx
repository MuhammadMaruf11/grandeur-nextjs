/* eslint-disable @next/next/no-img-element */
import SectionHeader from "@/components/SectionHeader/SectionHeader";
import { wholesaleData } from "@/allData/wholesaleData";
import { dataProcessingData } from "@/allData/dataProcessingData";

const DataProcessingComp = () => {

    const simpleText = `Computer &  `;
    const textTheme = `Data Processing Requisites Trading.`;
    const description = `Granduer is a licensed and authorized distributor of a wide range of computer and data processing equipment and supplies.`;

    return (
        <section className=" bg-cover bg-no-repeat bg-top pb-20">
            <div className="max-w-7xl mx-auto px-3">
                <>
                    <SectionHeader simpleText={simpleText} textTheme={textTheme} description={description} />
                </>
                <>
                    <div className="grid grid-cols-1 bg-indigo-300 bg-opacity-30 backdrop-blur-sm border border-indigo-300 rounded-md">
                        {dataProcessingData?.map((detail, index) => {
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
                                    <div className="border lg:text-base text-sm border-indigo-300 p-4">
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

export default DataProcessingComp;