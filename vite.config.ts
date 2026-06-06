import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Git_testing_production/', // <--- TENTO ŘÁDEK SEM PŘIDEJ (včetně lomítek!)
})
