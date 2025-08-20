import MobilePhonesComp from '@/components/ServicesComp/MobilePhonesComp/MobilePhonesComp';
import SubBannerComp from '@/components/SubBannerComp/SubBannerComp';
import { SITE_URL } from '@/config/siteConfig';

const MobilePhones = async () => {

    const res = await fetch(`${SITE_URL}/api/mobile-phone`, {
        cache: 'no-store'
    })

    const { mobilePhonesData } = await res.json()

    // sub page banner component content 
    const mainTitle = 'Mobile Phones & Accessories Trading'

    return (
        <main>
            <SubBannerComp mainTitle={mainTitle} />
            <div className="bg-[url('/img/bg/BGLine-01.webp')] bg-cover bg-no-repeat bg-top pt-20">
                <MobilePhonesComp mobilePhonesData={mobilePhonesData} />
            </div>
        </main>
    );
};

export default MobilePhones;