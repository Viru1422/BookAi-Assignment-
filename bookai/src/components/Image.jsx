import React from 'react';

const Image = () => {
  return (
    <>
      <section className='flex h-full w-[100%] flex-col justify-center items-center mt-5'>
        <div className="relative bg-black/40 p-7 rounded">
          <img 
            src="https://raw.githubusercontent.com/adarshagupta/trybookai/main/book2.png" 
            alt="AI Book Generator" 
            className="w-full sm:max-w-sm md:max-w-md xl:max-w-3xl  transition-transform transform hover:-translate-y-2"
          />
          <div className="absolute bg-black/40 p-3 rounded top-0 left-0 ">
            <img 
              src="https://raw.githubusercontent.com/adarshagupta/trybookai/main/public-assets/paradox.png" 
              alt="" 
              className="w-25 h-28 md:w-24 md:h-32 transition-transform transform hover:-translate-y-2"
            />
          </div>
          <div className="absolute bottom-5 right-5 p-2  bg-black/40 rounded transition-transform transform hover:-translate-y-2">
            <span className="text-white">Chapter complete</span>
          </div>
        </div>
      </section>
    </>
  );
}

export default Image;
