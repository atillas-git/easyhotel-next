import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import React from 'react'

const AppLayout = ({children}:{children:React.ReactNode}) => {
  return (
    <div className='grid grid-cols-5 min-h-screen'>
        <div className='col-span-1 h-full'>
            <Sidebar/>
        </div>
        <div className='col-span-4 h-full flex flex-col'>
            <Navbar/>
            <section className='w-full'>
                {children}
            </section>
        </div>
    </div>
  )
}

export default AppLayout