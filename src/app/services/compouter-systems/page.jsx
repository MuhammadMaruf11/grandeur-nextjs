import ComputerSystemComp from '@/components/ServicesComp/ComputerSystemComp/ComputerSystemComp';
import SubBannerComp from '@/components/SubBannerComp/SubBannerComp';

const ComputerSystem = () => {
    // sub page banner component content 
    const mainTitle = 'Systems & Equipment'

    return (
        <main>
            <SubBannerComp mainTitle={mainTitle} />
            <div className="bg-[url('/img/bg/BGLine-01.webp')] bg-cover bg-no-repeat bg-top pt-20">
                <ComputerSystemComp />
            </div>
        </main>
    );
};

export default ComputerSystem;