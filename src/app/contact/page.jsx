import ContactMapComp from '@/components/ContactUsComp/ContactMapComp';
import ContactUsComp from '@/components/ContactUsComp/ContactUsComp';
import SubBannerComp from '@/components/SubBannerComp/SubBannerComp';

const contact = () => {

    // sub page banner component content 
    const mainTitle = 'Contact Us'

    return (
        <main>
            <SubBannerComp mainTitle={mainTitle} />
            <div className="bg-[url('/img/bg/BGLine-01.webp')] bg-cover bg-no-repeat bg-top py-20">
                <ContactUsComp />
            </div>
            <ContactMapComp />
        </main>
    );
};

export default contact;