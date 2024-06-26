import { defineConfig, loadEnv } from 'vite'
import path from "path"
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default ({ mode }) => {
  // Load app-level env vars to node-level env vars.
  const env = loadEnv(mode, process.cwd());
  const baseUrl = env.VITE_BASE;
  return defineConfig({
    plugins: [
      react()
    ],
    base: baseUrl,
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  })
};
