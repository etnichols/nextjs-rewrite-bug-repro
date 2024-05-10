/** @type {import('next').NextConfig} */
const nextConfig = {
    rewrites: async () => {
        return {
          fallback: [
            {
              source: '/:path*',
              destination: `https://jsonplaceholder.typicode.com/posts`,
            },
          ],
        };
      },
};

export default nextConfig;