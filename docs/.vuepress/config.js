module.exports = {
  title: '个人主页',
  description: 'Personal Website',
  head: [ // 注入到当前页面的 HTML <head> 中的标签
    ['link', {
      rel: 'icon',
      href: '/images/photo.png'
    }],
    ['link', {
      rel: 'manifest',
      href: '/images/photo.png'
    }],
    ['link', {
      rel: 'apple-touch-icon',
      href: '/images/photo.png'
    }],
    ['meta', {
      'http-quiv': 'pragma',
      cotent: 'no-cache'
    }],
    ['meta', {
      'http-quiv': 'pragma',
      cotent: 'no-cache,must-revalidate'
    }],
    ['meta', {
      'http-quiv': 'expires',
      cotent: '0'
    }]
  ],
  serviceWorker: false, // 是否开启 PWA
  base: '/', // 部署到github相关的配置
  markdown: {
    lineNumbers: true // 代码块是否显示行号
  },
  themeConfig: {
    date_format: 'yyyy-MM-dd HH:mm:ss',
    nav: [ // 导航栏配置
      {
        text: 'Bolg',
        link: '/blog/'
      }, {
        text: '前端',
        items: [{
          text: 'HTML',
          link: '/frontEnd/html/'
        }, {
          text: 'CSS',
          link: '/frontEnd/css/'
        }, {
          text: 'JAVASCRIPT',
          link: '/frontEnd/javascript/'
        }]
      }, {
        text: '后台',
        items: [{
          text: 'NODE',
          link: '/rearEnd/node/'
        }, {
          text: 'PHP',
          link: '/rearEnd/php/'
        }]
      }, {
        text: '构建工具',
        items: [{
          text: 'WEBPACK',
          link: '/buildTool/webpack/'
        }, {
          text: 'GULP',
          link: '/buildTool/gulp/'
        }, {
          text: 'GRUNT',
          link: '/buildTool/grunt/'
        }]
      }, {
        text: '关于我',
        link: '/my/'
      }, {
        text: 'github',
        link: 'https://github.com/PLAxiaoxin'
      }
    ],
    sidebar: {
      '/blog/': [
        'a',
        'b',
        'c',
        'd',
        'e',
        'f',
        'g',
        'h'
      ]
    },
    sidebarDepth: 2
  }
};
