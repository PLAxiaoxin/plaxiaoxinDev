module.exports = {
  title: 'PLAxiaoxin的博客',
  // TODO: 加到meta上
  description: '只有那些你深知一辈子逃不掉的东西，才能坚持下去。',
  base: '/',
  markdown: {
    lineNumbers: true // 代码行数
  },
  themeConfig: {
    editLinks: true, // 编辑链接
    editLinkText: '帮助我改善这个页面', // 链接字段
    serviceWorker: {
      updatePopup: {
        // 刷新内容的弹窗
        message: '就在刚刚,OBKoro1更新了内容',
        buttonText: '点这里'
      }
    },
    sidebarDepth: 3,
    nav: [{
      text: '文章',
      link: '/blog/'
    }, {
      text: '前端积累',
      link: '/frontEnd/'
    }, {
      text: '后台积累',
      link: '/rearEnd/'
    }, {
      text: '构建工具',
      link: '/buildTool/'
    }, {
      text: '关于我',
      link: '/my/'
    }, {
      text: 'github',
      link: 'https://github.com/PLAxiaoxin'
    }],
    sidebar: {
      '/blog/': [
        '/blog/', {
          title: '所有文章',
          // TODO: 取消折叠
          // collapsable: false,
          children: [
            '/blog/article/a',
            '/blog/article/b',
            '/blog/article/c',
            '/blog/article/d',
            '/blog/article/e',
            '/blog/article/f',
            '/blog/article/g',
            '/blog/article/h',
            '/blog/article/gg',
          ]
        }
      ],
      '/frontEnd/': [
        '/frontEnd/', {
          title: 'HTML',
          children: [
            '/frontEnd/html/html1',
            '/frontEnd/html/html2',
          ]
        }, {
          title: 'CSS',
          children: [
            '/frontEnd/css/css1',
            '/frontEnd/css/css2',
          ]
        }, {
          title: 'JavaScript',
          children: [
            '/frontEnd/javascript/js1',
            '/frontEnd/javascript/js2',
          ]
        }
      ],
      '/rearEnd/': [
        '/rearEnd/', {
          title: 'Node',
          children: [
            '/rearEnd/node/node1',
          ]
        }, {
          title: 'PHP',
          children: [
            '/rearEnd/php/php1',
          ]
        }
      ],
      '/buildTool/': [
        '/buildTool/', {
          title: 'WebPack',
          children: [
            '/buildTool/webpack/wp1',
          ]
        }, {
          title: 'Gulp',
          children: [
            '/buildTool/gulp/gulp1',
          ]
        }, {
          title: 'Grunt',
          children: [
            '/buildTool/grunt/grunt1',
          ]
        }
      ],
    }
  }
};
