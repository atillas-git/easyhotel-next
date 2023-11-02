import React from 'react'
import {AiOutlineDashboard,AiOutlineDesktop,AiOutlineMore} from 'react-icons/ai';
export const Sidebar = () => {
  return (
    <div className='flex flex-col gap-2 w-full h-full items-center p-2'>
      <header className='p-2 font-semibold text-lg border-b w-full text-center text-teal-100 border-teal-100'>
        EasyHotel
      </header>
      <nav className='flex flex-col items-center w-full justify-center gap-1'>
        <h6 className='w-full font-semibold text-left text-teal-100 text-sm'>
          Overview
        </h6>
        <div className='flex items-center justify-center gap-2 p-2 rounded-md hover:bg-teal-700 transition-all w-full cursor-pointer font-semibold'>
          <AiOutlineDashboard className = "w-5 h-5"/>
          Dashboard
        </div>
        <div className='flex items-center justify-center p-2 rounded-md hover:bg-teal-700 text-center transition-all w-full cursor-pointer'>
          Analytics
        </div>
        <h6 className='w-full font-semibold text-left text-teal-100 text-sm'>
          Features
        </h6>
        <div className='flex items-center justify-center gap-2 p-2 rounded-md hover:bg-teal-700 text-center transition-all w-full cursor-pointer'>
          <AiOutlineDesktop className = "w-5 h-5"/>
          Front Desk
        </div>
        <div className='flex items-center justify-center p-2 rounded-md hover:bg-teal-700 text-center transition-all w-full cursor-pointer'>
          Room Rack
        </div>
      </nav>
      <footer className='flex items-center justify-between mt-auto bg-teal-700 p-3 w-full rounded-lg'>
        <section className='flex flex-col'>
          <p>Sina Postacı</p>
          <small className='text-xs text-teal-200'>sina.postaci.tedu@gmail.com</small>
        </section>
        <div>
          <AiOutlineMore/>
        </div>
      </footer>
    </div>
  )
}

export default Sidebar