import { useState, useEffect } from 'react';

export default function Nav() {
   const [darkMode, setDarkMode] = useState(false);
   
   useEffect(() => {
      if (darkMode) {
         document.documentElement.classList.add('dark');
      } else {
         document.documentElement.classList.remove('dark');
      }
   }, [darkMode]);
   
   return (
      <nav className="relative flex items-center justify-between w-full p-4 transition-colors duration-300 shadow-md bg-gray-50/80 dark:bg-gray-800 dark:text-white">
         {/* Left: Name (flush to left edge) */}
         <div className="text-xl font-bold">Anthony Zhao</div>

         {/* Center: Navigation Links (centered relative to screen) */}
         <div className="absolute hidden space-x-6 transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 md:flex">
            <a href="#projects" className="transition duration-500 ease-in-out md:hover:text-gray-400">Projects</a>
            <a href="#about" className="transition duration-500 ease-in-out md:hover:text-gray-400">About</a>
            <a href="#contact" className="transition duration-500 ease-in-out md:hover:text-gray-400">Contact</a>
         </div>

         {/* Right: Dark mode toggle (flush to right edge) */}
         <button
            className="relative w-[130px] h-10 px-4 py-2 border border-gray-300 rounded whitespace-nowrap overflow-hidden dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
            onClick={() => setDarkMode(!darkMode)}
            >
            <span
               className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
                  darkMode ? 'opacity-0' : 'opacity-100'
               }`}
               key="sun"
            >
               Light Mode ☀️
            </span>
            <span
               className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
                  darkMode ? 'opacity-100' : 'opacity-0'
               }`}
               key="moon"
            >
               Dark Mode 🌙
            </span>
         </button>

      </nav>
   );
}