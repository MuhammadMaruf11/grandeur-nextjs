import Link from "next/link"


function BannerComp() {
    return (
        <section className="bg-[url('/img/bg/GrandeuraeMapBG-02.webp')] bg-indigo-950 bg-contain bg-no-repeat bg-center py-20">
            <div className="max-w-5xl py-16 mx-auto px-3">
                <div className="flex flex-col gap-5 lg:gap-10 justify-center items-center mx-auto text-center text-white">
                    <h1 className="text-2xl lg:text-5xl lg:leading-[60px] font-bold bg-contain bg-center bg-no-repeat bg-none ">Secure, Defend, Dominate, Constant, Prevail Ultimate Internet Service</h1>
                    <p className="md:text-lg text-sm">Whether you&apos;re a small startup or a large enterprise, our team is ready to provide you with a scalable and comprehensive internet service that secures, protects, empowers, and grows with your property.</p>
                    <div className="flex gap-5 justify-start items-center">
                        <Link href='/' className="border border-indigo-500 text-xl px-4 py-3 backdrop-blur-sm bg-opacity-50 hover:bg-transparent bg-indigo-500 transition-all ease-linear">
                            Request for Connection
                        </Link>
                        <Link href='/' className="border border-indigo-500 text-xl px-4 py-3 backdrop-blur-sm hover:bg-opacity-50 hover:bg-indigo-500 bg-transparent transition-all ease-linear">
                            Consult an Expert
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BannerComp
