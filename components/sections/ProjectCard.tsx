"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { getAssetPath } from "@/lib/pathHelper";
import type { Project } from "@/lib/data/projects";

// Design domain gradient (static — all projects are design)
const DESIGN_GRADIENT = "from-purple-500 to-pink-600";

type Props = {
  project: Project;
  index: number;
};

export default function ProjectCard({ project, index }: Props) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const images = project.images ?? [];
  const hasImages = images.length > 0;
  const totalImages = images.length;

  const nextImage = () => setCurrentImageIndex((prev) => (prev + 1) % totalImages);
  const prevImage = () => setCurrentImageIndex((prev) => (prev - 1 + totalImages) % totalImages);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative rounded-2xl overflow-hidden
        bg-white dark:bg-slate-800/50
        border border-slate-200 dark:border-slate-700
        shadow-sm dark:shadow-none
        hover:shadow-xl dark:hover:shadow-purple-500/10 hover:border-purple-200 dark:hover:border-slate-600
        transition-all duration-300 flex flex-col h-full"
    >
      {/* Image Section */}
      {hasImages ? (
        <div
          className="relative h-56 bg-slate-200 dark:bg-slate-900 overflow-hidden cursor-pointer"
          onClick={() => setIsModalOpen(true)}
        >
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="relative w-full h-full"
          >
            <Image
              src={getAssetPath(images[currentImageIndex])}
              alt={`${project.title} - Image ${currentImageIndex + 1}`}
              fill
              className="object-cover transition duration-300 group-hover:blur-sm"
              priority={index === 0}
              onError={(e) => {
                const target = e.currentTarget as HTMLImageElement;
                target.style.display = "none";
                const placeholder = target.nextElementSibling as HTMLElement;
                if (placeholder) placeholder.style.display = "flex";
              }}
            />
            {/* Placeholder shown when image fails to load */}
            <div
              style={{ display: "none" }}
              className="absolute inset-0 flex-col items-center justify-center bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/10"
            >
              <div className="text-5xl mb-2">🎨</div>
              <p className="text-sm text-slate-400">Image coming soon</p>
            </div>
          </motion.div>

          {/* Click hint */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
            <div className="px-3 py-1.5 text-xs md:text-sm bg-black/70 text-white rounded-full border border-white/20 shadow-lg">
              Click to see the project
            </div>
          </div>

          {/* Navigation */}
          {totalImages > 1 && (
            <>
              <button
                onClick={(e) => { e.stopPropagation(); prevImage(); }}
                className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full flex items-center justify-center hover:bg-white/40 transition-all duration-300 z-20"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-4 h-4 text-white" />
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); nextImage(); }}
                className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full flex items-center justify-center hover:bg-white/40 transition-all duration-300 z-20"
                aria-label="Next image"
              >
                <ChevronRight className="w-4 h-4 text-white" />
              </button>
            </>
          )}

          {/* Counter */}
          {totalImages > 1 && (
            <div className="absolute top-2 right-2 bg-black/60 px-2 py-1 rounded-full text-xs text-white backdrop-blur-sm z-20">
              {currentImageIndex + 1} / {totalImages}
            </div>
          )}
        </div>
      ) : (
        <div className="relative h-24 bg-slate-100 dark:bg-slate-900">
          <div className={`absolute inset-0 bg-linear-to-br ${DESIGN_GRADIENT} opacity-20 dark:opacity-50`} />
          <div className="absolute inset-0 flex items-center justify-center text-slate-700 dark:text-slate-300 font-bold text-sm capitalize">
            Design
          </div>
        </div>
      )}

      {/* Content */}
      <div className="p-3 flex-1 flex flex-col">
        <span className={`text-xs font-semibold px-2 py-0.5 bg-linear-to-r ${DESIGN_GRADIENT} bg-opacity-10 rounded-full inline-block mb-2 capitalize w-fit text-slate-700 dark:text-slate-200`}>
          {project.domain}
        </span>
        <h3 className="text-sm font-bold mb-1.5 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors text-slate-900 dark:text-white">
          {project.title}
        </h3>
        <p className="text-slate-600 dark:text-slate-400 text-xs mb-2 line-clamp-2 flex-1">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-1">
          {project.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="text-[11px] px-2 py-0.5 bg-slate-100 dark:bg-slate-700/50 border border-slate-200 dark:border-transparent text-slate-600 dark:text-slate-300 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {hasImages && isModalOpen && (
        <div
          className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="relative w-full max-w-5xl h-[70vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={getAssetPath(images[currentImageIndex])}
              alt={`${project.title} - Image ${currentImageIndex + 1}`}
              fill
              className="object-contain"
              priority={index === 0}
            />

            {totalImages > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/20 border border-white/30 rounded-full flex items-center justify-center hover:bg-white/35 transition"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-5 h-5 text-white" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/20 border border-white/30 rounded-full flex items-center justify-center hover:bg-white/35 transition"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-5 h-5 text-white" />
                </button>
              </>
            )}

            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 px-3 py-1.5 bg-white/15 border border-white/30 rounded-full text-white text-sm hover:bg-white/25 transition"
              aria-label="Close"
            >
              Close
            </button>

            {totalImages > 1 && (
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {images.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentImageIndex(idx)}
                    className={`h-2 rounded-full transition-all ${idx === currentImageIndex ? "bg-white w-6" : "bg-white/50 w-2"}`}
                    aria-label={`Go to image ${idx + 1}`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </motion.div>
  );
}
