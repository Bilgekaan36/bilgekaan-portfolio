import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { getFooterData, getHeaderData } from '@/data/loaders'
import { getStrapiMedia } from '@/lib/utils'

export interface Header {
  headerLink: {
    url: string
    text: string
    isExternal: boolean
  }[]
  avatar: {
    url: string
    alternativeText: string
  }
}

export interface Footer {
  footerLink: {
    url: string
    text: string
    isExternal: boolean
  }[]
  footerText: string
}

export async function Layout({ children }: { children: React.ReactNode }) {
  const header: Readonly<Header> = await getHeaderData()
  const footer: Readonly<Footer> = await getFooterData()
  const url = await getStrapiMedia(header.avatar.url)
  if (url) {
    header.avatar.url = url
  }

  return (
    <>
      <div className="fixed inset-0 flex justify-center sm:px-8">
        <div className="flex w-full max-w-7xl lg:px-8">
          <div className="w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20" />
        </div>
      </div>
      <div className="relative flex w-full flex-col">
        <Header data={header} />
        <main className="flex-auto">{children}</main>
        <Footer data={footer} />
      </div>
    </>
  )
}
