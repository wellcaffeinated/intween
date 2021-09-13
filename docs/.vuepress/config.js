const path = require('path')

module.exports = {
  title: 'InTween',
  description: 'Your companion for building rich interactive media with Interactive Tweens',
  themeConfig: {
    nav: [
      { text: 'Guide', link: '/guide/' },
      { text: 'In Depth', link: '/in-depth/' },
      { text: 'Demos', link: '/demos/' },
      { text: 'API', link: 'https://github.com/wellcaffeinated/intween.git' },
      { text: 'GitHub', link: 'https://github.com/wellcaffeinated/intween' },
    ]
    , lastUpdated: 'Last Updated'
    , smoothScroll: true
  },
  configureWebpack: {
    resolve: {
      alias: {
        'intween': path.join(__dirname, '../../dist/intween.module.js')
      }
    }
  }
}
