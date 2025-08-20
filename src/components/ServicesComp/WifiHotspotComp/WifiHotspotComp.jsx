import SectionHeader from "@/components/SectionHeader/SectionHeader";

const WifiHotspotComp = ({ wifiHotspotData }) => {

    const simpleText = `WIFI Internet `;
    const textTheme = `Service Agreement.`;
    const description = `We provide to notch internet services with professional hands. We not only think about present security but also it’s future. Future security is our first priority.`;

    return (
        <section className=" bg-cover bg-no-repeat bg-top pb-20">
            <div className="max-w-7xl mx-auto px-3">
                <>
                    <SectionHeader simpleText={simpleText} textTheme={textTheme} description={description} />
                </>
                <>
                    <div className="grid grid-cols-1 bg-indigo-300 bg-opacity-30 backdrop-blur-sm border border-indigo-300 rounded-md">
                        {wifiHotspotData?.map((detail, index) => {
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
                                    <ul className="border lg:text-base text-sm border-indigo-300 p-4 list-[disclosure-closed] marker:text-[#f37022] list-inside space-y-2">
                                        {detail?.descriptions.map((listItem, index) => {
                                            return (
                                                <li className="" key={index}>{listItem}</li>
                                            )
                                        })}
                                    </ul>
                                </details>
                            )
                        })}
                    </div>
                </>
            </div>
        </section>
    );
};

export default WifiHotspotComp;