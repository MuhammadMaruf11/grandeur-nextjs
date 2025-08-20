import CloudServiceComp from '@/components/ServicesComp/CloudServiceComp/CloudServiceComp';
import SubBannerComp from '@/components/SubBannerComp/SubBannerComp';
import { SITE_URL } from '@/config/siteConfig';

const InternetService = async() => {

    const res = await fetch(`${SITE_URL}/api/cloud-services`, {
        cache:'no-store'
    })

    const { cloudServiceData } = await res.json()

    // sub page banner component content 
    const mainTitle = 'Cloud & Datacenters'

    return (
        <main>
            <SubBannerComp mainTitle={mainTitle} />
            <div className="bg-[url('/img/bg/BGLine-01.webp')] bg-cover bg-no-repeat bg-top pt-20">
                <CloudServiceComp cloudServiceData={cloudServiceData} />
            </div>
        </main>
    );
};

export default InternetService;