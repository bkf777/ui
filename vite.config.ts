import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
        "/order": {
            target: "http://127.0.0.1:8081/",
            changeOrigin: true,
            rewrite: path => path.replace(/^\/order/, ""),
        },
        "/product": {
            target: "http://127.0.0.1:8082/",
            changeOrigin: true,
            rewrite: path => path.replace(/^\/product/, ""),
        },
        "/ware":{
            target: "http://127.0.0.1:8084/",
            changeOrigin: true,
            rewrite: path => path.replace(/^\/ware/, ""),
        }
    },
},
})
