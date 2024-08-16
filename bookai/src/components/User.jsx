import React from 'react';
import { useTheme } from './ThemeContext';
const User = () => {
  const { isDarkMode } = useTheme();
  return (
    <div className={` pt-10 ${isDarkMode ? 'bg-[url("./src/assets/black-chalk.jpg")] text-white' : 'bg-slate-300 text-black'}`}>
      
      <div className='flex flex-col items-center'>
        <h2 className='text-2xl font-semibold'>What Our Users Say</h2>
        <div className='mt-5 bg-black/40 w-full max-w-sm h-auto p-3 rounded'>
          <p className='pl-5 pr-5'>"BookAI revolutionized my writing process. I completed my debut novel in just two weeks!"
          <br/>- Sarah J., Author</p>
        </div>
        <div className='mt-5 bg-black/40 w-full max-w-sm h-auto p-3 rounded'>
          <p className='pl-5 pr-5'>"The AI-generated ideas helped me overcome writer's block. It's like having a co-author at your fingertips."
          <br/>- Mark T., Aspiring Writer</p>
        </div>
      </div>

      <div className='mt-10 bg-black/40 w-full max-w-sm rounded p-3 flex flex-col items-center mx-auto'>
  <h2 className='text-2xl font-semibold'>Stay Updated</h2>
  <p className='pl-5 pr-5'>Subscribe to our newsletter for the latest AI writing tips and BookAI updates.</p>
  <input placeholder='Enter Your Email' type='email' className= {`mt-3 p-2 w-full max-w-xs border rounded ${isDarkMode ? 'text-white' : ' text-gray-700'}`} />
  <button className=' mt-3 p-2 bg-teal-500 rounded'>Subscribe</button>
</div>


      <div className=' items-center mt-10 flex flex-col'>
        <p className='text-center'>© 2024 BookAI. All rights reserved.</p>
        <div className='items-center flex flex-row justify-center gap-10 pb-3'>
          <p>Terms of Service</p>
          <p>Privacy Policy</p>
          <p>Contact Us</p>
        </div>
      </div>
      
    </div>
  );
}

export default User;
