import { projects } from "@/data/projects";
import Image from "next/image";
import Link from "next/link";

export default function Projects() {
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 dark:text-white">Projects</h2>

        {/* Featured Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {projects
            .filter((project) => project.type === "featured")
            .map((project) => (
              <div
                key={project.title}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transition-transform hover:scale-[1.02]"
              >
                <Image
                  alt="Project Photo"
                  width={480}
                  height={300}
                  className="h-48 sm:w-96 object-top bg-top bg-contain object-cover"
                  src={project.image}
                />
                <h3 className="text-xl font-semibold mb-3 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.link && (
                    <Link
                      href={project.link}
                      target="_blank"
                      className="text-blue-600 dark:text-blue-400 hover:underline text-sm"
                    >
                      Visit Website
                    </Link>
                  )}
                  {project.github && (
                    <Link
                      href={project.github}
                      target="_blank"
                      className="text-gray-600 dark:text-gray-400 hover:underline text-sm"
                    >
                      GitHub
                    </Link>
                  )}
                  {project.youtube && (
                    <Link
                      href={project.youtube}
                      target="_blank"
                      className="text-blue-600 dark:text-blue-400 hover:underline text-sm"
                    >
                      Demo Video
                    </Link>
                  )}
                </div>
              </div>
            ))}
        </div>

        {/* Other Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <div>
            <h3 className="text-xl font-semibold mb-4 dark:text-white">
              Open Source
            </h3>
            {projects
              .filter((project) => project.type === "open-source")
              .map((project) => (
                <div
                  key={project.title}
                  className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transition-transform hover:scale-[1.02]"
                >
                  <Image
                    alt="Project Photo"
                    width={480}
                    height={300}
                    className="h-48 sm:w-96 object-top bg-top bg-contain object-cover"
                    src={project.image}
                  />
                  <h4 className="font-medium mb-2 dark:text-white">
                    {project.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">
                    {project.description}
                  </p>
                  {project.link && (
                    <Link
                      href={project.link}
                      target="_blank"
                      className="text-blue-600 dark:text-blue-400 hover:underline text-sm"
                    >
                      View Project
                    </Link>
                  )}
                </div>
              ))}
          </div>
        </div>

        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"> */}
        <div>
          <h3 className="text-xl font-semibold mb-4 dark:text-white">
            Interfaces
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {projects
              .filter((project) => project.type === "interface")
              .map((project) => (
                <div
                  key={project.title}
                  className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transition-transform hover:scale-[1.02]"
                >
                  <Image
                    alt="Project Photo"
                    width={480}
                    height={300}
                    className="h-48 sm:w-96 object-top bg-top bg-contain object-cover"
                    src={project.image}
                  />
                  <h4 className="font-medium mb-2 dark:text-white">
                    {project.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">
                    {project.description}
                  </p>
                  {project.link && (
                    <Link
                      href={project.link}
                      target="_blank"
                      className="text-blue-600 dark:text-blue-400 hover:underline text-sm"
                    >
                      View Interface
                    </Link>
                  )}
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}
