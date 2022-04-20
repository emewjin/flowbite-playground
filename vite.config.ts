import { defineConfig } from 'vite'
import swcReact from 'vite-plugin-swc-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [swcReact()]
})
