import qs from 'qs'
import { unstable_noStore as noStore } from 'next/cache'
import { flattenAttributes, getStrapiURL } from '@/lib/utils'
import { link } from 'fs'

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
          'layout.hero-section': {
            populate: {
              socialLinks: true,
            },
          },
          'layout.photos-section': {
            populate: {
              photos: {
                populate: {
                  fields: ['url', 'alternativeText'],
                },
              },
            },
          },
          'layout.information-section': {
            populate: {
              newsletter: true,
              resumes: true,
            },
          },
        },
      },
    },
  })

  return await fetchData(url.href)
}

export async function getHeaderData() {
  noStore()

  const url = new URL('/api/header', baseUrl)

  url.search = qs.stringify({
    populate: {
      headerLink: {
        populate: true,
      },
      avatar: {
        fields: ['url', 'alternativeText'],
      },
    },
  })

  return await fetchData(url.href)
}

export async function getFooterData() {
  noStore()

  const url = new URL('/api/footer', baseUrl)

  url.search = qs.stringify({
    populate: {
      footerLink: {
        populate: true,
      },
    },
  })

  return await fetchData(url.href)
}

export async function getProjectsPageData() {
  noStore()

  const url = new URL('/api/projects-page', baseUrl)

  url.search = qs.stringify({
    populate: {
      githubProjects: {
        populate: '*',
      },
    },
  })

  return await fetchData(url.href)
}
