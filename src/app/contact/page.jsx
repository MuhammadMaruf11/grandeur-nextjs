import ContactMapComp from '@/components/ContactUsComp/ContactMapComp';
import ContactUsComp from '@/components/ContactUsComp/ContactUsComp';
import SubBannerComp from '@/components/SubBannerComp/SubBannerComp';

const contact = () => {

    // sub page banner component content 
    const mainTitle = 'Contact Us'

    return (
        <main>
            <SubBannerComp mainTitle={mainTitle} />
            <ContactUsComp />
            <ContactMapComp />
        </main>
    );
};

export default contact;