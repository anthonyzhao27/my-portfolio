import { projectData } from './projectData.jsx';
import { icons } from './icons.jsx';

export default function Projects() {
    return (
        <section id="projects" className="section-padding bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
                        Featured Projects
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        Here are some of the projects I've worked on, showcasing my skills in web development and design.
                    </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projectData.map((project, index) => (
                        <div
                            key={project.id}
                            className="group"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <ProjectCard {...project} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function ProjectCard({ id, title, description, techStacks, role, link}) {
  return (
    <div
      id={id}
      className="h-full bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200/50 dark:border-gray-700/50 overflow-hidden group"
    >
      {/* Card Header */}
      <div className="p-6 border-b border-gray-200/50 dark:border-gray-700/50">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
          {description}
        </p>
      </div>

      {/* Card Body */}
      <div className="p-6 flex-1">
        <div className="mb-4">
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
            <span className="font-semibold text-blue-600 dark:text-blue-400">Role:</span>
          </p>
          <p className="text-sm text-gray-700 dark:text-gray-300">
            {role}
          </p>
        </div>

        {/* Tech Stack */}
        <div className="mb-6">
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-2 font-semibold">
            Technologies Used:
          </p>
          <div className="flex flex-wrap gap-2">
            {techStacks.map((stack, index) => (
              <div
                key={index}
                className={`flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 transition-all duration-300 hover:scale-105 ${icons[stack][1]}`}
              >
                {icons[stack][0]}
                <span>{stack}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-2">
          {Object.keys(link).map((key, index) => (
            <a
              key={index}
              href={link[key]}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500/50 text-center"
            >
              {key}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
