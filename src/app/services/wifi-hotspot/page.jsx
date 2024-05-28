import SubBannerComp from '@/components/SubBannerComp/SubBannerComp';
import WifiHotspotComp from '@/components/ServicesComp/WifiHotspotComp/WifiHotspotComp';

const Wifi = () => {
    // sub page banner component content 
    const mainTitle = 'Wifi Hotspot'

    return (
        <main>
            <SubBannerComp mainTitle={mainTitle} />
            <div className="bg-[url('/img/bg/BGLine-01.webp')] bg-cover bg-no-repeat bg-top pt-20">
                <WifiHotspotComp />
            </div>
        </main>
    );
};

export default Wifi;