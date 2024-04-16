import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  
    return (
        <div className='flex flex-col bg-indigo-950 items-center justify-center py-[120px]'>
            <Image width={960} height={540} src='/img/bg/404notfoundGrandeurae-01.png' alt='error'/>
            <Link className="px-5 py-3 text-white transition-all duration-300 ease-linear border hover:text-theme-2  border-theme" href="/">Return Home</Link>
        </div>
    )
}