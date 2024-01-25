import React from 'react'

import { MdAddBox } from "react-icons/md";
const Tax = () => {

  const navItems = [
    "is awarded",
    "Action",
    "Line items",
    "Vender locals",
    "Taxable",
    "Cap%",
    "Bid Value",
    "Total($)",
    "Saving",
    "Current per yard",
  ]


  return (
    <div>
      <div className="h-14 bg-[#00A89E] rounded-t-md mt-4 flex justify-between px-3 py-2 items-center text-white w-full sm:w-auto">
            <h4 className='text-white text-md font-medium'>Tax</h4>
            <MdAddBox className='text-xl border-white size-30 border-2 size-30 bg-transparent' />
        </div>
        <div className='w-full rounded-md border-2 border-slate-200 h-68 bg-white w-full sm:w-auto sm:overflow-x-auto md:overflow-none'>
            <table className='whitespace-nowrap p-3'>
                <thead className='h-12 border-y-2 w-full sm:auto' >
                    <tr >
                        {
                          navItems.map((item) => (
                            <th className='px-9'>{item}</th>
                          ))

                        }
                    </tr>
                </thead>
                <tbody className='h-20 px-2 py-2 w-full sm:w-auto' ></tbody>

            </table>
        </div>
    </div>
  )
}

export default Tax
