import qs from 'qs'
import { unstable_noStore as noStore } from 'next/cache'
import { flattenAttributes, getStrapiURL } from '@/lib/utils'

const baseUrl = getStrapiURL()

async function fetchData(url: string) {
  const authToken = null
  const headers = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${authToken}`,
    },
  }

  try {
    const response = await fetch(url, authToken ? headers : {})
    const data = await response.json()
    return flattenAttributes(data)
  } catch (error) {
    console.error('Error fetching data:', error)
    throw error // or return null;
  }
}

export async function getHomePageData() {
  const url = new URL('/api/home-page', baseUrl)

  url.search = qs.stringify({
    populate: {
      blocks: {
        on: {
          'layout.hero-section': true, // Populate 'hero-section' block
          'layout.photos-section': {
            populate: {
              photos: {
                populate: {
                  fields: ['url', 'alternativeText'],
                },
              },
            },
          },
          'layout.information-section': true, // Populate 'hero-section' block
        },
      },
    },
  })

  return await fetchData(url.href)
}

export async function getGlobalPageData() {
  noStore()

  const url = new URL('/api/global', baseUrl)

  url.search = qs.stringify({
    populate: {
      header: {
        populate: {
          headerLink: {
            populate: true,
          },
          avatar: {
            fields: ['url', 'alternativeText'],
          },
        },
      },
      footer: {
        populate: {
          footerLink: {
            populate: true,
          },
        },
      },
    },
  })

  return await fetchData(url.href)
}

export async function getGlobalPageMetadata() {
  const url = new URL('/api/global', baseUrl)

  url.search = qs.stringify({
    fields: ['title', 'description'],
  })

  return await fetchData(url.href)
}
