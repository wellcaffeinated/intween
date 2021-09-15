const path = require('path')
const fs = require('fs')

const apidir = path.join(__dirname, '../api')
const apiFiles = fs.readdirSync(apidir).filter(file => {
  return file !== 'README.md' && file.substr(-3) === '.md' && !fs.lstatSync(path.join(apidir, file)).isDirectory()
}).map(file => file.replace('.md', ''))

const sidebar = {
  '/api/': [{
    sidebarDepth: 4,
    collapsable: false,
    children: [
      '',
      ...apiFiles
    ]
  }],
  '/demos/': [
    '',
    'simple/',
    'all-interpolators/',
    'colors-example/',
    'player-controls/',
    'smoothen-demo/',
    'howler-example/',
    'slideshow-example/',
    'charts/'
  ],
  '/': 'auto'
}

module.exports = {
  title: 'InTween',
  description: 'Your companion for building rich interactive media with Interactive Tweens',
  themeConfig: {
    nav: [
      { text: 'Guide', link: '/guide/' },
      { text: 'API', link: '/api/' },
      { text: 'Demos', link: '/demos/' },
      { text: 'In Depth', link: '/in-depth/' },
      { text: 'GitHub', link: 'https://github.com/wellcaffeinated/intween' },
    ]
    , sidebar
    , lastUpdated: 'Last Updated'
    , smoothScroll: true
  },
  configureWebpack: {
    resolve: {
      alias: {
        'intween': path.join(__dirname, '../../dist/intween.module.js'),
        'chroma': path.join(__dirname, '../lib/chroma.js'),
        'howler': path.join(__dirname, '../lib/howler.min.js'),
      }
    }
  }
}
