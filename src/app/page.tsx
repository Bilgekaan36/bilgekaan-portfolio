import HeroSection from '@/components/custom/HeroSection'
import { InformationSection } from '@/components/custom/InformationSection'
import { PhotosSection } from '@/components/custom/PhotosSection'
import { getHomePageData } from '@/data/loaders'

function blockRenderer(block: any) {
  switch (block.__component) {
    case 'layout.hero-section':
      return <HeroSection key={block.id} data={block} />
    case 'layout.photos-section':
      return <PhotosSection key={block.id} data={block} />
    case 'layout.information-section':
      return <InformationSection key={block.id} data={block} />
    default:
      return null
  }
}

export default async function Home() {
  const strapiData = await getHomePageData()

  console.log(strapiData)
  const { blocks } = strapiData

  if (!blocks) return <div>No blocks found</div>

  return <main>{blocks.map((block: any) => blockRenderer(block))}</main>
}
