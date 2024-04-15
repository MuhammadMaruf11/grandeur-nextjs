import Link from "next/link";

export default function NotFound() {
  
    return (
        <div className='flex flex-col items-center justify-center h-96'>
           <h2 className='mb-3 text-4xl font-bold'>404 Error!</h2>
            <h3 className='mb-6 text-3xl font-semibold'>Page not found</h3>
            <Link className="px-5 py-3 text-white transition-all duration-300 ease-linear border hover:text-theme-2 bg-theme-2 rounded-3xl border-theme-2 hover:bg-white" href="/">Return Home</Link>
        </div>
    )
}