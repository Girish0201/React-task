import React from 'react'
import { FaAngleDown } from "react-icons/fa";


const Activity = () => {
  return (
    <div>
         <div className="h-14 bg-gradient-to-r from-teal-400 to-teal-500 rounded-t-md mt-4 flex px-3 py-2 items-center mb-4">
           <h4 className='text-white text-lg p-4  border-white decoration-underline'>Main Info</h4>
           <h4 className='text-white text-lg'>Activity</h4>
        </div>
        <div className='w-full rounded-sm border-1 border-slate-200 h-32 bg-white px-4 pt-6  pb-2 mb-2'>
            <div className='flex'>
                <div className='flex flex-col mr-6'>
                    <label className='p-2 text-sm font-semibold'>Contact Region Date</label>
                    <input className='w-46 border-x-gray-300 focus:outline-none bg-slate-200 text-black p-3 rounded-md text-slate-600' placeholder='08/14/2023' />
                </div>
                <div className='flex flex-col mr-7'>
                    <label className='p-2 text-sm font-semibold'>Contact End Date</label>
                    <input className='w-46 border-x-gray-300 focus:outline-none bg-slate-200 text-black p-3 rounded-md text-slate-600' placeholder='08/13/2023' />
                </div>
                <div className='flex flex-col mr-7'>
                    <label className='p-2 text-sm font-semibold'>Term(Month)</label>
                    <input className='w-46 border-x-gray-300 focus:outline-none bg-slate-200 text-black p-3 rounded-md text-slate-600' placeholder='12' />
                </div>
                <div className='flex flex-col mr-8'>
                    <label className='p-2 text-sm font-semibold'>Saving</label>

                    <div className = "w-46 flex justify-between border-x-gray-300 focus:outline-none bg-slate-200 text-black p-3 rounded-md text-slate-600">
                        <input className=' bg-slate-200' placeholder='yes' />
                        <FaAngleDown  className='text-center'/>
                    </div>
                </div>
                <div className='flex flex-col mr-7'>
                    <label className='p-2 text-sm font-semibold'>Minimum Fees</label>
                     <input className='w-46 flex justify-between border-x-gray-300 focus:outline-none bg-slate-200 text-black p-3 rounded-md text-slate-600' placeholder='0' />
                </div>
            </div>


            <div className='flex  px-4 pt-4  pb-2 mt-4 mr-4 mb-4'>
                <input type="text" placeholder='Comments' className='w-4/6 h-36 border-x-gray-300 focus:outline-none bg-slate-200 text-black p-3 rounded-md text-slate-600 text-left ' />
                <div className='flex flex-col ml-5'>
                    <div className = "w-52 flex justify-between border-x-gray-300 focus:outline-none bg-slate-200 text-black p-3 rounded-md text-slate-600 mb-8">
                        <input className='  bg-slate-200' placeholder='Status' />
                        <FaAngleDown  className='text-center text-lg'/>
                    </div>
                    <div className = "w-52 flex justify-between border-x-gray-300 focus:outline-none  bg-slate-200 text-black p-3 rounded-md text-slate-600 mb-8">
                        <input className=' bg-slate-200  text-slate-600 ' placeholder='Reason' />
                    <FaAngleDown  className='text-center text-lg'/>
                    </div>
                </div>
            </div>

            <div className='flex justify-center'>
                <button className='w-2/5 h-14 rounded-md bg-teal-600 text-center border-none focus:outline-none pointer text-white'>
                    <a href = "https://www.google.com/" target = "_blank ">Save Info</a>
                </button>
            </div>
        </div>

    </div>

  )
}

export default Activity

