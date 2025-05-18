import aboutImg from './assets/about.png';

export default function About () {
   return (
      <section id="about" className="px-6 py-20 transition-colors duration-300 bg-white dark:bg-gray-900">
         <div className="max-w-6xl mx-auto text-lg leading-relaxed text-gray-800 dark:text-gray-100">
            
            {/* Image wrapper: no float on mobile, float-left on md+ */}
            <div className="flex justify-center mb-6 md:float-left md:mr-6 md:mb-4 md:block">
               <img
               src={aboutImg} // replace with your actual image path
               alt="Anthony Zhao"
               className="object-cover w-40 h-40 rounded-full shadow-md"
               />
            </div>

            <h2 className="mb-4 text-3xl font-bold">About Me</h2>

            <p>
               Hi! I’m Anthony Zhao — a current second-year student at the Univerity of Toronto currently pursuing a double major in Computer Science and Statistics. I enjoy building responsive, intuitive web apps using React, Tailwind, and Firebase. I enjoy designing clean UIs and turning ideas into code. Whether I’m working on a portfolio, building tools for others, or learning new frameworks, I focus on writing maintainable and accessible code. I’m also fascinated by artificial intelligence and its potential to transform how we live and work. I love exploring new AI tools, reading about recent breakthroughs, and experimenting with ways to integrate AI into my projects.
            </p>

            <p className="mt-4">
               In my free time, I participate in competitive running. My main events are 800m - 5k, and I am hoping to make the UofT cross country and track team in the fall. I enjoy hiking, exploring the outdoors, and going on random side quests.
            </p>

            <p className="mt-4">
               I’m currently working on a full-stack project that blends AI and custom workout planning for long distance athletes. If you're
               interested in working together or have a cool idea, feel free to{' '}
               <a href="#contact" className="font-medium text-blue-500 transition duration-300 ease-in-out hover:text-blue-600 dark:text-blue-500 dark:hover:text-blue-400 ">
               contact me →
               </a>
            </p>

            {/* Clear float on md+ to ensure wrapping ends cleanly */}
            <div className="clear-both" />
         </div>
      </section>
   );
}