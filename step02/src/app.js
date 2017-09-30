// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './vuex/store'
import { sync } from 'vuex-router-sync'
Vue.config.productionTip = false

export function createApp () {  
  // 主要是把 vue-router 的狀態放進 vuex 的 state 中，這樣就可以透過改變 state 來進行路由的一些操作，當然直接使用像是 $route.go 之類的也會影響到 state ，會同步的是這幾個屬性
  sync(store, router)
  // 创建应用程序实例，将 router 和 store 注入
  const app = new Vue({
    router,
    store,
    render: h => h(App)
  })  
  return { app, router, store }
}
