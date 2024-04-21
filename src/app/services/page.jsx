import ServicesComp from '@/components/ServicesComp/ServicesComp';
import SubBannerComp from '@/components/SubBannerComp/SubBannerComp';

const Services = () => {
    // sub page banner component content 
    const mainTitle = 'Our Services'

    return (
        <main>
            <SubBannerComp mainTitle={mainTitle} />
            <div className="bg-[url('/img/bg/BGLine-01.webp')] bg-cover bg-no-repeat bg-top pt-20">
                <ServicesComp />
            </div>
        </main>
    );
};

export default Services;