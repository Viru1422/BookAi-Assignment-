import React from 'react'
import { useTheme } from './ThemeContext';

const Feature = () => {
    const { isDarkMode } = useTheme();
  return (
    <div className={`flex grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4  justify-center items-center gap-5 min-h-screen  ${isDarkMode ? 'bg-[url("./src/assets/black-chalk.jpg")] text-white' : 'bg-slate-300 text-black'} gap-5 p-10 min-h-screen`}>
        <div className='flex  flex-col  text-center items-center transition-transform transform hover:-translate-y-2  gap-5'>
        <svg className='h-12 w-12 bg-blue-600 p-2 rounded-full' xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fff"><path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z"/></svg>
            <h2 className='text-2xl font-semibold '>Custom Genres</h2>
            <p className='text-xl t pl-20 pr-20 '>Create stories in any genre or blend multiple styles.</p>
        </div>
        <div className='flex  flex-col  text-center items-center transition-transform transform hover:-translate-y-2  gap-5'>
        <svg className='h-12 w-12 bg-blue-600 p-2 rounded-full' xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fff"><path d="M300-80q-58 0-99-41t-41-99v-520q0-58 41-99t99-41h500v600q-25 0-42.5 17.5T740-220q0 25 17.5 42.5T800-160v80H300Zm-60-267q14-7 29-10t31-3h20v-440h-20q-25 0-42.5 17.5T240-740v393Zm160-13h320v-440H400v440Zm-160 13v-453 453Zm60 187h373q-6-14-9.5-28.5T660-220q0-16 3-31t10-29H300q-26 0-43 17.5T240-220q0 26 17 43t43 17Z"/></svg>
            <h2 className='text-2xl font-semibold text-center '>Instant Download</h2>
            <p className='text-xl text-center pl-20 pr-20'>Get your completed book in various formats instantly.</p>
        </div>
        <div className='flex  flex-col  text-center items-center transition-transform transform hover:-translate-y-2  gap-5'>
        <svg className='h-12 w-12 bg-blue-600 p-2 rounded-full' xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fff"><path d="M280-280h400v-80H280v80Zm200-120 160-160-56-56-64 62v-166h-80v166l-64-62-56 56 160 160Zm0 320q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>
            <h2 className='text-2xl font-semibold text-center '>Multilingual</h2>
            <p className='text-xl text-center pl-20 pr-20'>Generate content in multiple languages effortlessly.</p>
        </div>
        <div className='flex  flex-col  text-center items-center transition-transform transform hover:-translate-y-2  gap-5'>
        <svg className='h-12 w-12 bg-blue-600 p-2 rounded-full'xmlns="http://www.w3.org/2000/svg"  height="24px" viewBox="0 -960 960 960" width="24px" fill="#fff"><path d="m476-80 182-480h84L924-80h-84l-43-122H603L560-80h-84ZM160-200l-56-56 202-202q-35-35-63.5-80T190-640h84q20 39 40 68t48 58q33-33 68.5-92.5T484-720H40v-80h280v-80h80v80h280v80H564q-21 72-63 148t-83 116l96 98-30 82-122-125-202 201Zm468-72h144l-72-204-72 204Z"/></svg>
            <h2 className='text-2xl font-semibold text-center '>AI-Powered Writing</h2>
            <p className='text-xl text-center pl-20 pr-20'>Generate high-quality content with advanced AI technology.</p>
        </div>
      </div>
  )
}

export default Feature