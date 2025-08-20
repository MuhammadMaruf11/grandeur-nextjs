import ConsultComp from '@/components/ConsultComp/ConsultComp';
import SubBannerComp from '@/components/SubBannerComp/SubBannerComp';
import { SITE_URL } from '@/config/siteConfig';
import React from 'react';

const consultExpert = async() => {

    const res = await fetch(`${SITE_URL}/api/consultation`, {
        cache:'no-store'
    })
    const { consultationData } = await res.json()

    // sub page banner component content 
    const mainTitle = 'Consult an Expert'

    return (
        <main>
            <SubBannerComp mainTitle={mainTitle} />
            <div className="bg-[url('/img/bg/BGLine-01.webp')] bg-cover bg-no-repeat bg-top py-20">
                <ConsultComp consultationData={consultationData} />
            </div>
        </main>
    );
};

export default consultExpert;