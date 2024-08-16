import React from 'react'
import Image from './Image'
import { useTheme } from './ThemeContext';
const Home = () => {
  const { isDarkMode } = useTheme();
  return (
    <>
    <div className={` h-[100%]  w-full flex flex-col items-center justify-center ${isDarkMode ? 'bg-[url("./src/assets/black-chalk.jpg")] text-white' : 'bg-slate-300 text-black'}`}>
        <div className=" mt-10 mb-10">
            <h1 className='text-4xl lg:text-6xl font-semibold text-center p-10'>Explore the Possibilities of <span className='text-blue-500'>AI Book Writing</span> with BookAI</h1>
            <p className='  mt-5 pr-10 pl-10 text-l lg:text-xl  text-center mr-20 ml-20 lg:mr-40 lg:ml-40'>Unleash the power of AI to create captivating books in minutes. Download, Distribute wherever you want. Generate unlimited free books</p>

        </div>
        <div className=' mb-10'>
            

<button type="button" class=" transition-transform transform hover:-translate-y-2 text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Get Started</button>

<button type="button" class=" transition-transform transform hover:-translate-y-2 text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Get API Access</button>



            
        </div>
        
        <p className={` ${isDarkMode ? 'text-yellow-400' : 'text-blue-600'} font-bold p-10 text-center`}>Attention:TryBookAI has been acquired by Indicus AI. Indicus LLM will be used for text and image generation

</p>
<Image />
    </div>
    </>
  )
}

export default Home