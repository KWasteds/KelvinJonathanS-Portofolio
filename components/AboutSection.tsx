import React from "react"
import Image from "next/image"

const skills = [
  { skill: "C++" },
  { skill: "Java" },
  { skill: "JavaScript" },
  { skill: "Python" },
  { skill: "Kotlin" },
  { skill: "SQL" },
  { skill: "Firebase" },
  { skill: "Git" },
  { skill: "Android Studio" },
]

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded" />
        </h1>

        <div className="flex flex-col space-y-10 md:space-y-0 md:flex-row md:space-x-10 md:p-4 md:text-left items-stretch">
          {/* LEFT: text column */}
          <div className="md:w-1/2">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Get to know me!
            </h1>
            <p>
              Hi, my name is Kelvin and I am an Informatics student at Multimedia
              Nusantara University with strong interests in{" "}
              <span className="font-bold">Back-end Development</span>,
              <span className="font-bold"> Databases</span>,{" "}
              <span className="font-bold">Machine Learning</span>, and{" "}
              <span className="font-bold"> Cybersecurity</span>.
            </p>
            <br />
            <p>
              I enjoy building functional and efficient applications using
              languages and tools such as Java, Python, JavaScript, Kotlin, SQL,
              and Firebase. I have worked on web, mobile, and data-driven
              projects that helped me develop strong problem-solving and
              analytical thinking skills.
            </p>
            <br />
            <p>
              I actively explore how different technologies can work together to
              create meaningful digital solutions. I value collaboration,
              continuous learning, and adaptability, especially when working in
              team environments.
            </p>
            <br />
            <p>
              I believe in{" "}
              <span className="font-bold text-teal-500">
                growing through experience
              </span>{" "}
              and am always motivated to learn new concepts, frameworks, and
              development practices. I am currently open to internship
              opportunities where I can contribute, collaborate, and further
                develop my skills.
            </p>
          </div>

          {/* RIGHT: skills + image column */}
          {/* CHANGED: 
            1. Added `items-center md:items-start` to center on mobile and left-align on desktop.
            2. Added `justify-between` to push skills to top and image to bottom.
          */}
          <div className="md:w-1/2 flex flex-col items-center md:items-start justify-between">
            {/* NEW: Added a wrapper div to group skills together */}
            <div>
              <h1 className="text-2xl font-bold mb-6 text-center md:text-left">
                My Skills
              </h1>
              <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
                {skills.map((item, idx) => (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                  >
                    {item.skill}
                  </p>
                ))}
              </div>
            </div>

            {/* Image container */}
            <div
              className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 lg:w-[22rem]
                         max-h-[60vh] rounded-xl overflow-hidden border-4 border-white-500
                         shadow-[0_4px_6px_rgba(0,0,0,0.3)] mt-10 md:mt-0 ml-7"
            >
              <Image
                src="/photo.jpg"
                alt="Profile illustration"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection