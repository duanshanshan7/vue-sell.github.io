import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource'
import Things from '@/components/things/things'
import Goods from '@/components/goods/goods'

Vue.use(Router)
Vue.use(VueResource)

export default new Router({
  routes: [
  	{
  	  path: '/',
      redirect: '/things'
  	},
    {
      path: '/things',
      name: 'Things',
      component: Things
    },
    {
      path: '/goods',
      name: 'Goods',
      component: Goods
    }
  ]
})
