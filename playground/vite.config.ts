import { UserConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Markdown from 'vite-plugin-md'
import prism from 'markdown-it-prism'
import ViteIcons, { ViteIconsResolver } from 'vite-plugin-icons'
import ViteComponents from 'vite-plugin-components'
import Windicss from 'vite-plugin-windicss'

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
      extensions: ['vue', 'md'],
      customLoaderMatcher: id => id.endsWith('.md'),
      customComponentResolvers: [
        ViteIconsResolver({
          componentPrefix: '',
        }),
      ],
    }),

    ViteIcons(),

    ...Windicss(),
  ],
  optimizeDeps: {
    include: [
      'vue-chemistry/string',
    ],
  },
}

export default config
