import SubBannerComp from "@/components/SubBannerComp/SubBannerComp";
import TermsComp from "@/components/TermsComp/TermsComp";


const terms = () => {

    const mainTitle = 'Terms & Condition';

    return (
        <main>
            <SubBannerComp mainTitle={mainTitle}/>
            <TermsComp/>
        </main>
    );
};

export default terms;