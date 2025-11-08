"use client"
import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { HiChevronLeft, HiChevronRight } from "react-icons/hi"

function AutoSlideImage({ images, link }: { images: string[], link: string }) {
  const [index, setIndex] = useState(0)

  const nextSlide = () => setIndex((prev) => (prev + 1) % images.length)
  const prevSlide = () => setIndex((prev) => (prev - 1 + images.length) % images.length)

  useEffect(() => {
    const interval = setInterval(nextSlide, 10000)
    return () => clearInterval(interval)
  }, [images.length])

  return (
    <div className="relative group w-full">
      {/* Fixed aspect ratio container */}
      <Link href={link} target="_blank">
        <div className="relative w-full aspect-[16/9] overflow-hidden rounded-xl shadow-xl cursor-pointer">
          <div
            className="flex h-full transition-transform duration-[700ms] ease-in-out"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {images.map((src, i) => (
              <div key={i} className="w-full h-full flex-shrink-0 relative">
                <Image
                  src={src}
                  alt={`Slide ${i}`}
                  fill
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </Link>

      {/* Prev */}
      <button
        type="button"
        onClick={(e) => { e.stopPropagation(); prevSlide(); }}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition"
      >
        <HiChevronLeft size={22} />
      </button>

      {/* Next */}
      <button
        type="button"
        onClick={(e) => { e.stopPropagation(); nextSlide(); }}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition"
      >
        <HiChevronRight size={22} />
      </button>
    </div>
  )
}

export default AutoSlideImage
