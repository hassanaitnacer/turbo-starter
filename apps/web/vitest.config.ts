/// <reference types="vitest" />
import { reactRouter } from "@react-router/dev/vite"
import tailwindcss from "@tailwindcss/vite"
import { defineConfig } from "vite"
import tsconfigPaths from "vite-tsconfig-paths"
import react from "@vitejs/plugin-react"

export default defineConfig(({ mode }) => ({
  plugins: [
    tailwindcss(),
    // Only use reactRouter plugin in non-test mode
    mode !== "test" ? reactRouter() : react(),
    tsconfigPaths(),
  ],
  test: {
    name: "web",
    globals: true,
    environment: "jsdom",
    setupFiles: ["./vitest.setup.ts"],
    include: ["**/*.test.{ts,tsx}"],
    reporters: ["default", "junit"],
    outputFile: {
      junit: "./test-results/junit.xml",
    },
    coverage: {
      provider: "v8",
      reporter: ["text", "json", "html", "lcov"],
      exclude: [
        "**/*.d.ts",
        "**/*.config.*",
        "**/build/**",
        "**/node_modules/**",
        "**/__tests__/utils/**", // Test utilities
      ],
      thresholds: {
        statements: 80,
        branches: 75,
        functions: 80,
        lines: 80,
      },
    },
  },
}))
