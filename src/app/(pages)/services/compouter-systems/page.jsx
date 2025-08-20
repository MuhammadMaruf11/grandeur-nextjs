import ComputerSystemComp from '@/components/ServicesComp/ComputerSystemComp/ComputerSystemComp';
import SubBannerComp from '@/components/SubBannerComp/SubBannerComp';
import { SITE_URL } from '@/config/siteConfig';

const ComputerSystem = async () => {
    
    const res = await fetch(`${SITE_URL}/api/computer-system`, {
        cache:'no-store'
    })

    const { computerSystemData }= await res.json()
    // sub page banner component content 
    const mainTitle = 'Systems & Equipment'

    return (
        <main>
            <SubBannerComp mainTitle={mainTitle} />
            <div className="bg-[url('/img/bg/BGLine-01.webp')] bg-cover bg-no-repeat bg-top pt-20">
                <ComputerSystemComp computerSystemData={computerSystemData} />
            </div>
        </main>
    );
};

export default ComputerSystem;