import CloudServiceComp from '@/components/ServicesComp/CloudServiceComp/CloudServiceComp';
import SubBannerComp from '@/components/SubBannerComp/SubBannerComp';

const InternetService = () => {
    // sub page banner component content 
    const mainTitle = 'Cloud & Datacenters'

    return (
        <main>
            <SubBannerComp mainTitle={mainTitle} />
            <div className="bg-[url('/img/bg/BGLine-01.webp')] bg-cover bg-no-repeat bg-top pt-20">
            <CloudServiceComp/>
            </div>
        </main>
    );
};

export default InternetService;