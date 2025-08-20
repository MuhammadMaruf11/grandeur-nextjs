import ServicesComp from '@/components/ServicesComp/ServicesComp';
import SubBannerComp from '@/components/SubBannerComp/SubBannerComp';
import { SITE_URL } from '@/config/siteConfig';

const Services = async () => {

      const servicesRes = await fetch(`${SITE_URL}/api/service-list`, {
        cache : 'no-store'
      })
    
    const { servicesData } = await servicesRes.json()
    
    // sub page banner component content 
    const mainTitle = 'Our Services'

    return (
        <main>
            <SubBannerComp mainTitle={mainTitle} />
            <div className="bg-[url('/img/bg/BGLine-01.webp')] bg-cover bg-no-repeat bg-top pt-20">
                <ServicesComp servicesData={servicesData} />
            </div>
        </main>
    );
};

export default Services;