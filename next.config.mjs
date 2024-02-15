/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/pressure',
        permanent: false
      }
    ]
  },
}

export default nextConfig
