import InternetServiceComp from '@/components/ServicesComp/InternetServiceComp/InternetServiceComp';
import SubBannerComp from '@/components/SubBannerComp/SubBannerComp';
import { SITE_URL } from '@/config/siteConfig';

const InternetService = async () => {
    
    const res = await fetch(`${SITE_URL}/api/internet-service`, {
        cache:'no-store'
    })

    const { internetServiceData } = await res.json()

    // sub page banner component content 
    const mainTitle = 'Internet Service'

    return (
        <main>
            <SubBannerComp mainTitle={mainTitle} />
            <div className="bg-[url('/img/bg/BGLine-01.webp')] bg-cover bg-no-repeat bg-top pt-20">
                <InternetServiceComp internetServiceData={internetServiceData} />
            </div>
        </main>
    );
};

export default InternetService;