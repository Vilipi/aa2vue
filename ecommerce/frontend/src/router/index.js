import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../views/HomeView.vue')

  },
  {
    path: '/cart',
    name: 'Cart',
    component: () => import(/* webpackChunkName: "cart" */ '../views/CartView.vue')
  },
  {
    path: '/products/:id',
    name: 'Product',
    component: () => import(/* webpackChunkName: "products" */ '../views/ProductsView.vue')

  }
]

const router = new VueRouter({
  routes
})

export default router
