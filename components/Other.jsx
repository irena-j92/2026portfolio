'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { workData } from '../assets/assets'

const Other = ({ currentProjectId }) => {
  const otherProjects = workData.filter(
    (project) =>
      project.id !== currentProjectId &&
      project.id !== 5 &&
      project.id !== 6
  )

  return (
    <div className="mt-20 lg:mt-40">
      <h2 className="mb-2 text-[#c4c4c4] uppercase font-[700] mx-10">[Other work]</h2>
      <section className="grid grid-cols-2 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-3 gap-4 mb-40 mx-10">
        {otherProjects.map((project) => (
          <div key={project.id}>
            <Link
              href={project.link}
              className="relative aspect-square overflow-hidden block"
            >
              <Image
                src={project.bgImage}
                alt={project.title}
                fill
                className="object-cover grayscale hover:grayscale-0 transition-transform duration-500 hover:scale-110"
              />
            </Link>
            
            {/* Text content under image */}
            <div className="mt-2">
              <h3 className="text-white font-semibold hover hover:text-[#c4c4c4]">
                {project.title}
              </h3>
              {project.description && (
                <p className="text-[#c4c4c4] text-sm">
                  {project.description}
                </p>
              )}
            </div>
          </div>
        ))}
      </section>
    </div>
  )
}

export default Other