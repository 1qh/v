import { fileURLToPath } from 'url'
import createJiti from 'jiti'

// Import env files to validate at build time. Use jiti so we can load .ts files in here.
createJiti(fileURLToPath(import.meta.url))('./src/env')

/** @type {import("next").NextConfig} */
const config = {
  /** We already do linting and typechecking as separate tasks in CI */
  eslint: { ignoreDuringBuilds: true },

  experimental: { serverActions: { bodySizeLimit: '4.5mb' } },
  images: { remotePatterns: [{ hostname: '*' }] },
  reactStrictMode: true,

  /** Enables hot reloading for local packages without a build step */
  transpilePackages: ['@a/ui'],
  typescript: { ignoreBuildErrors: true }
}

export default config
