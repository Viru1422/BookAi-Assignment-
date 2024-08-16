import React from 'react';
import { useTheme } from './ThemeContext';
const Howit = () => {
  const { isDarkMode } = useTheme();
  return (
    <>
    <div className={`${isDarkMode ? 'bg-[url("./src/assets/black-chalk.jpg")] text-white' : 'bg-slate-300 text-black'}`} >
      <div className='bg-black/40 rounded mx-10 py-2 '>
        <h1 className='text-2xl  text-center font-bold'>How It Works</h1>
      </div>
      <div className='bg-black/40 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-5 p-2 mx-10'>
        <div className='flex items-center p-6 rounded-lg' >
        <i className="fa-solid fa-wand-magic-sparkles text-white  bg-blue-600 p-6 rounded-full"></i>
          <div className='flex flex-col ml-4'>
            <h2 className='text-2xl font-semibold'>Choose Your Genre</h2>
            <p className=''>Select from a wide range of genres or create a custom blend.</p>
          </div>
        </div>
        <div className='flex items-center p-6 rounded-lg' >
        <i class="fa-solid fa-pencil text-white  bg-blue-600 p-6 rounded-full"></i>
          <div className='flex flex-col ml-4'>
            <h2 className='text-2xl font-semibold'>Provide Key Details</h2>
            <p >Input main characters, plot points, or themes to guide the AI.</p>
          </div>
        </div>
        <div className='flex items-center p-6 rounded-lg' >
        <i class="fa-solid fa-gears text-white  bg-blue-600 p-6 rounded-full"></i>
          <div className='flex flex-col ml-4'>
            <h2 className='text-2xl font-semibold'>AI Generation</h2>
            <p>Our advanced AI creates your book based on your inputs.</p>
          </div>
        </div>
        <div className='flex items-center p-6 rounded-lg' >
        <i class="fa-solid fa-download text-white  bg-blue-600 p-6 rounded-full "></i>
          <div className='flex flex-col ml-4 '>
            <h2 className='text-2xl font-semibold'>Review and Download</h2>
            <p>Review your generated book and download in your preferred format.</p>
          </div>
        </div>
      </div>
      </div>
    </>
  )
}

export default Howit;
