import React from 'react'
import { ContainerScroll } from '@/components/ui/container-scroll-animation'
import Image from 'next/image'
import { Video } from '@/components/Video'

export default function Showcases() {
  const url = [
    'http://127.0.0.1:1337/uploads/Screen_Recording_2024_04_20_at_17_56_45_a96ccde5c6.mov',
  ]

  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-black dark:text-white">
              Some of my selected <br />
              <span className="mt-1 text-4xl font-bold leading-none md:text-[6rem]">
                Showcases
              </span>
            </h1>
          </>
        }
      >
        {/* <Image
          src={`/linear.webp`}
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto h-full rounded-2xl object-cover object-left-top"
          draggable={false}
        /> */}
        <Video url={url.length > 0 ? url[0] : ''} />
      </ContainerScroll>
    </div>
  )
}
