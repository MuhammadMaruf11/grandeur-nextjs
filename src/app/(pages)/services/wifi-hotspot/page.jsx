import SubBannerComp from '@/components/SubBannerComp/SubBannerComp';
import WifiHotspotComp from '@/components/ServicesComp/WifiHotspotComp/WifiHotspotComp';
import { SITE_URL } from '@/config/siteConfig';

const Wifi = async () => {
    
    const rest = await fetch(`${SITE_URL}/api/wifi-hotspot`, {
        cache:'no-store'
    })

    const { wifiHotspotData } = await rest.json()

    // sub page banner component content 
    const mainTitle = 'Wifi Hotspot'

    return (
        <main>
            <SubBannerComp mainTitle={mainTitle} />
            <div className="bg-[url('/img/bg/BGLine-01.webp')] bg-cover bg-no-repeat bg-top pt-20">
                <WifiHotspotComp wifiHotspotData={wifiHotspotData} />
            </div>
        </main>
    );
};

export default Wifi;