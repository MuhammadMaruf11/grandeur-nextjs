import ServicesComp from '@/components/ServicesComp/ServicesComp';
import SubBannerComp from '@/components/SubBannerComp/SubBannerComp';
import React from 'react';

const Services = () => {
    // sub page banner component content 
    const mainTitle = 'Our Services'

    return (
        <main>
            <SubBannerComp mainTitle={mainTitle}/>
            <ServicesComp />
        </main>
    );
};

export default Services;