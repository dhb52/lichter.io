import { colors } from './tailwind.js'
import { build, head, manifest, meta, render, utils } from './config'

export default {
  modern: !utils.isDev,
  // Watch config subfiles
  watch: ['~/config/*'],
  head,
  meta,

  css: [
    'assets/styles/app'
  ],

  plugins: [
    { src: '~/plugins/vue-scroll-reveal', ssr: false }
  ],

  generate: {
    fallback: true
  },

  modules: [
    '@nuxtjs/google-analytics',
    '@nuxtjs/pwa'
  ].concat(utils.isDev ? [] : ['nuxt-purgecss']),

  'google-analytics': {
    id: 'UA-62902757-11',
    disabled: () => document.cookie.indexOf('ga_optout=true') !== -1,
    debug: {
      sendHitTask: !utils.isDev
    },
    set: [
      { field: 'anonymizeIp', value: true }
    ]
  },

  purgeCSS: {
    mode: 'postcss',
    whitelistPatterns: [/cookie-consent/]
  },
  /*
   * Customize the progress bar color
   */
  loading: { color: colors.red },

  manifest,
  render,
  build
}
