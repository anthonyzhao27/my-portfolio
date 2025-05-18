import { projectData } from './projectData.jsx';
import { icons } from './icons.jsx';

export default function Projects() {
    return (
        <section id="projects" className="flex flex-col items-center justify-center w-full transition-colors duration-300 bg-gray-50 dark:bg-gray-800">
            <div className="px-6 py-20 mx-auto text-lg leading-relaxed max-w-7xl">
                <h2 className="mb-12 text-3xl font-bold text-center dark:text-gray-100">Projects</h2>
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 auto-rows-fr">
                    {projectData.map((project) => (
                        <div
                            key={project.id}
                            // className="transition-shadow bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md hover:bg-gray-200 dark:bg-gray-900 dark:border-gray-700 dark:hover:bg-gray-800 dark:hover:shadow-lg"
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
      className="flex flex-col justify-between h-full p-4 transition-shadow bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md hover:bg-gray-200 dark:bg-gray-900 dark:border-gray-700 dark:hover:bg-gray-800 dark:hover:shadow-lg"
    >
      {/* Top Section */}
      <div>
        <h1 className="mb-2 text-lg font-bold text-center dark:text-gray-100">{title}</h1>
        <p className="text-sm text-gray-800 dark:text-gray-100">{description}</p>
        <p className="mt-1 text-sm dark:text-gray-100">
          <span className="font-semibold">Role:</span> {role}
        </p>
        <div className="flex flex-wrap gap-2 mt-2">
          {techStacks.map((stack, index) => (
            <div
              key={index}
              className={`flex items-center gap-1 text-sm ${icons[stack][1]}`}
            >
              {icons[stack][0]}
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Section (buttons) */}
      <div className="flex justify-start gap-2 mt-6">
        {Object.keys(link).map((key, index) => (
          <a
            key={index}
            href={link[key]}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 text-sm text-white transition duration-300 ease-in-out bg-blue-500 rounded hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            {key}
          </a>
        ))}
      </div>
    </div>
  );
}
