module.exports = {
  async redirects() {
    return [
      {
        source: '/usaco-classes',
        destination: 'https://anai.blog/',
        permanent: false,
      }
    ]
  },
  async rewrites() {
    return {
      // We need this rewrite in beforeFiles, otherwise
      // tcw.sh will still serve the normal homepage
      beforeFiles: [
        {
          source: '/',
          has: [
            {
              type: 'host',
              value: 'tcw.sh',
            },
          ],
          destination: '/l/',
        },
      ]
    }
  },
}
/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,  // ✅ skips type checking on build
  },
  eslint: {
    ignoreDuringBuilds: true,  // ✅ skips linting on build
  },
}

module.exports = nextConfig