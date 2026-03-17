import { Suspense } from "react";
import { Github, ExternalLink } from "lucide-react";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import { portfolioProjects } from "@/lib/data/projects";
import { getAssetPath } from "@/lib/pathHelper";

function ProjectsContent() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-3 text-slate-900 dark:text-white">
              All{" "}
              <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-teal-500 bg-clip-text text-transparent">
                Projects
              </span>
            </h1>
            <p className="text-slate-600 dark:text-slate-400 max-w-xl">
              A collection of my completed work across Full Stack development, microservices, and data analytics.
            </p>
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {portfolioProjects.map((project) => (
              <div
                key={project.title}
                className="group relative rounded-2xl overflow-hidden
                  bg-white dark:bg-slate-800/50
                  border border-slate-200 dark:border-slate-700
                  shadow-md hover:shadow-xl dark:hover:shadow-purple-500/10
                  hover:border-purple-300 dark:hover:border-purple-500/30
                  transition-all duration-400 flex flex-col"
              >
                {/* Image */}
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={getAssetPath(project.image)}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                  {/* Category badge */}
                  <span
                    className={`absolute top-3 left-3 text-xs font-semibold px-3 py-1.5 bg-gradient-to-r ${project.gradient} rounded-full text-white shadow-sm`}
                  >
                    {project.category}
                  </span>

                  {/* GitHub icon */}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute top-3 right-3 w-9 h-9 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full flex items-center justify-center hover:bg-white/40 transition-all duration-300"
                      aria-label="View on GitHub"
                    >
                      <Github className="w-4 h-4 text-white" />
                    </a>
                  )}
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <h2 className="text-lg font-bold mb-2 text-slate-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                    {project.title}
                  </h2>
                  <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 leading-relaxed flex-1">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] px-2.5 py-1 bg-slate-100 dark:bg-slate-700/50 border border-slate-200 dark:border-slate-600/50 text-slate-600 dark:text-slate-300 rounded-full font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action */}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2.5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-xl text-sm font-semibold hover:opacity-90 transition-all shadow-sm w-fit"
                    >
                      <ExternalLink className="w-4 h-4" />
                      View on GitHub
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default function ProjectsPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-950">
          <div className="text-slate-600 dark:text-slate-400">Loading projects...</div>
        </div>
      }
    >
      <ProjectsContent />
    </Suspense>
  );
}