import PrivacyComp from "@/components/PrivacyComp/PrivacyComp";
import SubBannerComp from "@/components/SubBannerComp/SubBannerComp";


const privacy = () => {

    const mainTitle = 'Privacy & Policy'

    return (
        <main>
            <SubBannerComp mainTitle={mainTitle} />
            <PrivacyComp/>
        </main>
    );
};

export default privacy;