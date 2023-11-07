/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["images.pexels.com", "miro.medium.com", "raw.githubusercontent.com", "pbs.twimg.com",  "flowbite.s3.amazonaws.com"],
        formats: ['image/avif', 'image/webp' ],
        remotePatterns:[
            {
                protocol: 'https',
                hostname: 'raw.githubusercontent.com',
                port: '',
                pathname: '/NotSooShariff/bif-frontend/main/src/assets/*'
            },{
                protocol: 'https',
                hostname: 'avatars.githubusercontent.com',
                port: '',
                pathname: '/u/*'
            }
        ]
    },
}

module.exports = nextConfig
