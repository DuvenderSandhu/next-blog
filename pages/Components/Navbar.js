import Link from 'next/link'
import logo from '../../public/CodeShift1.png'
import Image from 'next/image'
export  function Navbar(props){
    return (
      <header className="text-white bg-gray-900 body-font">
      <div className="container mx-auto flex flex-wrap p-2 gap-2 flex-col md:flex-row items-center">
        <Link href={"/"} className="flex title-font font-medium items-center text-gray-900  md:mb-0">
          <div className="flex item-center">
          <Image src={logo} alt="CodeShift" width={180} height={40}/>
          </div>
        </Link>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link href={'/'} className="mr-5 hover:text-gray-500">Home</Link>
          <Link href={'/projects'} className="mr-5 hover:text-gray-500">Projects</Link>
          <Link href={'/contact'} className="mr-5 hover:text-gray-500">Contact</Link>
        </nav>
        <button className="inline-flex items-center   bg-gray-500 border-1  py-1 px-3 focus:outline-none hover:bg-gray-900 rounded text-base border-gray-500">Hire Me
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>
    </header>
    )
}



export default Navbar