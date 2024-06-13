import SubBannerComp from '@/components/SubBannerComp/SubBannerComp';
import React from 'react';

const consultExpert = () => {

    // sub page banner component content 
    const mainTitle = 'Consult an Expert'

    return (
        <main>
            <SubBannerComp mainTitle={mainTitle} />
            <div className="bg-[url('/img/bg/BGLine-01.webp')] bg-cover bg-no-repeat bg-top py-20">

            </div>
        </main>
    );
};

export default consultExpert;