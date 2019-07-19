import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

const routes =  new VueRouter({
  mode: 'hash',
  routes: [
    {
      path: '/',
      name: 'index',
      alias: '/pages/index/main',
      component: (r) => require.ensure([], () => r(require('@/pages/index/index')), 'index')
    },
    {
      path: '/camera',
      name: 'camera',
      component: (r) => require.ensure([], () => r(require('@/pages/camera/index')), 'camera')
    },
    {
      path: '/map',
      name: 'map',
      component: (r) => require.ensure([], () => r(require('@/pages/map/index')), 'map')
    }
  ]
});
export default routes;
