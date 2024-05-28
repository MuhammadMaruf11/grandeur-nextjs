import WholesaleComp from '@/components/ServicesComp/WholesaleComp/WholesaleComp';
import SubBannerComp from '@/components/SubBannerComp/SubBannerComp';

const Wholesale = () => {
    // sub page banner component content 
    const mainTitle = 'WHOLESALE MOBILE & LAPTOP'

    return (
        <main>
            <SubBannerComp mainTitle={mainTitle} />
            <div className="bg-[url('/img/bg/BGLine-01.webp')] bg-cover bg-no-repeat bg-top pt-20">
                <WholesaleComp />
            </div>
        </main>
    );
};

export default Wholesale;