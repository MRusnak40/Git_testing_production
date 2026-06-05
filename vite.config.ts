import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Git_testing_production/', // Tento řádek říká Vite, že se nachází v podadresáři na GitHubu
})