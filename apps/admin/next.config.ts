import type { NextConfig } from "next"

const allowedOrigins = process.env.ALLOWED_DEV_ORIGINS
  ? process.env.ALLOWED_DEV_ORIGINS.split(",").map((origin) => origin.trim())
  : []

const nextConfig: NextConfig = {
  ...(allowedOrigins.length > 0 && { allowedDevOrigins: allowedOrigins }),
}

export default nextConfig
