import Vue from 'vue'
import Router from 'vue-router'
import Index from '../views/Index'
import News from '../views/News'
import Counter from '../views/Counter'
import About from '../views/About'
Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },{
      path: '/news',
      name: 'News',
      component: News
    },{
      path: '/counter',
      name: 'Counter',
      component: Counter
    },{
      path: '/about',
      name: 'About',
      component: About
    }
  ]
})
