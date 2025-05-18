import bgHero from './assets/DSC01420.JPG';

export default function Hero() {
   return (
      <section
         className="relative flex flex-col items-center justify-center h-screen transition-colors duration-300 bg-center bg-cover"
         style={{ backgroundImage: `url(${bgHero})` }}
         >
         <div className="absolute inset-0 bg-slate-100/50 dark:bg-black/60 backdrop-blur-sm" />
         <div className="relative z-10 text-center">
            <h1 className="text-4xl font-bold text-gray-800 dark:text-white">Anthony Zhao</h1>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
               I build clean, responsive, and stylish web apps with React, Tailwind, and Firebase.
            </p>
            <div className="mt-8">
               <a
               href="#projects"
               className="px-4 py-2 text-white transition duration-300 ease-in-out bg-blue-500 rounded hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
               >
               View Projects
               </a>
            </div>
         </div>
         </section>
   );
}