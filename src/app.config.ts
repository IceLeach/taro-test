export default {
  pages: [
    'pages/index/index',
    'pages/counter/index',
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    color: '#626567',
    selectedColor: '#6190E8',
    backgroundColor: '#FBFBFB',
    borderStyle: 'white',
    list: [
      {
        pagePath: 'pages/index/index',
        text:'首页',
        iconPath: './assects/index.png',
        selectedIconPath: './assects/index-select.png',
      },
      {
        pagePath: 'pages/counter/index',
        text:'计数',
        iconPath: './assects/counter.png',
        selectedIconPath: './assects/counter-select.png',
      }
    ],
  },
}
