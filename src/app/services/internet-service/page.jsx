import InternetServiceComp from '@/components/ServicesComp/InternetServiceComp/InternetServiceComp';
import SubBannerComp from '@/components/SubBannerComp/SubBannerComp';

const InternetService = () => {
    // sub page banner component content 
    const mainTitle = 'Internet Service'

    return (
        <main>
            <SubBannerComp mainTitle={mainTitle} />
            <div className="bg-[url('/img/bg/BGLine-01.webp')] bg-cover bg-no-repeat bg-top pt-20">
           <InternetServiceComp/>
            </div>
        </main>
    );
};

export default InternetService;