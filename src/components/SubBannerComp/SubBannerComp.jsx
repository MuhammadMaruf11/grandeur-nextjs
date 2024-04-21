
const SubBannerComp = ({ mainTitle }) => {
    return (
        <section className="relative bg-[url('/img/bg/circle-bg.webp')] bg-cover bg-no-repeat bg-center py-32">
            <div className="absolute inset-0 bg-indigo-950 opacity-50"></div>
            <div className="flex max-w-screen-xl mx-auto items-center justify-center relative z-10">
                <h1 className='text-white font-bold text-4xl'>{mainTitle && mainTitle}</h1>
            </div>
        </section>
    );
};

export default SubBannerComp;