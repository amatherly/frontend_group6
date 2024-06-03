/** @type {import('next').NextConfig} */
const nextConfig = {
    // future: {
    //     webpack5: true,
    // },

    webpack(config) {
        config.resolve.fallback = {
            ...config.resolve.fallback,
            fs: false,
        };

        return config;
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.gr-assets.com',
                port: '',
                pathname: '/books/**',
            },
            {
                protocol: 'https',
                hostname: 's.gr-assets.com',
                port: '',
                pathname: '/assets/**',
            },
        ],
        domains: ['images.gr-assets.com'],
    },
};

export default nextConfig;

