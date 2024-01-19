
import React from 'react'
import Services from './Services';
import Surcharge from './Surcharge';
import Tax from "./Tax"
import Activity from "./Activity"
import { CiEdit } from "react-icons/ci";
import { MdPersonAddAlt } from "react-icons/md";



const NegotitationDetails = ({visible,onClose}) => {
    if (!visible) return null;
  return (
    <div className=' insert-0 bg-black bg-opacity-30 backdrop-blur-sm h-auto'>
        <div className = "flex justify-end items-center absolute top-1 right-0">
            <button className='rounded-xl bg-black text-white w-6 h-6' onClick = {() => onClose()}>X</button>
          </div>
      <div className=' bg-slate-100  px-5 py-10 rounded-lg w-screen h-auto overflow-y-auto mt-25 mb-10 ml-8 mr-8'>

      <h1 className='font-black text-2xl  mb-8 text-black' >Negotitation Details</h1>
        <div className='w-full border-slate-200 border-2 rounded-lg h-24'>
            <div className=' flex justify-between items-center w-full h-11'>
                <ul className='list-none p-0 m-0 flex justify-center items-center relative'>
                    <li className='text-emerald-700 pl-5 font-bold underline  '>Mid sheet</li>
                    <li className='text-slate-500 pl-3'>Bid summary</li>
                    <li className='text-slate-500 pl-3'>Award Cermony</li>
                    <li className='text-slate-500 pl-3'>Base Line</li>
                    <li className='text-slate-500 pl-3'>Emails</li>
                    <li className='text-slate-500 pl-3'>Document</li>
                </ul>
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
            <hr className='border-slate-200' />
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
    </div>

  )
}

export default NegotitationDetails

