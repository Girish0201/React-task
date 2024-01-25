
import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'


const Dashboard = () => {

  return (
    <div >
      <div className='flex flex-col '>

        <Header/>
        <div className='flex'>
          <Sidebar/>

        </div>

      </div>



    </div>
  )
}

export default Dashboard
