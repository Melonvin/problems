const nav = require('./nav')
module.exports = {
  title: '踩过的坑',
  description: 'Just playing around',
  base: "/problems/",
  themeConfig: {
    logo: '',
    nav: nav,
    displayAllHeaders: true,
    lastUpdated: 'Last Updated'
  },
  plugins: [
    ["vuepress-plugin-auto-sidebar", {
      sidebarDepth: 2,
      collapse: true
    }]
  ]
}