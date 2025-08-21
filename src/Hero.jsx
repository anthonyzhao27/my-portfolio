import bgHero from './assets/DSC01420.JPG';

export default function Hero() {
   return (
      <section
         className="relative flex flex-col items-center justify-center min-h-screen transition-colors duration-300 bg-center bg-cover overflow-hidden"
         style={{ backgroundImage: `url(${bgHero})` }}
      >
         {/* Gradient overlay */}
         <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/20 to-black/60" />
         
         {/* Animated background elements */}
         <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-float"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-pink-400/20 to-orange-400/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
         </div>

         {/* Main content */}
         <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
            <div className="animate-fade-in-up">
               <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                  <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                     Anthony Zhao
                  </span>
               </h1>
               
               <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed max-w-2xl mx-auto">
                  Computer Science and AI student at the University of Toronto.
               </p>
               
               <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <a
                     href="#projects"
                     className="btn-primary inline-flex items-center gap-2 group"
                  >
                     View Projects
                     <svg 
                        className="w-4 h-4 transition-transform group-hover:translate-x-1" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                     >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                     </svg>
                  </a>
                  
                  <a
                     href="#contact"
                     className="btn-secondary text-white border-white hover:bg-white hover:text-gray-900"
                  >
                     Get In Touch
                  </a>
               </div>
            </div>
         </div>

         {/* Scroll indicator */}
         <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
               <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
            </div>
         </div>
      </section>
   );
}