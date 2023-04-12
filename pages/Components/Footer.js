import React from 'react'
import logo from '../../public/CodeShift1.png'
import Image from 'next/image'
export default function Footer() {
  return (
    <footer className="text-white bg-gray-900 body-font flex ">
  <div className="container px-5 py-4 mx-auto flex items-center sm:flex-row flex-col justify-center">
    <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
    <Image src={logo} alt="CodeShift" width={180} height={40}/>
    </a>
    <p className="text-sm text-white sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 text-center">© 2023 CodeShift —
      <a href="https://github.com/DuvenderSandhu" className="text-blue-200 ml-1" rel="noopener noreferrer" target="_blank">@DuvenderSandhu</a>
    </p>
  </div>
</footer>
  )
}
