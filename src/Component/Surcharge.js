import React from 'react'
import { CiEdit } from "react-icons/ci";
import { MdAddBox } from "react-icons/md";

const Surcharge = () => {
  const navItems = [
    "is awarded",
    "Action",
    "Line items",
    "Vender locals",
    "Taxable",
    "",
    "Cap%",
    "Bid Value",
    "Total($)",
    "Saving",
    "Current per yard",
  ]
  return (
    <div className='flex flex-col'>
      <div className="h-14 bg-[#00A89E] rounded-t-md  flex justify-between px-3 py-2 items-center text-white">
            <h4 className='text-white '>Surcharge</h4>
            <MdAddBox className='text-xl border-white size-30 border-2 rounded-md bg-teel-500 focus:outline-none' />
        </div>
        <div className='w-full rounded-md border-2 border-slate-200 h-68 bg-white'>
            <table className='whitespace-nowrap p-3'>
                <thead className='h-12 border-y-2' >
                    <tr className=''>
                        {
                          navItems.map(item=> (
                            <th className='px-8'>{item}</th>
                          ))
                        }
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
                    <td className='px-4'>
                        Republic service of jackson,ms#823
                    </td>
                    <td></td>

                    <td>
                        <span className='text-red-600'> T</span>
                    </td>
                    <td>6.13</td>

                </tbody>
            </table>
        </div>
    </div>
  )
}

export default Surcharge


