import { resolve } from 'path'
import { UserConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Markdown from 'vite-plugin-md'
import prism from 'markdown-it-prism'
import ViteIcons, { ViteIconsResolver } from 'vite-plugin-icons'
import ViteComponents from 'vite-plugin-components'

const config: UserConfig = {
  plugins: [
    Vue({
      include: [/\.vue$/, /\.md$/],
    }),

    Markdown({
      markdownItUses: [
        prism,
      ],
    }),

    ViteComponents({
      dirs: ['components'],
      extensions: ['vue', 'md'],
      customLoaderMatcher: id => id.endsWith('.md'),
      customComponentResolvers: [
        ViteIconsResolver({
          componentPrefix: '',
        }),
      ],
    }),

    ViteIcons(),
  ],
  optimizeDeps: {
    include: [
      'vue',
      '@vueuse/core',
      'vue-chemistry',
      'vue-chemistry/string',
      'file-saver',
    ],
  },
}

export default config
