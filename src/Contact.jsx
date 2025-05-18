import { FaGithub, FaLinkedin, FaInstagram, FaFacebook, FaEnvelope } from 'react-icons/fa';
import { FaStrava } from 'react-icons/fa6';

export default function Contact() {
   return (
      <section className="flex flex-col items-center justify-center w-full transition-colors duration-300 bg-gray-200 dark:bg-gray-800">
         <div className="max-w-6xl px-6 py-20 mx-auto text-lg leading-relaxed">
         <h2 className="mb-12 text-3xl font-bold text-center dark:text-gray-100">Contact</h2>
         <section id="contact" className="grid grid-cols-1 gap-6 px-6 py-20 transition-colors duration-300 bg-white sm:grid-cols-2 md:grid-cols-3 dark:bg-gray-900">
               <ContactItem icon={<FaLinkedin size={30} className="text-blue-600" />} label="LinkedIn" tag="Anthony Zhao" link="https://linkedin.com/in/anthonyzhao27" />
               <ContactItem icon={<FaGithub size={30} className="text-gray-800 dark:text-white"/>} label="GitHub" tag="@anthonyzhao27" link="https://github.com/anthonyzhao27" />
               <ContactItem icon={<FaEnvelope size={30} className="text-red-500"/>} label="Email" tag="anthonyz.zhao@mail.utoronto.ca" link="mailto:anthonyz.zhao@mail.utoronto.ca" />
               <ContactItem icon={<FaFacebook size={30} className="text-blue-700"/>} label="Facebook" tag="Anthony Zhao" link="https://www.facebook.com/profile.php?id=61551119257724" />
               <ContactItem icon={<FaInstagram size={30} className="text-pink-500"/>} label="Instagram" tag="@anthonyzhao23" link="https://instagram.com/anthonyzhao23" />
               <ContactItem icon={<FaStrava size={30} className="text-orange-500"/>} label="Strava" tag="Anthony Zhao" link="https://strava.app.link/g5RpggDbsTbr" />
            </section>
         </div>
      </section>
   );
}

function ContactItem({ icon, label, tag, link }) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="flex items-center p-4 space-x-4 transition rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 hover:shadow-md dark:hover:shadow-md">
      <div className="text-xl">{icon}</div>
      <div className="text-gray-800 dark:text-gray-100">
        <p className="text-sm font-semibold">{label}</p>
        <p className="text-sm text-gray-600 dark:text-gray-300">{tag}</p>
      </div>
    </a>
  );
}