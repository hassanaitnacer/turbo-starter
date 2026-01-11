import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import { codecovVitePlugin } from "@codecov/vite-plugin"

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    codecovVitePlugin({
      enableBundleAnalysis: process.env.CODECOV_TOKEN !== undefined,
      bundleName: "storybook",
      uploadToken: process.env.CODECOV_TOKEN,
    }),
  ],
  // Monorepo configuration for hot-reload
  server: {
    watch: {
      // Watch source files in the UI package for changes
      ignored: ["!**/node_modules/@nacercodes/ui/**"],
    },
  },
  optimizeDeps: {
    // Exclude workspace packages from pre-bundling so they're treated as source code
    exclude: ["@nacercodes/ui"],
  },
})
