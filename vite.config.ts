import { defineConfig } from 'vite'
import { createVuePlugin } from 'vite-plugin-vue2'
import components from 'unplugin-vue-components/vite'
import { VuetifyResolver } from 'unplugin-vue-components/resolvers'

import Inspect from 'vite-plugin-inspect'

import path from 'path'
import fs from 'fs'

const ABS_ROOT_DIR = path.resolve(__dirname, 'src/')


let sassAdditionalData
if (fs.existsSync(path.resolve(ABS_ROOT_DIR, 'styles/variables.sass'))) {
  sassAdditionalData = '\n@import \'@/styles/variables.sass\'\n'
}

let scssAdditionalData
if (fs.existsSync(path.resolve(ABS_ROOT_DIR, 'styles/variables.scss'))) {
  scssAdditionalData = '\n@import \'@/styles/variables.scss\'\n'
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    createVuePlugin(/* options */),
    components({
      resolvers: [
        VuetifyResolver(),
      ],
    }),
    Inspect(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  css: {
    preprocessorOptions: {
      sass: {
        additionalData: sassAdditionalData,
      },
      scss: {
        additionalData: scssAdditionalData,
      },
    },
  },
  server: {
    port: 8080,
  },
})
