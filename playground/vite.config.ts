import type { UserConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Markdown from 'vite-plugin-md'
import prism from 'markdown-it-prism'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import Components from 'unplugin-vue-components/vite'
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

    Components({
      extensions: ['vue', 'md'],
      include: [/\.vue$/, /\.md$/],
      resolvers: [
        IconsResolver({
          componentPrefix: '',
        }),
      ],
    }),

    Icons(),

    Windicss(),
  ],
  optimizeDeps: {
    include: [
      'vue-chemistry/string',
    ],
  },
}

export default config
