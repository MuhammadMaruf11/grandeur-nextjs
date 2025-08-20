import BillingSoftwareComp from '@/components/ServicesComp/BillingSoftwareComp/BillingSoftwareComp';
import SubBannerComp from '@/components/SubBannerComp/SubBannerComp';
import { SITE_URL } from '@/config/siteConfig';

const Billing = async () => {
    
    const res = await fetch(`${SITE_URL}/api/billing-software`, {
        cache:'no-store'
    })

    const { billingSoftwareData } = await res.json();

    // sub page banner component content 
    const mainTitle = 'Billing Software'

    return (
        <main>
            <SubBannerComp mainTitle={mainTitle} />
            <div className="bg-[url('/img/bg/BGLine-01.webp')] bg-cover bg-no-repeat bg-top pt-20">
                <BillingSoftwareComp billingSoftwareData={billingSoftwareData} />
            </div>
        </main>
    );
};

export default Billing;