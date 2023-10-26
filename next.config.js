/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["images.pexels.com"],
        formats: ['image/avif', 'image/webp' ],
        remotePatterns:[
            {
                protocol: 'https',
                hostname: 'images.pexels.com',
                port: '',
                pathname: '/NotSooShariff/bif-frontend/main/src/assets/*'
            },{
                protocol: 'https',
                hostname: 'avatars.githubusercontent.com',
                port: '',
                pathname: '/u/*'
            }
        ]
    }
}

module.exports = nextConfig
