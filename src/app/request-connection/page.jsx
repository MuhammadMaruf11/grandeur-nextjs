import RequestConnectionComp from '@/components/RequestConnectionComp/RequestConnectionComp';
import SubBannerComp from '@/components/SubBannerComp/SubBannerComp';
import React from 'react';

const RequestConnection = () => {

    // sub page banner component content 
    const mainTitle = 'Request For Connection'

    return (
        <main>
            <SubBannerComp mainTitle={mainTitle} />
            <div className="bg-[url('/img/bg/BGLine-01.webp')] bg-cover bg-no-repeat bg-top py-20">
                <RequestConnectionComp />
            </div>
        </main>
    );
};

export default RequestConnection;