module.exports = {
  template: './ssr.html',
  maxAge: 60 * 60 * 1000,
  config: {
    basePath: 'http://vuejs.huoqishi.net/docs',
    alias: {
      '/de-de/changelog': '/changelog',
      '/zh-cn/changelog': '/changelog',
      '/changelog': 'https://raw.githubusercontent.com/QingWei-Li/docsify/master/CHANGELOG'
    },
    auto2top: true,
    coverpage: true,
    executeScript: true,
    loadSidebar: true,
    loadNavbar: true,
    homepage: './home.md',
    mergeNavbar: true,
    maxLevel: 4,
    subMaxLevel: 2,
    name: 'vuejs',
    search: {
      noData: {
        '/de-de/': 'Keine Ergebnisse!',
        '/zh-cn/': '没有结果!',
        '/': 'No results!'
      },
      paths: 'auto',
      placeholder: {
        '/de-de/': 'Suche',
        '/zh-cn/': '搜索',
        '/': 'Search'
      }
    }
  }
}
