/** @type {import('next').NextConfig} */
const nextConfig = {
    // Can be safely removed in newer versions of Next.js
    future: {

        // by default, if you customize webpack config, they switch back to version 4.
        // Looks like backward compatibility approach.
        webpack5: true,
    },

    webpack(config) {
        config.resolve.fallback = {

            // if you miss it, all the other options in fallback, specified
            // by next.js will be dropped.
            ...config.resolve.fallback,

            fs: false, // the solution
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

