import ITInfrastructureComp from '@/components/ServicesComp/ITInfrastructureComp/ITInfrastructureComp';
import SubBannerComp from '@/components/SubBannerComp/SubBannerComp';

const ITInfrastructure = () => {
    // sub page banner component content 
    const mainTitle = 'IT Infrastructure'

    return (
        <main>
            <SubBannerComp mainTitle={mainTitle} />
            <div className="bg-[url('/img/bg/BGLine-01.webp')] bg-cover bg-no-repeat bg-top pt-20">
          <ITInfrastructureComp/>
            </div>
        </main>
    );
};

export default ITInfrastructure;