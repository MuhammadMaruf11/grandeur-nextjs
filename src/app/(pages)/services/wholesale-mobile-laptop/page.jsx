import WholesaleComp from '@/components/ServicesComp/WholesaleComp/WholesaleComp';
import SubBannerComp from '@/components/SubBannerComp/SubBannerComp';
import { SITE_URL } from '@/config/siteConfig';

const Wholesale = async () => {
    
    const res = await fetch(`${SITE_URL}/api/whole-sale`, {
        cache:'no-store'
    })

    const { wholesaleData } = await res.json()

    // sub page banner component content 
    const mainTitle = 'Wholesale Mobile & Laptop'

    return (
        <main>
            <SubBannerComp mainTitle={mainTitle} />
            <div className="bg-[url('/img/bg/BGLine-01.webp')] bg-cover bg-no-repeat bg-top pt-20">
                <WholesaleComp wholesaleData={wholesaleData} />
            </div>
        </main>
    );
};

export default Wholesale;