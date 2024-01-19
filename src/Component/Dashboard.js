import React, { useState,Fragment } from 'react'
import { IoHome } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import NegotitationDetails from './NegotitationDetails'

const Dashboard = () => {
  const [showModal ,setShowModal] = useState(false)

  const handleOnClose = () => setShowModal(false)
  return (
    <div className='m-0 p-0 border-box'>
      <div className='bg-slate-200 flex justify-between w-screen h-auto '>
        {/* <div className='w-3/12 border-r-slate-300 h-auto p-4'>
          <div className="border-b-2 border-slate -2 pb-2 flex items-center">
            <a href = "htts://www.vector97.com">
              <img src = "https://vector97.com/wp-content/uploads/2021/03/Vector97_logo.png" alt = "vetor97" className='w-6 h-6' />
            </a>
            <span className='text-md font-semibold font-sans pl-3'>Vector 97</span>
          </div>
          <div className='flex flex-col justify-between items-center'>
              <div className='flex flex-col '>
                  <div className='flex'>
                    <img src = "" alt = "photo" />
                    <h2 className='text-md font-semibold font-sans pl-2'>Bessie Cooper</h2>
                  </div>
                  <div className='flex rounded-md border-slate-100 w-46 h-10  bg-white mt-5'>
                    <IoHome className='rounded bg-teal-500 size-5 text-white' />
                    <h3 className='pl-2 font-semibold text-base text-center'>Dashboard</h3>
                  </div>
                  <div className='flex mt-5 p-3'>
                     <IoHome className='rounded bg-teal-500 size-5 text-white' />
                    <h3 className='pl-2 font-semibold text-base text-center'>Dashboard</h3>
                  </div>
                  <div className='flex mt-5 p-3'>
                     <IoHome className='rounded bg-teal-500 size-5 text-white' />
                    <h3 className='pl-2 font-semibold text-base text-center'>Dashboard</h3>
                  </div>

              </div>
              <div className='flex mt-5 p-3'>
                <IoSettingsOutline className='  size-5 text-black' />
                <h3 className='pl-2 font-semibold text-base text-center'>Setting</h3>
              </div>
          </div>

        </div> */}
        <div className='w-3/4 h-screen '>
          <div className = "w-100 h-16 flex justify-between items-center bg-white text-base ">
            <div className='flex pl-2'>
              <h3 className='font-semibold font-sans text-black pl-2'>Tickets</h3>
              <h3 className='text-slate-300 font-medium pl-2'>Communication</h3>
              <h3 className='text-slate-300 font-medium pl-2'>Negotiation Panel</h3>
              <h3 className='text-slate-300 font-medium pl-2'>Client Approval</h3>
              <h3 className='text-slate-300 font-medium pl-2'>Work Bench</h3>
            </div>

            <CiSearch className='size-8 pr-2'/>
          </div>

        </div>
      <button onClick = {() => setShowModal(true)}>Girish</button>
      </div>

      <NegotitationDetails onClose = {handleOnClose}visible = {showModal} />
    </div>
  )
}

export default Dashboard

