import { useState, useEffect } from 'react';

export default function Nav() {
   const [darkMode, setDarkMode] = useState(false);
   const [isScrolled, setIsScrolled] = useState(false);
   
   useEffect(() => {
      if (darkMode) {
         document.documentElement.classList.add('dark');
      } else {
         document.documentElement.classList.remove('dark');
      }
   }, [darkMode]);

   useEffect(() => {
      const handleScroll = () => {
         setIsScrolled(window.scrollY > 50);
      };

      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
   }, []);
   
   return (
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
         isScrolled 
            ? 'glass shadow-lg backdrop-blur-md' 
            : 'bg-transparent'
      }`}>
         <div className="max-w-7xl mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
               {/* Logo/Name */}
               <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Anthony Zhao
               </div>

               {/* Navigation Links */}
               <div className="hidden md:flex items-center space-x-8">
                  <a 
                     href="#projects" 
                     className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 font-medium relative group"
                  >
                     Projects
                     <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 group-hover:w-full"></span>
                  </a>
                  <a 
                     href="#about" 
                     className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 font-medium relative group"
                  >
                     About
                     <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 group-hover:w-full"></span>
                  </a>
                  <a 
                     href="#contact" 
                     className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 font-medium relative group"
                  >
                     Contact
                     <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 group-hover:w-full"></span>
                  </a>
               </div>

               {/* Dark mode toggle */}
               <button
                  className="relative w-32 h-10 px-4 py-2 rounded-full glass border border-gray-200/20 dark:border-gray-700/20 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all duration-300 hover:scale-105"
                  onClick={() => setDarkMode(!darkMode)}
               >
                  <span
                     className={`absolute inset-0 flex items-center justify-center transition-all duration-300 rounded-full ${
                        darkMode ? 'opacity-0 rotate-180' : 'opacity-100'
                     }`}
                  >
                     <span className="mr-2">☀️</span>
                     Light
                  </span>
                  <span
                     className={`absolute inset-0 flex items-center justify-center transition-all duration-300 rounded-full ${
                        darkMode ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-180'
                     }`}
                  >
                     <span className="mr-2">🌙</span>
                     Dark
                  </span>
               </button>
            </div>
         </div>
      </nav>
   );
}