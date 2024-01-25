
import React ,{useState}from 'react'
import Services from "./Services";
import Surcharge from "./Surcharge";
import Tax from "./Tax";
import Activity from "./Activity";
import { CiEdit } from "react-icons/ci";
import { MdPersonAddAlt } from "react-icons/md";



const NegotitationDetails = () => {

    const [activeNavItem, setActiveNavItem] = useState(0);

  const navItems = [
    "Bid Sheet",
    "Bid Summary",
    "Award Summary",
    "BaseLine",
    "Emails",
    "Document"
  ];



  const handleNavItemClick = (index) => {
    setActiveNavItem(index);
  };

  return (

    <div className='bg-slate-100  px-5 py-10 rounded-lg w-screen h-auto overflow-y-auto scroll-smooth scrollbar-thin scrollbar-track-transparent mt-25 mb-10 ml-8 mr-8'>

      <h1 className='font-black text-2xl  mb-5 text-black' >Negotitation Details</h1>
        <div className='w-full border-slate-300 border-2 rounded-lg h-24 p-2 '>
            <div className=' flex justify-between items-center w-full h-11 '>
                <nav className="h-[55%]  flex items-center hover:text-black space-x-2 mx-3  ">
                    {navItems.map((item, index) => (
                        <a
                        key={index}
                        href="#"
                        className={`text-slate-400 ${
                        navItems[activeNavItem] === index ? "text-teal-400 underline-offset-4" : ''
                        } hover:text-black px-1`}
                        onMouseEnter={() => setActiveNavItem(index)}
                        onMouseLeave={() => setActiveNavItem(null)}
                        onClick={() => handleNavItemClick(index)}
                        >
                        {item}
                        </a>
                    ))}
                </nav>
                 <ul className='list-none p-0 m-0 flex justify-center items-center '>
                    <li className='size-6 rounded-sm focus:outline-none bg-indigo-500 text-white text-centr  mr-2 flex items-center'>
                        <div className='flex items-center p-2'>B</div>
                    </li>
                     <li className='size-6 rounded-sm focus:outline-none bg-fuchsia-900 text-white text-centr  mr-2 flex items-center'>
                        <div className='flex items-center p-2'>B</div>
                    </li>
                     <li className='size-6 rounded-sm focus:outline-none bg-green-500 text-white text-centr  mr-2 flex items-center'>
                        <div className='flex items-center p-2'>B</div>
                    </li>
                     <li className='size-6 rounded-sm focus:outline-none bg-orange-500 text-white text-centr  mr-2 flex items-center'>
                        <div className='flex items-center p-2'>B</div>
                    </li>
                    <li>
                         <CiEdit className='text-xl bg-transparent size-30 '/>
                    </li>
                 </ul>
            </div>
            <hr className='border-slate-300 sm:none'  />
            <ul className='list-none flex items-center h-11' >
                <li className='text-emerald-700 pl-5 font-bold'>Active</li>
                <li className='text-slate-500 pl-3'>Extras</li>
                <li className='text-slate-500 pl-3'>Archived</li>
            </ul>
        </div>
        <div className='flex justify-end items-center  mt-10'>
            <input type = "text" className=' bg-white rounded-lg focus:outline-none border-slate-50 p-4  h-10 mr-3 ' placeholder='Vendor' />
            <MdPersonAddAlt className='text-3xl' />
        </div>
        <Services />
        <Surcharge />
        <Tax />
        <Activity />



     </div>


  )
}

export default NegotitationDetails
