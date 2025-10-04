import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Always use a trailing slash for base path when deploying to Tomcat subfolder
export default defineConfig({
    plugins: [react()],
    base: '/reactlibraryapi/',
    build: {
        outDir: 'dist'
    }
})
