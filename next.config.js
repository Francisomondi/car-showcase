/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        domains: ['cdn.imagin.studio']
    },

    trpescript:{
        ignoreBuildErrors: true,
    }
}

module.exports = nextConfig
