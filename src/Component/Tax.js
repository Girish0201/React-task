import React from 'react'

import { MdAddBox } from "react-icons/md";
const Tax = () => {
  return (
    <div>
      <div className="h-14 bg-[#00A89E] rounded-t-md mt-4 flex justify-between px-3 py-2 items-center text-white">
            <h4 className='text-white text-md font-medium'>Surcharge</h4>
            <MdAddBox className='text-xl border-white size-30 border-2 size-30 bg-transparent' />
        </div>
        <div className='w-full rounded-md border-2 border-slate-200 h-68 bg-white '>
            <table className='whitespace-nowrap p-3'>
                <thead className='h-12 border-y-2' >
                    <tr >
                        <th className ="px-6 "> is awarded</th>
                        <th className=' px-6 '> Action </th>
                        <th className='px-12 '>Line items</th>
                        <th className='px-20'>Vender locals</th>
                        <th className='px-6'>Taxable</th>
                        <th className=' px-20 '>Cap%</th>
                        <th className='px-6'>Bid Value</th>
                        <th className='px-6'>Total($)</th>
                        <th className='px-6'>Saving</th>
                        <th className='px-6'>Current per yard</th>
                    </tr>
                </thead>
                <tbody className='h-20 px-2 py-2'></tbody>

            </table>
        </div>
    </div>
  )
}

export default Tax
