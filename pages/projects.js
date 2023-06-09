import { useState } from "react"
import Link from 'next/link'
export default function Projects(){
  const [obj, setObj]=useState({
    h21:"ecommerce",
    h22:"noterr",
    h23:"gomato",
  })
    return (
        <section className="text-gray-600 body-font overflow-hidden">
  <div className="container px-5 py-24 mx-auto">
    <div className="-my-8 divide-y-2 divide-gray-100">
      <div className="py-8 flex flex-wrap md:flex-nowrap">
        <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
          <span className="font-semibold title-font text-gray-700">MERN</span>
          <span className="mt-1 text-gray-500 text-sm">12 Jun 2019</span>
        </div>
        <div className="md:flex-grow">
          <h2 className="h21 text-2xl font-medium text-gray-900 title-font mb-2">Ecommerce</h2>
          <p className="leading-relaxed">This is a Ecommerce Website where you can signup/login and add items to cart and shop</p>
          <Link href={`/projects/${obj.h21}`} className="text-indigo-500 font-bold cursor-pointer hover:text-gray-900 inline-flex items-center mt-4">Dive In
            <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </Link>
          
        </div>
      </div>

      <div className="py-8 flex flex-wrap md:flex-nowrap">
        <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
          <span className="font-semibold title-font text-gray-700">Notes Taking App</span>
          <span className="mt-1 text-gray-500 text-sm">12 Jun 2019</span>
        </div>
        <div className="md:flex-grow">
          <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">Noterr</h2>
          <p className="leading-relaxed">Noterr is a Notes Taking App that Crate/Retrive/Update/Delete Notes after authenicate user by Login.</p>
          <Link href={`/projects/${obj.h22}`} className="text-indigo-500 font-bold cursor-pointer hover:text-gray-900 inline-flex items-center mt-4">Dive In
            <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </Link>
          
        </div>
      </div>
      <div className="py-8 flex flex-wrap md:flex-nowrap">
        <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
          <span className="font-semibold title-font text-gray-700">Food Ordering App</span>
          <span className="mt-1 text-gray-500 text-sm">12 Jun 2019</span>
        </div>
        <div className="md:flex-grow">
          <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">Gomato</h2>
          <p className="leading-relaxed">Gomato is a Good Ordering App that let user login and order food.</p>
          <Link href={`/projects/${obj.h23}`} className="text-indigo-500 font-bold cursor-pointer hover:text-gray-900 inline-flex items-center mt-4">Dive In
            <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </Link>
          
        </div>
      </div>
      
      
    </div>
  </div>
</section>
    )
}