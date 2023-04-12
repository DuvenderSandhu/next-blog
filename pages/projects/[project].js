import { useRouter } from 'next/router'
import React,{useEffect, useState} from 'react'


export default  function Project() {
    const [project,setProject]=useState({})
    const [allProjects,setallProjects]=useState([
      {
          slug:"ecommerce",
          category:"MERN",
          desc:"This is a Ecommerce Website where you can signup/login and add items to cart and shop",
          images:[]
      },
      {
          slug:"noterr",
          category:"Notes Taking App",
          desc:"Noterr is a Notes Taking App that Crate/Retrive/Update/Delete Notes after authenicate user by Login.",
          images:[]
      },
      {
          slug:"gomato",
          category:"Food Ordering App",
          desc:"Gomato is a Good Ordering App that let user login and order food.",
          images:[]
      }
  ])
    let router= useRouter()
    let query= router.query.project;
    useEffect(()=>{
        if(query===undefined){
        }
        else{
          (async ()=>{
            console.log(query)
            let b=allProjects.filter((e)=>e.slug===query);setProject(b[0])
          }
          )()
        }
    },[query])
  return (
    <div>
      <section className="text-gray-600 body-font overflow-hidden">
  <div className="container px-5 py-24 mx-auto">
    <div className="lg:w-4/5 mx-auto flex flex-wrap">
      <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src="https://picsum.photos/400/400"/>
      <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
        <h2 className="text-sm title-font text-gray-500 tracking-widest">{project.category}</h2>
        <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{project.slug}</h1>
        
        <p className="leading-relaxed">{project.desc}</p>
        
        
      </div>
    </div>
  </div>
</section>
    </div>
  )
}
