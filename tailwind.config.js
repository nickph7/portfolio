/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/
module.exports = {
  theme: {
    fontFamily: {
      acumin: ['acumin-pro', 'sans-serif'],
      acuminCondensed: ['acumin-pro-condensed', 'sans-serif'],
      acuminXcondensed: ['acumin-pro-extra-condensed', 'sans-serif']
    },
    extend: {
      colors: {
        mdarkone: '#181616',
        mdarktwo: '#252424',
        mdarkthree: '#4b4a4a',
        mgreyone: '#c4c2c2',
        mgreytwo: '#dcdada',
        mwhite: '#f7f3f3'
      }
    }
  },
  variants: {},
  plugins: [],
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'nuxt.config.js'
    ]
  }
}
