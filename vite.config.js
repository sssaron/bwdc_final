import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  return {
    plugins: [svelte()],
    base: '/BWDC_FINAL_PROJECT_V2/',
  }
})