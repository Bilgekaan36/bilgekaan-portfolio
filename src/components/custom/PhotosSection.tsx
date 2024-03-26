import Image from 'next/image'
import clsx from 'clsx'
import { getStrapiMedia } from '@/lib/utils'

export function PhotosSection({ data }: any) {
  const photos = data.photos.data
  let rotations = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2']

  photos.map((photo: any) => {
    photo.url = getStrapiMedia(photo.url)
  })
  return (
    <div className="mt-16 sm:mt-20">
      <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
        {photos.map((image: any, imageIndex: any) => (
          <div
            key={image.url}
            className={clsx(
              'relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl dark:bg-zinc-800',
              rotations[imageIndex % rotations.length],
            )}
          >
            <Image
              src={image.url}
              alt={image.alternativeText || 'Photo'}
              sizes="(min-width: 640px) 18rem, 11rem"
              className="absolute inset-0 h-full w-full object-cover"
              width={image.width}
              height={image.height}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
