import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Blog from '../views/Blog.vue'
import BlogListing from '../views/BlogListing.vue'
import Projects from '../views/Projects.vue'
import Contact from '../views/Contact.vue'
import Wordpress from '../views/Wordpress.vue'
import ProjectDetail from '../views/ProjectDetail.vue'
import WebDevelopment from '../views/WebDevelopment.vue'
import Meta from "../views/Meta";

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
    path: '/blog/:blog_post',
    name: 'BlogListing',
    component: BlogListing,
    meta: {
      title: 'Blog post'
    }
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
    path: '/web-design',
    name: 'WebDevelopment',
    component: WebDevelopment,
  },
  {
    path: '/meta',
    name: 'Meta',
    component: Meta,
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
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  base: process.env.BASE_URL,
  routes
});


export default router
