import { defineConfig } from 'astro/config'
import { loadEnv } from 'vite'
import storyblok from '@storyblok/astro'
import tailwind from '@astrojs/tailwind'
import vue from '@astrojs/vue'

process.env = { ...process.env, ...loadEnv(process.env.MODE, process.cwd(), '') }

// https://astro.build/config
export default defineConfig({
  integrations: [
    storyblok({
      accessToken: process.env.SB_TOKEN,
      bridge: false,
      components: {
        page: 'components/Page',
        feature: 'components/storyblok/Feature',
        grid: 'components/storyblok/Grid',
        post: 'components/storyblok/Post',
        teaser: 'components/storyblok/Teaser'
      }
    }),
    tailwind(),
    vue()
  ]
})