import Vue from 'vue'
import App from './App'
import list from './utils/list'
import skill from './utils/skillList'
import features from './utils/features'
// import '../static/css/index.css'
import 'weui/dist/style/weui.css'
import 'weui/dist/example/example.css'

// Vue.use(WechatPlugin)
// window.wx = Vue.wechat
Vue.config.productionTip = false
App.mpType = 'app'
Vue.prototype.$list = list
Vue.prototype.$skill = skill
Vue.prototype.$features = features
const app = new Vue(App)
app.$mount()

export default {
  // 这个字段走 app.json
  config: {
    tabBar: {
      color: '#7A7E83',
      selectedColor: '#3cc51f',
      borderStyle: 'black',
      backgroundColor: '#fff',
      list: [{
        pagePath: 'pages/poke/poke',
        iconPath: 'static/img/t2.png',
        selectedIconPath: 'static/img/t1.png',
        text: '宝可梦'
      }, {
        pagePath: 'pages/menu/menu',
        iconPath: 'static/img/t4.png',
        selectedIconPath: 'static/img/t3.png',
        text: '菜单'
      }, {
        pagePath: 'pages/skill/skill',
        iconPath: 'static/img/t6.png',
        selectedIconPath: 'static/img/t5.png',
        text: '招式'
      }]
    },
    pages: [
      '^pages/poke/poke',
      'pages/skill/skill',
      'pages/menu/menu',
      'pages/about/about',
      'pages/logs/logs',
      'pages/features/features',
      'pages/featuresDetail/featuresDetail',
      'pages/restraint/restraint',
      'pages/character/character'
    ], // 页面前带有 ^ 符号的，会被编译成首页，其他页面可以选填，我们会自动把 webpack entry 里面的入口页面加进去
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#201f25',
      navigationBarTitleText: '神奇宝贝图鉴百科',
      navigationBarTextStyle: '#fff'
    },
    enablePullDownRefresh: true
  }
}
