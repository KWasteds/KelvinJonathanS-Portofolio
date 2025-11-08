"use client"

import React from "react"
import Image from "next/image"
import Link from "next/link"
import SlideUp from "./SlideUp"
import { BsGithub } from "react-icons/bs"
import AutoSlideImage from "./AutoSlideImage"

type Project = {
  name: string
  description: string
  images?: string[]
  image?: string
  github: string
  slides?: string | null
  role: string
}

const projects = [
  {
    name: "CekSawit",
    description:
      "Mobile application developed using Kotlin and Android Studio to help palm oil farmers and NGOs record, manage, and validate plantation report data efficiently.",
    images: [
      "/docs/slides/CekSawit/1.png",
      "/docs/slides/CekSawit/2.png",
      "/docs/slides/CekSawit/3.png",
      "/docs/slides/CekSawit/4.png",
      "/docs/slides/CekSawit/5.png",
      "/docs/slides/CekSawit/6.png",
      "/docs/slides/CekSawit/7.png",
      "/docs/slides/CekSawit/8.png",
      "/docs/slides/CekSawit/9.png",
      "/docs/slides/CekSawit/10.png",
      "/docs/slides/CekSawit/11.png",
    ],
    github: "https://github.com/KWasteds/LSMSawit_ProjekMAP",
    slides: "/docs/CekSawit.pdf",
    role: "Back-End Developer",
  },
  {
    name: "Rice Price Prediction",
    description:
      "Machine learning project that utilizes Python, Pandas, and Scikit-learn to predict rice prices in Central Kalimantan based on historical data and external market indicators.",
    images: [
      "/docs/slides/RicePricePrediction/1.png",
    "/docs/slides/RicePricePrediction/2.png",
    "/docs/slides/RicePricePrediction/3.png",
    "/docs/slides/RicePricePrediction/4.png",
    "/docs/slides/RicePricePrediction/5.png",
    "/docs/slides/RicePricePrediction/6.png",
    "/docs/slides/RicePricePrediction/7.png",
    "/docs/slides/RicePricePrediction/8.png",
    "/docs/slides/RicePricePrediction/9.png",
    "/docs/slides/RicePricePrediction/10.png",
    "/docs/slides/RicePricePrediction/11.png",
    "/docs/slides/RicePricePrediction/12.png",
    "/docs/slides/RicePricePrediction/13.png",
    "/docs/slides/RicePricePrediction/14.png",
    "/docs/slides/RicePricePrediction/15.png",
    "/docs/slides/RicePricePrediction/16.png",
    "/docs/slides/RicePricePrediction/17.png",
    "/docs/slides/RicePricePrediction/18.png",
    "/docs/slides/RicePricePrediction/19.png",
    "/docs/slides/RicePricePrediction/20.png",
    "/docs/slides/RicePricePrediction/22.png",
    "/docs/slides/RicePricePrediction/23.png",
    "/docs/slides/RicePricePrediction/24.png",
    "/docs/slides/RicePricePrediction/25.png",
    "/docs/slides/RicePricePrediction/26.png",
    "/docs/slides/RicePricePrediction/27.png",
    "/docs/slides/RicePricePrediction/28.png",
    "/docs/slides/RicePricePrediction/29.png",
    "/docs/slides/RicePricePrediction/30.png",
    "/docs/slides/RicePricePrediction/31.png",
    "/docs/slides/RicePricePrediction/32.png",
    "/docs/slides/RicePricePrediction/33.png",
    "/docs/slides/RicePricePrediction/34.png",
    "/docs/slides/RicePricePrediction/35.png",
    "/docs/slides/RicePricePrediction/36.png",
    "/docs/slides/RicePricePrediction/38.png",
    "/docs/slides/RicePricePrediction/39.png",
    "/docs/slides/RicePricePrediction/40.png",
    "/docs/slides/RicePricePrediction/42.png",
    "/docs/slides/RicePricePrediction/43.png",
    "/docs/slides/RicePricePrediction/44.png",
    "/docs/slides/RicePricePrediction/45.png",
    "/docs/slides/RicePricePrediction/46.png",
    "/docs/slides/RicePricePrediction/47.png",
    "/docs/slides/RicePricePrediction/48.png",
    "/docs/slides/RicePricePrediction/49.png",
    "/docs/slides/RicePricePrediction/50.png",
    "/docs/slides/RicePricePrediction/51.png",
    ],
    github: "https://github.com/KWasteds/PrediksiHargaBerasKalimantanTengah_ProjekMachineLearning",
    slides: "/docs/RicePricePrediction.pdf",
    role: "Data & Model Developer",
  },
  {
    name: "Orphanage Website",
    description:
      "Website developed to provide centralized information, event updates, donation options, and volunteer opportunities for Yayasan Nurul Jadid orphanage.",
    image: "/yayasannuruljadid.png",
    github: "https://github.com/Gr1X/Webpanti",
    slides: null,
    role: "Back-End Developer",
  },
]

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h1 className="my-10 text-center font-bold text-4xl">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded" />
      </h1>

      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => (
          <div key={idx}>
            <SlideUp offset="-300px 0px -300px 0px">
              <div className="flex flex-col md:flex-row md:space-x-12 animate-slideUpCubiBezier">

                {/* IMAGE / SLIDESHOW */}
                <div className="md:w-1/2">
                {project.images ? (
                  <AutoSlideImage
                    images={project.images}
                    link={project.slides}
                  />
                ) : (
                  <div className="relative w-full aspect-[16/9] overflow-hidden rounded-xl shadow-xl">
                    <Link href={project.github} target="_blank">
                      <Image
                        src={project.image!}
                        alt={project.name}
                        fill
                        className="object-contain hover:opacity-70 cursor-pointer transition"
                      />
                    </Link>
                  </div>
                )}
              </div>

                {/* TEXT */}
                <div className="md:w-1/2 flex flex-col justify-start">
                  <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                  <p className="text-xl mb-1 text-neutral-600 dark:text-neutral-400">
                    {project.description}
                  </p>
                  <p className="text-md mb-4 font-semibold text-teal-600">{project.role}</p>

                  <div className="flex flex-row space-x-4">
                    <Link href={project.github} target="_blank">
                      <BsGithub size={30} className="hover:-translate-y-1 transition-transform cursor-pointer" />
                    </Link>
                  </div>
                </div>

              </div>
            </SlideUp>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ProjectsSection