import Image from 'next/image'
import { getStrapiMedia } from '@/lib/utils'
import { Container } from '@/components/Container'
import { GlobeComponent } from '@/components/GlobeComponent'
import { GitHubIcon, LinkedInIcon } from '@/components/SocialIcons'
import Link from 'next/link'

interface HeroSectionProps {
  data: {
    id: number
    __component: string
    title: string
    description: string
    socialLinks: {
      socialMedia: string
      link: string
    }[]
  }
}

function SocialLink({
  icon: Icon,
  ...props
}: React.ComponentPropsWithoutRef<typeof Link> & {
  icon: React.ComponentType<{ className?: string }>
}) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  )
}

export function HeroSection({ data }: Readonly<HeroSectionProps>) {
  const { title, description, socialLinks } = data
  console.log(data)
  return (
    <Container className="relative mt-9">
      <div className="max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
          {title}
        </h1>
        <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
          {description}
        </p>
        <div className="mt-6 flex gap-6">
          {socialLinks.map((socialLink: any) => (
            <SocialLink
              href={socialLink.link}
              key={socialLink.socialMedia}
              aria-label={'Follow on' + socialLink.socialMedia}
              target="_blank"
              icon={socialLink.socialMedia}
            />
          ))}
          {/* <SocialLink
            href="https://github.com/bilgekaan36"
            aria-label="Follow on GitHub"
            target="_blank"
            icon={GitHubIcon}
          />
          <SocialLink
            href="https://linkedin.com/in/bilgekaan-yilmaz-107888228"
            aria-label="Follow on LinkedIn"
            target="_blank"
            icon={LinkedInIcon}
          /> */}
        </div>
      </div>
      <GlobeComponent />
    </Container>
  )
}

export default HeroSection
