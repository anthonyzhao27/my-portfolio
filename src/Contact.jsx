import { FaGithub, FaLinkedin, FaInstagram, FaFacebook, FaEnvelope } from 'react-icons/fa';
import { FaStrava } from 'react-icons/fa6';

export default function Contact() {
   return (
      <section id="contact" className="section-padding bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
         <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
               <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
                  Get In Touch
               </h2>
               <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                  I'm always open to new opportunities and collaborations. Feel free to reach out!
               </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
               <ContactItem 
                  icon={<FaLinkedin size={24} className="text-blue-600" />} 
                  label="LinkedIn" 
                  tag="Anthony Zhao" 
                  link="https://linkedin.com/in/anthonyzhao27" 
               />
               <ContactItem 
                  icon={<FaGithub size={24} className="text-gray-800 dark:text-white"/>} 
                  label="GitHub" 
                  tag="@anthonyzhao27" 
                  link="https://github.com/anthonyzhao27" 
               />
               <ContactItem 
                  icon={<FaEnvelope size={24} className="text-red-500"/>} 
                  label="Email" 
                  tag="anthonyz.zhao@mail.utoronto.ca" 
                  link="mailto:anthonyz.zhao@mail.utoronto.ca" 
               />
               <ContactItem 
                  icon={<FaFacebook size={24} className="text-blue-700"/>} 
                  label="Facebook" 
                  tag="Anthony Zhao" 
                  link="https://www.facebook.com/profile.php?id=61551119257724" 
               />
               <ContactItem 
                  icon={<FaInstagram size={24} className="text-pink-500"/>} 
                  label="Instagram" 
                  tag="@anthonyzhao23" 
                  link="https://instagram.com/anthonyzhao23" 
               />
               <ContactItem 
                  icon={<FaStrava size={24} className="text-orange-500"/>} 
                  label="Strava" 
                  tag="Anthony Zhao" 
                  link="https://strava.app.link/g5RpggDbsTbr" 
               />
            </div>
         </div>
      </section>
   );
}

function ContactItem({ icon, label, tag, link }) {
  return (
    <a 
      href={link} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="group bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200/50 dark:border-gray-700/50"
    >
      <div className="flex items-center space-x-4">
        <div className="flex-shrink-0 w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-semibold text-gray-900 dark:text-white group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
            {label}
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-300 truncate">
            {tag}
          </p>
        </div>
        <div className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <svg 
            className="w-4 h-4 text-gray-400 group-hover:text-blue-600 transition-colors duration-300" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>
      </div>
    </a>
  );
}