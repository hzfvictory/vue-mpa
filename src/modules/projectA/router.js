import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import(/* webpackChunkName: "home" */ './page/home.vue')
const Test = () => import(/* webpackChunkName: "test" */ './page/test.vue')
const List = () => import(/* webpackChunkName: "list" */ './page/list.vue')


Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/test',
      name: 'Test',
      component: Test
    },
    {
      path: '/list',
      name: 'List',
      component: List
    }
  ]
})
