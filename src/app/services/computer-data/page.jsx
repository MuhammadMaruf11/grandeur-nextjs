import DataProcessingComp from '@/components/ServicesComp/DataProcessingComp/DataProcessingComp';
import SubBannerComp from '@/components/SubBannerComp/SubBannerComp';

const ComputerData = () => {
    // sub page banner component content 
    const mainTitle = 'Computer & Data Processing'

    return (
        <main>
            <SubBannerComp mainTitle={mainTitle} />
            <div className="bg-[url('/img/bg/BGLine-01.webp')] bg-cover bg-no-repeat bg-top pt-20">
                <DataProcessingComp />
            </div>
        </main>
    );
};

export default ComputerData;