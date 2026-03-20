import aboutImg from './assets/about.png';

export default function About () {
   return (
      <section id="about" className="section-padding bg-white dark:bg-gray-900">
         <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
               {/* Image Section */}
               <div className="order-2 lg:order-1">
                  <div className="relative">
                     <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-3xl blur-2xl transform rotate-6"></div>
                     <img
                        src={aboutImg}
                        alt="Anthony Zhao"
                        className="relative z-10 object-cover w-80 h-80 rounded-3xl shadow-2xl mx-auto lg:mx-0 transform hover:scale-105 transition-all duration-300"
                     />
                  </div>
               </div>

               {/* Content Section */}
               <div className="order-1 lg:order-2">
                  <div className="animate-fade-in-right">
                     <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-6">
                        About Me
                     </h2>
                     
                     <div className="space-y-6 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                        <p>
                           Hi, I'm Anthony, a Computer Science undergraduate with a strong interest in software development and AI. I enjoy music, cooking, and side projects that give me space to experiment and learn.
                        </p>
                        <p>
                           If you're interested in working together or have a cool idea, feel free to{' '}
                           <a 
                              href="#contact" 
                              className="font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors duration-300 relative group"
                           >
                              contact me
                              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 group-hover:w-full"></span>
                              <span className="ml-1">→</span>
                           </a>
                        </p>
                     </div>

                     {/* Skills/Interests */}
                     <div className="mt-8 grid grid-cols-2 gap-4">
                        <div className="p-4 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200/50 dark:border-gray-700/50">
                           <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Education</h3>
                           <p className="text-sm text-gray-600 dark:text-gray-300">Computer Science & Statistics</p>
                           <p className="text-sm text-gray-500 dark:text-gray-400">University of Toronto</p>
                        </div>
                        <div className="p-4 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200/50 dark:border-gray-700/50">
                           <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Interests</h3>
                           <p className="text-sm text-gray-600 dark:text-gray-300">Web Development, AI, Running</p>
                           <p className="text-sm text-gray-500 dark:text-gray-400">Hiking & Outdoor Activities</p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}