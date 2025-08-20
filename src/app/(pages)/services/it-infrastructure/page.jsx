import ITInfrastructureComp from '@/components/ServicesComp/ITInfrastructureComp/ITInfrastructureComp';
import SubBannerComp from '@/components/SubBannerComp/SubBannerComp';
import { SITE_URL } from '@/config/siteConfig';

const ITInfrastructure = async () => {


    const res = await fetch(`${SITE_URL}/api/it-infrastructure`, {
        cache:'no-store'
    })

    const { itInfrastructureData } = await res.json()

    // sub page banner component content 
    const mainTitle = 'IT Infrastructure'

    return (
        <main>
            <SubBannerComp mainTitle={mainTitle} />
            <div className="bg-[url('/img/bg/BGLine-01.webp')] bg-cover bg-no-repeat bg-top pt-20">
                <ITInfrastructureComp itInfrastructureData={itInfrastructureData} />
            </div>
        </main>
    );
};

export default ITInfrastructure;