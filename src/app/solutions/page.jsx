import A2pSMSComp from "@/components/A2pSMSComp/A2pSMSComp";
import SDEComp from "@/components/SDEComp/SDEComp";
import SubBannerComp from "@/components/SubBannerComp/SubBannerComp";
import WifiSolutionComp from "@/components/WifiSolutionComp/WifiSolutionComp";


const solutions = () => {

    // sub page banner component content 
    const mainTitle = 'Network Solutions'

    return (
        <main>
            <SubBannerComp mainTitle={mainTitle} />
            <WifiSolutionComp />
            <A2pSMSComp />
            <SDEComp />
        </main>
    );
};

export default solutions;