import React, { useState } from 'react';
import { useTheme } from './ThemeContext'; 

const Navbar = () => {
    const { isDarkMode, toggleMode } = useTheme(); 
    const [mobileNav, setMobileNav] = useState(false);

    const links = [
        { title: "Home", link: "/" },
        { title: "Features", link: "#features" },
        { title: "How It Works", link: "#howitworks" },
        { title: "Roadmap", link: "#roadmap" },
        { title: "API", link: "/api" },
        { title: "Price", link: "/price" },
        { title: "Models", link: "/models" }
    ];

    const handleMenu = () => {
        setMobileNav(!mobileNav);
    };

    const closeMenu = () => {
        setMobileNav(false);
    };

    return (
        <>
            <nav className={`z-50 w-full font-semibold ${isDarkMode ? 'bg-[url("./src/assets/black-chalk.jpg")] text-white' : 'bg-slate-300 text-black'} flex justify-between items-center px-4 h-14`}>
                <div className="flex items-center">
                    <div style={{ fontFamily: 'Indie Flower' }} className="logo font-bold">BookAI</div>
                </div>
                <div className="hidden md:flex gap-4 mr-16">
                    {links.map((items, i) => (
                        <a href={items.link} style={{ fontFamily: 'IBM Plex Mono' }} className={`${isDarkMode ? 'hover:text-blue-200 hover:font-bold cursor-pointer' : 'hover:text-blue-400 hover:font-bold cursor-pointer'}`} key={i}>
                            {items.title}{" "}
                        </a>
                    ))}
                    {/* <button type="button" className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2">LogIn</button>
                    <button type="button" className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2">LogOut</button> */}
                </div>

                <button onClick={toggleMode} className="ml-4">
                    {isDarkMode ? (
                        <i class="fa-solid fa-circle"></i>
                    ) : (
                        <i class="fa-solid fa-circle-half-stroke"></i>
                    )}
                </button>
                <button className="block md:hidden" onClick={handleMenu}>
                <i class="fa-solid fa-bars"></i>
                </button>
            </nav>
            <div className={`${mobileNav ? "flex" : "hidden"} h-full w-full fixed top-0 left-0 bg-black/90 z-40 flex-col items-center justify-center md:hidden`}>
                {links.map((items, i) => (
                    <a href={items.link} className="mb-4 text-white font-semibold text-2xl hover:font-bold cursor-pointer" key={i} onClick={closeMenu}>
                        {items.title}{" "}
                    </a>
                ))}
                <button className="mt-8 text-white font-semibold text-2xl" onClick={closeMenu}>Close</button>
            </div>
        </>
    );
};

export default Navbar;
