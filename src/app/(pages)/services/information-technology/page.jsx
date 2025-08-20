import ITServiceNetworkComp from '@/components/ServicesComp/ITServiceNetworkComp/ITServiceNetworkComp';
import SubBannerComp from '@/components/SubBannerComp/SubBannerComp';
import { SITE_URL } from '@/config/siteConfig';

const InternetService = async () => {
    
    const res = await fetch(`${SITE_URL}/api/it-network`, {
        cache:'no-store'
    })

    const { itNetworkServiceData } = await res.json()

    // sub page banner component content 
    const mainTitle = 'IT Service Network'

    return (
        <main>
            <SubBannerComp mainTitle={mainTitle} />
            <div className="bg-[url('/img/bg/BGLine-01.webp')] bg-cover bg-no-repeat bg-top pt-20">
                <ITServiceNetworkComp itNetworkServiceData={itNetworkServiceData} />
            </div>
        </main>
    );
};

export default InternetService;