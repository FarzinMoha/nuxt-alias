import { resolve } from 'path'

export default defineNuxtConfig({
  devtools: { enabled: true },
  dir: {
    assets: 'brand_a/assets',
    pages: 'common/pages',
    layouts:'brand_a/layouts'
  },
  alias: {
    realpages: resolve(__dirname, "./brand_a/pages"),
  },
})
