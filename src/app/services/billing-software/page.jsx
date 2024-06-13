import BillingSoftwareComp from '@/components/ServicesComp/BillingSoftwareComp/BillingSoftwareComp';
import SubBannerComp from '@/components/SubBannerComp/SubBannerComp';

const Billing = () => {
    // sub page banner component content 
    const mainTitle = 'Billing Software'

    return (
        <main>
            <SubBannerComp mainTitle={mainTitle} />
            <div className="bg-[url('/img/bg/BGLine-01.webp')] bg-cover bg-no-repeat bg-top pt-20">
                <BillingSoftwareComp />
            </div>
        </main>
    );
};

export default Billing;