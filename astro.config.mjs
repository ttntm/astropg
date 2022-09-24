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
        // Content types
        page: 'components/storyblok/Page',
        post: 'components/storyblok/Post',
        
        // Sections
        feature: 'components/storyblok/sections/Feature',
        grid: 'components/storyblok/sections/Grid',
        
        // Bloks
        teaser: 'components/storyblok/bloks/Teaser'
      }
    }),
    tailwind(),
    vue()
  ]
})