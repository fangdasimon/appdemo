import { loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'

export default ({ mode }) => {
  const ENV = loadEnv(mode, process.cwd())
  return {
    base: ENV.VITE_PUBLIC_PATH,
    plugins: [
      vue(),
    ],
    server: {
      open: true,
      proxy: {
        [ENV.VITE_API_BASE]: {
          target: ENV.VITE_SERVER_HOST,
          changeOrigin: true,
        },
      },
    },
  }
}
