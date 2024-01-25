import React from 'react'

import { CiEdit } from "react-icons/ci";
import { MdAddBox } from "react-icons/md";

const Services = () => {
  return (

    <div className='flex flex-col '>
         <div className="h-14 bg-[#00A89E] rounded-t-md  flex justify-between px-3 py-2 items-center text-white">
            <h4 className='text-white '>Services</h4>
            <MdAddBox className='text-xl border-white size-30 border-2 rounded-md bg-teel-500 focus:outline-none' />
        </div>
         <div className='w-full rounded-md border-2 border-slate-200  bg-white p-2 '>
            <table>
                <thead >
                    <tr className='h-12 border-b-2 w-full '>
                        <th className= " px-3 ">Vender Description</th>
                        <th className = "px-3">Base Line</th>
                    </tr>
                    <tr className='h-12 border-y-2 w-full '>
                        <th></th>
                        <th>Actions</th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th className='ml-4'>S/Unit</th>
                        <th></th>
                        <th className='px-4'>Total</th>
                    </tr>
                    <tr className='h-12 border-y-2 w-full sm:auto'>
                        <th className=' px-3'>Is Awarded</th>
                        <th className=' px-3'>Actions</th>
                        <th className=' px-4'>Lineitems</th>
                        <th className='px-5'>Vender Local </th>
                        <th className=' px-5'>QTY type</th>
                        <th className=' px-4'></th>
                        <th className=' px-3'>S/T</th>
                        <th className=' px-3'>Lowest Bid</th>
                        <th className='px-3'>Bid Value</th>
                        <th className=' px-2'>Total($)</th>
                        <th className=' px-2'>s/unit</th>
                        <th className=' px-3'>saving</th>
                        <th className="">current per yard</th>
                    </tr>
                </thead>
                <tbody className=' text-center  px-2 py-2 w-full sm:auto'>
                    <tr className='h-24 border-y-2'>
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
                         <td>
                            <div className='flex flex-col'>
                                <span>Quantity-1</span>
                                <span>Size-</span>
                                <span>#of times-1</span>
                            </div>
                        </td>
                        <td>
                             <div className='flex flex-col'>
                                <span> Frequency - Weekly </span>
                                <span> MRC -
                                    <span>

                                    </span>
                                </span>
                                <span>  Service On Sat</span>
                            </div>
                        </td>
                        <td>
                            <div className='flex flex-col'>
                                <span className='text-red-600'> T</span>
                                <span className = "text-green-600">F</span>
                            </div>
                        </td>
                        <td>
                             <div className='flex flex-col'>
                                <span><a href = "#amount" >0.00010.000</a></span>
                                <span>Avg:@215.41</span>
                            </div>
                        </td>
                        <td></td>
                        <td>
                              <div className='flex flex-col'>
                               <span>$411.5</span>
                                <span>$500</span>
                            </div>
                        </td>
                        <td>
                            <div className='flex flex-col'>
                               <span>$411.5</span>
                                <span>$500</span>
                            </div>
                        </td>
                        <td></td>
                        <td>
                            <div className='flex flex-col'>
                               <span>95.04</span>
                                <span>619</span>
                            </div>
                        </td>

                    </tr>
                    <tr className='h-24 border-y-2'>
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
                         <td>
                            <div className='flex flex-col'>
                                <span>Quantity-1</span>
                                <span>Size-</span>
                                <span>#of times-1</span>
                            </div>
                        </td>
                        <td>
                             <div className='flex flex-col'>
                                <span> Frequency - Weekly </span>
                                <span> MRC -
                                    <span>

                                    </span>
                                </span>
                                <span>  Service On Sat</span>
                            </div>
                        </td>
                        <td>
                            <div className='flex flex-col'>
                                <span className='text-red-600'> T</span>
                                <span className = "text-green-600">F</span>
                            </div>
                        </td>
                        <td>
                             <div className='flex flex-col'>
                                <span><a href = "#amount" >0.00010.000</a></span>
                                <span>Avg:@215.41</span>
                            </div>
                        </td>
                        <td></td>
                        <td>
                              <div className='flex flex-col'>
                               <span>$411.5</span>
                                <span>$500</span>
                            </div>
                        </td>
                        <td>
                            <div className='flex flex-col'>
                               <span>$411.5</span>
                                <span>$500</span>
                            </div>
                        </td>
                        <td></td>
                        <td>
                            <div className='flex flex-col'>
                               <span>95.04</span>
                                <span>619</span>
                            </div>
                        </td>

                    </tr>
                   <tr className='h-24'>
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
                         <td>
                            <div className='flex flex-col'>
                                <span>Quantity-1</span>
                                <span>Size-</span>
                                <span>#of times-1</span>
                            </div>
                        </td>
                        <td>
                             <div className='flex flex-col'>
                                <span> Frequency - Weekly </span>
                                <span> MRC -
                                    <span>

                                    </span>
                                </span>
                                <span>  Service On Sat</span>
                            </div>
                        </td>
                        <td>
                            <div className='flex flex-col'>
                                <span className='text-red-600'> T</span>
                                <span className = "text-green-600">F</span>
                            </div>
                        </td>
                        <td>
                             <div className='flex flex-col'>
                                <span><a href = "#amount" >0.00010.000</a></span>
                                <span>Avg:@215.41</span>
                            </div>
                        </td>
                        <td></td>
                        <td>
                              <div className='flex flex-col'>
                               <span>$411.5</span>
                                <span>$500</span>
                            </div>
                        </td>
                        <td>
                            <div className='flex flex-col'>
                               <span>$411.5</span>
                                <span>$500</span>
                            </div>
                        </td>
                        <td></td>
                        <td>
                            <div className='flex flex-col'>
                               <span>95.04</span>
                                <span>619</span>
                            </div>
                        </td>

                    </tr>
                    <tr className='h-24 '>
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
                         <td>
                            <div className='flex flex-col'>
                                <span>Quantity-1</span>
                                <span>Size-</span>
                                <span>#of times-1</span>
                            </div>
                        </td>
                        <td>
                             <div className='flex flex-col'>
                                <span> Frequency - Weekly </span>
                                <span> MRC -
                                    <span>

                                    </span>
                                </span>
                                <span>  Service On Sat</span>
                            </div>
                        </td>
                        <td>
                            <div className='flex flex-col'>
                                <span className='text-red-600'> T</span>
                                <span className = "text-green-600">F</span>
                            </div>
                        </td>
                        <td>
                             <div className='flex flex-col'>
                                <span><a href = "#amount" >0.00010.000</a></span>
                                <span>Avg:@215.41</span>
                            </div>
                        </td>
                        <td></td>
                        <td>
                              <div className='flex flex-col'>
                               <span>$411.5</span>
                                <span>$500</span>
                            </div>
                        </td>
                        <td>
                            <div className='flex flex-col'>
                               <span>$411.5</span>
                                <span>$500</span>
                            </div>
                        </td>
                        <td></td>
                        <td>
                            <div className='flex flex-col'>
                               <span>95.04</span>
                                <span>619</span>
                            </div>
                        </td>

                    </tr>

                </tbody>
            </table>
         </div>


    </div>
  )
}

export default Services

