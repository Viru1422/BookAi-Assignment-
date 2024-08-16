import React from 'react'
import { useTheme } from './ThemeContext';
const Roadmap = () => {
  const { isDarkMode } = useTheme();
  return (
    <>
    <div className={`${isDarkMode ? 'bg-[url("./src/assets/black-chalk.jpg")] text-white' : 'bg-slate-300 text-black'}`} >
      <div className='bg-black/40 rounded mx-10 py-2 '>
        <h1 className='text-2xl font-bold text-center'>Roadmap</h1>
      </div>
      <div className='bg-black/40 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-5 p-2 mx-10'>
        <div className='flex items-center p-6 rounded-lg' >
        <i className="fa-solid fa-user text-white  bg-blue-700 p-6 rounded-full"></i>
          <div className='flex flex-col ml-4'>
            <h2 className='text-2xl font-semibold'>Advanced Character Development</h2>
            <p className=''>AI-powered tool for creating deep, complex characters.</p>
          </div>
        </div>
        <div className='flex items-center p-6 rounded-lg' >
        <i class="fa-solid fa-shop text-white  bg-blue-700 p-6 rounded-full"></i>
          <div className='flex flex-col ml-4'>
            <h2 className='text-2xl font-semibold'>E-book Platform Integration</h2>
            <p >Seamless publishing to popular e-book platforms.</p>
          </div>
        </div>
        <div className='flex items-center p-6 rounded-lg' >
        <i class="fa-solid fa-people-group text-white  bg-blue-700 p-6 rounded-full"></i>
          <div className='flex flex-col ml-4'>
            <h2 className='text-2xl font-semibold'>Collaborative Writing</h2>
            <p>Co-create stories with other authors or AI assistants.</p>
          </div>
        </div>
        <div className='flex items-center p-6 rounded-lg' >
        <i class="fa-solid fa-paintbrush text-white  bg-blue-700 p-6 rounded-full "></i>
          <div className='flex flex-col ml-4 '>
            <h2 className='text-2xl font-semibold'>AI Cover Art Generation</h2>
            <p>Create stunning book covers with AI-generated art.</p>
          </div>
        </div>
      </div>
      </div>
    </>
  )
}

export default Roadmap