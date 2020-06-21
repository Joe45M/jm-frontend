import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Blog from '../views/Blog.vue'
import BlogListing from '../views/BlogListing.vue'
import Projects from '../views/Projects.vue'
import Contact from '../views/Contact.vue'
import Wordpress from '../views/Wordpress.vue'
import ProjectDetail from '../views/ProjectDetail.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/blog',
    name: 'Blog',
    component: Blog
  },
  {
    path: '/blog/blog-post/',
    name: 'BlogListing',
    component: BlogListing
  },
  {
    path: '/wordpress',
    name: 'Wordpress',
    component: Wordpress
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact,
  },
  {
    path: '/projects',
    name: 'Projects',
    component: Projects,
  },
  {
    path: '/project/:project',
    name: 'Project',
    component: ProjectDetail,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});



router.afterEach(function () {
  window.scrollTo(0, 0);

});

export default router
