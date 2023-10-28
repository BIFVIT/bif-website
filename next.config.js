/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["images.pexels.com", "raw.githubusercontent.com", "pbs.twimg.com",  "flowbite.s3.amazonaws.com"],
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
    // webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    //     // Add a new rule to handle .mov files with file-loader
    //     config.module.rules.push({
    //       test: /\.(mov)$/,
    //       use: [
    //         {
    //           loader: 'file-loader',
    //           options: {
    //             publicPath: '/_next',
    //             name: 'static/media/[name].[ext]', // You can customize the output path and filename
    //           },
    //         },
    //       ],
    //     });
    // }
}

module.exports = nextConfig
