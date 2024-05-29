import MobilePhonesComp from '@/components/ServicesComp/MobilePhonesComp/MobilePhonesComp';
import SubBannerComp from '@/components/SubBannerComp/SubBannerComp';

const MobilePhones = () => {
    // sub page banner component content 
    const mainTitle = 'Mobile Phones & Accessories Trading'

    return (
        <main>
            <SubBannerComp mainTitle={mainTitle} />
            <div className="bg-[url('/img/bg/BGLine-01.webp')] bg-cover bg-no-repeat bg-top pt-20">
              <MobilePhonesComp/>
            </div>
        </main>
    );
};

export default MobilePhones;