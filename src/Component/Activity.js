import React from 'react'



const Activity = () => {
  return (
    <div>
         <div className="h-14 bg-[#00A89E] rounded-t-md mt-4 flex  items-center mb-4">
           <h4 className='text-white text-md p-4  border-white  underline underline-offset-8' >Main Info</h4>
           <h4 className='text-white text-lg  '>Activity</h4>
        </div>
        <div className='w-full rounded-sm border-1 border-slate-200 h-64 bg-white px-5 py-4 mb-2'>
            <div className='flex'>
                <div className='flex flex-col mr-8'>
                    <label className='p-2 text-sm font-semibold'>Contact Region Date</label>
                    <input className='w-46 border-x-gray-300 focus:outline-none bg-slate-200 text-black p-3 rounded-md text-slate-600' placeholder='08/14/2023' />
                </div>
                <div className='flex flex-col mr-8'>
                    <label className='p-2 text-sm font-semibold'>Contact End Date</label>
                    <input className='w-46 border-x-gray-300 focus:outline-none bg-slate-200 text-black p-3 rounded-md text-slate-600' placeholder='08/13/2023' />
                </div>
                <div className='flex flex-col mr-8'>
                    <label className='p-2 text-sm font-semibold'>Term(Month)</label>
                    <input className='w-46 border-x-gray-300 focus:outline-none bg-slate-200 text-black p-3 rounded-md text-slate-600' placeholder='12' />
                </div>
                <div className='flex flex-col mr-10'>
                    <label className='p-2 text-sm font-semibold'>Saving</label>

                    <div className = "w-46 flex justify-between border-x-gray-300 focus:outline-none bg-slate-200 text-black p-3 rounded-md text-slate-600">

                        <select className='bg-slate-200 border-none focus:outline-none text-bg pr-14' >
                           <option >Yes </option>
                            <option>No</option>
                        </select>
                    </div>
                </div>
                <div className='flex flex-col mr-8'>
                    <label className='p-2 text-sm font-semibold'>Minimum Fees</label>
                     <input className='w-46 flex justify-between border-x-gray-300 focus:outline-none bg-slate-200 text-black p-3 rounded-md text-slate-600' placeholder='0' />
                </div>
            </div>


            <div className='flex  px-2 py-4 '>
                <input type="text" placeholder='Comments' className='w-3/5 h-36 border-x-gray-300 focus:outline-none bg-slate-200 text-black p-3 rounded-md  text-left ' />
                <div className='flex flex-col ml-5'>
                    <div className = "w-52 flex justify-between border-x-gray-300 focus:outline-none bg-slate-200 text-black p-3 rounded-md text-slate-600 mb-8">

                        <select className='bg-slate-200 text-black border-none focus:outline-none  pr-20'>
                          <option>Status</option>
                        </select>
                    </div>
                    <div className = "w-52 flex justify-between border-x-gray-300 focus:outline-none  bg-slate-200 text-black p-3 rounded-md text-slate-600 mb-8">
                        <select className='bg-slate-200 border-none focus:outline-none text-black pr-20'>
                          <option>Reason</option>
                        </select>
                    </div>
                </div>
            </div>

            <div className='flex justify-center mb-2'>
                <button className='w-2/5 h-14 rounded-md bg-teal-600 text-center border-none focus:outline-none pointer text-white'>
                    <a href = "https://www.google.com/" target = "_blank ">Save Info</a>
                </button>
            </div>
        </div>

    </div>

  )
}

export default Activity

