/* eslint-disable react-hooks/rules-of-hooks */
'use client'
import A2pSMSComp from "@/components/A2pSMSComp/A2pSMSComp";
import SDEComp from "@/components/SDEComp/SDEComp";
import SectionHeader from "@/components/SectionHeader/SectionHeader";
import SubBannerComp from "@/components/SubBannerComp/SubBannerComp";
import WifiSolutionComp from "@/components/WifiSolutionComp/WifiSolutionComp";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";


const solutions = () => {

    // section header component props 
    const simpleText = `What We do`;
    const textTheme = `to Satisfy our Customer.`;
    const description = `We provide to notch internet services with professional hands. We not only think about present security but also it’s future. Future security is our first priority.`;

    // sub page banner component content 
    const mainTitle = 'Network Solutions'

    const searchParams = useSearchParams();
    const item = searchParams.get('item');

    useEffect(() => {
        if (item) {
            const element = document.getElementById(item);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [item]);

    return (
        <main>
            <SubBannerComp mainTitle={mainTitle} />
            <div className="bg-[url('/img/bg/BGLine-01.webp')] bg-cover bg-no-repeat bg-top py-20">
                <SectionHeader simpleText={simpleText} textTheme={textTheme} description={description} />
                <WifiSolutionComp />
                <A2pSMSComp />
                <SDEComp />
            </div>
        </main>
    );
};

export default solutions;