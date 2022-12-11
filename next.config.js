/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental:{appDir: true},
  // async rewrites() {
  //   return [
  //     {
  //       source: "/api/:path*",
  //       detination: fill in when backend complete
  //     }
  //   ]
  // }
}

module.exports = nextConfig
