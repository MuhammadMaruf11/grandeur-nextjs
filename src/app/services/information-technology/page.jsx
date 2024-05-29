import ITServiceNetworkComp from '@/components/ServicesComp/ITServiceNetworkComp/ITServiceNetworkComp';
import SubBannerComp from '@/components/SubBannerComp/SubBannerComp';

const InternetService = () => {
    // sub page banner component content 
    const mainTitle = 'IT Service Network'

    return (
        <main>
            <SubBannerComp mainTitle={mainTitle} />
            <div className="bg-[url('/img/bg/BGLine-01.webp')] bg-cover bg-no-repeat bg-top pt-20">
               <ITServiceNetworkComp/>
            </div>
        </main>
    );
};

export default InternetService;