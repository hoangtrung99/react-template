import { TanStackRouterVite } from '@tanstack/router-plugin/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

const routeFileIgnorePattern = [
  '((css|constants|types|utils|routes|Layout).(ts|tsx))',
  'components|hooks|utils|views|stores|contexts|providers|config|schema|types'
].join('|')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    TanStackRouterVite({
      routeFileIgnorePattern,
      routesDirectory: './src/app'
    }),
    react(),
    tsconfigPaths()
  ]
})
