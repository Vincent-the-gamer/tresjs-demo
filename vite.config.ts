import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { templateCompilerOptions } from '@tresjs/core'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/run-tres-demo/",
  plugins: [
    vue({
      ...templateCompilerOptions
    })
  ],
  server: {
    host: "localhost",
    port: 8080
  }
})
