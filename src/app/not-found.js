import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  
    return (
        <div className='flex flex-col  items-center justify-center pb-24'>
            <img width={1080} height={608} src='/img/bg/404notfoundGrandeurae-01.webp' alt='error'/>
            <Link className="px-5 py-3 text-theme transition-all duration-300 ease-linear border hover:text-theme-2 hover:border-theme-2  border-theme" href="/">Return Home</Link>
        </div>
    )
}