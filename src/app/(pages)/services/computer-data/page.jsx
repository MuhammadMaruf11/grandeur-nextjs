import DataProcessingComp from '@/components/ServicesComp/DataProcessingComp/DataProcessingComp';
import SubBannerComp from '@/components/SubBannerComp/SubBannerComp';
import { SITE_URL } from '@/config/siteConfig';

const ComputerData = async() => {

    const res = await fetch(`${SITE_URL}/api/data-processing`, {
        cache:'no-store'
    })

    const { dataProcessingData } = await res.json()
 
    // sub page banner component content 
    const mainTitle = 'Computer & Data Processing'

    return (
        <main>
            <SubBannerComp mainTitle={mainTitle} />
            <div className="bg-[url('/img/bg/BGLine-01.webp')] bg-cover bg-no-repeat bg-top pt-20">
                <DataProcessingComp dataProcessingData={dataProcessingData} />
            </div>
        </main>
    );
};

export default ComputerData;