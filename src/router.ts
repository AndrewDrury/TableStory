import Vue from 'vue'
import Router from 'vue-router'
import Welcome from './views/Welcome.vue'
import Project from './views/Project.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'welcome',
      component: Welcome
    },
    {
      path: '/my-profile',
      name: 'my-profile',
      
      component: () => import(/* webpackChunkName: "my-profile" */ './views/MyProfile.vue')
    },
    {
      path: '/build-profile',
      name: 'build-profile',
      
      component: () => import(/* webpackChunkName: "build-profile" */ './views/BuildProfile.vue')
    },
    {
      path: '/discover-dishes',
      name: 'discover-dishes',
      
      component: () => import(/* webpackChunkName: "discover-dishes" */ './views/DiscoverDishes.vue')
    },
    {
      path: '/discover-places',
      name: 'discover-places',
      
      component: () => import(/* webpackChunkName: "discover-places" */ './views/DiscoverPlaces.vue')
    },
    {
      path: '/other-profile',
      name: 'other-profile',
      
      component: () => import(/* webpackChunkName: "other-profile" */ './views/OtherProfile.vue')
    },
    {
      path: '/restaurant-profile',
      name: 'restaurant-profile',
      
      component: () => import(/* webpackChunkName: "restaurant-profile" */ './views/RestaurantProfile.vue')
    },
    {
      path: '/camera',
      name: 'camera',
      
      component: () => import(/* webpackChunkName: "camera" */ './views/Camera.vue')
    }
  ]
})
