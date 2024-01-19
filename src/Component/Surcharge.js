import React from 'react'
import { CiEdit } from "react-icons/ci";
import { MdAddBox } from "react-icons/md";

const Surcharge = () => {
  return (
    <div>
      <div className="h-14 bg-gradient-to-r from-teal-400 to-teal-500 rounded-t-md mt-4 flex justify-between px-3 py-2 items-center text-white">
            <h4 className='text-white '>Surcharge</h4>
            <MdAddBox className='text-xl border-white size-30 border-2 rounded-md bg-teel-500 focus:outline-none' />
        </div>
        <div className='w-full rounded-md border-2 border-slate-200 h-68 bg-white'>
            <table className='whitespace-nowrap p-3'>
                <thead className='h-12 border-y-2' >
                    <tr >
                        <th className ="px-6"> is awarded</th>
                        <th className=' px-6 '> Action </th>
                        <th className='px-10'>Line items</th>
                        <th className='px-20'>Vender locals</th>
                        <th className='px-6'>Taxable</th>
                        <th className=' px-20'>Cap%</th>
                        <th></th>
                        <th className='px-6'>Bid Value</th>
                        <th className='px-6'>Total($)</th>
                        <th className='px-6'>Saving</th>
                        <th className='px-6'>Current per yard</th>
                    </tr>
                </thead>
                <tbody className='text-center h-20 px-2 py-2'>
                    <td></td>
                    <td className='flex items-center text-center p-5'>
                        <CiEdit />
                        <MdAddBox />
                    </td>
                    <td>
                        <div className='flex flex-col'>
                            <span> 1waste container </span>
                            <span> 2cu yd. </span>
                            <span> 1x per week(s0003) </span>
                        </div>

                    </td>
                    <td>
                        Republic service of jackson,ms#823
                    </td>

                    <td> </td>
                    <td>6.13</td>
                    <td>
                        <span className='text-red-600'> T</span>
                    </td>
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default Surcharge

