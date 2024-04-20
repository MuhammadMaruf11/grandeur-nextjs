import ChooseComp from '@/components/ChooseComp/ChooseComp';
import ExpertiseComp from '@/components/ExpertiseComp/ExpertiseComp';
import MissionComp from '@/components/MissionComp/MissionComp';
import SectionHeader from '@/components/SectionHeader/SectionHeader';
import SubBannerComp from '@/components/SubBannerComp/SubBannerComp';

const about = () => {
    // section header component props 
    const simpleText = `What We do`;
    const textTheme = `to Satisfy our Customer.`;
    const description = `We provide to notch internet services with professional hands. We not only think about present security but also it’s future. Future security is our first priority.`;

    // sub page banner component content 
    const mainTitle = 'About Us'

    return (
        <main>
            <SubBannerComp mainTitle={mainTitle} />
            <div className="bg-[url('/img/bg/BGLine-01.svg')] bg-cover bg-no-repeat bg-top py-20">
                <SectionHeader simpleText={simpleText} textTheme={textTheme} description={description} />
                <MissionComp />
                <ExpertiseComp />
                <ChooseComp />
            </div>
        </main>
    );
};

export default about;