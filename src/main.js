// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 加载UI组件
import ElementUI from 'element-ui'
// 加载主题
import 'element-ui/lib/theme-chalk/index.css'
// 启用组件
Vue.use(ElementUI)

Vue.config.productionTip = false

// 全局导航过滤 拦截路由请求
router.beforeEach((to, from, next) => {
  let user = localStorage.getItem('mytoken')
  if (user) {
    next()
  } else {
    if (to.path !== '/login') {
      next({path: '/login'})
    } else {
      next()
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: create => create(App)
})
