'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { workData } from '../assets/assets'

const Other = ({ currentProjectId }) => {
  // Filter out:
  // 1️⃣ current project
  // 2️⃣ projects with id 5 or 6
  const otherProjects = workData.filter(
    (project) =>
      project.id !== currentProjectId &&
      project.id !== 5 &&
      project.id !== 6
  )

  return (
    <div className="mt-20 lg:mt-40">
      <h2 className="mb-2 text-[#c4c4c4] uppercase font-[800] mx-10">[Other work]</h2>

      <section className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-3 gap-4 mb-40 mx-10">
        {otherProjects.map((project) => (
          <Link
            key={project.id}
            href={project.link}
            className="relative aspect-square overflow-hidden"
          >
            <div><Image
              src={project.bgImage}
              alt={project.title}
              fill
              className="object-cover grayscale hover hover:grayscale-0 transition-transform duration-500 group-hover:scale-110"
            /></div>

            {/* Text content under image */}
            <div className="mt-3">
              <h3 className="text-white font-semibold text-sm">
                {project.title}
              </h3>

              {project.description && (
                <p className="text-gray-400 text-xs mt-1">
                  {project.description}
                </p>
              )}
            </div>
          </Link>
        ))}
         
      </section>
    </div>
  )
}

export default Other
