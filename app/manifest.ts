import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Jesus Christ Ministries Web Platform',
    short_name: 'JCM',
    description: 'A Place Where Miracles Happen — Church App Portal',
    start_url: '/',
    display: 'standalone',
    background_color: '#F8F5EE',
    theme_color: '#0B1F3A',
    icons: [
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}