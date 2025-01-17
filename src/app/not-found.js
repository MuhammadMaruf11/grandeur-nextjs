/* eslint-disable @next/next/no-img-element */
import SubBannerComp from "@/components/SubBannerComp/SubBannerComp";
import Link from "next/link";

export default function NotFound() {
    // sub page banner component content 
    const mainTitle = 'Page Not Found!'

    return (
        <main>
            <SubBannerComp mainTitle={mainTitle} />
            <div className='flex flex-col  items-center justify-center py-8'>
                <img width={480} src='/img/bg/404notfoundGrandeurae-01.webp' alt='error' />
                <Link className="px-5 py-3 border border-theme text-theme hover:bg-theme hover:text-white transition-all ease-linear" href="/">Return Home</Link>
            </div>
        </main>
    )
}