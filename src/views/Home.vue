<template>
  <div>
    <LandingWrap msg="Welcome to Your Vue.js App"/>
    <Projects></Projects>
    <RecentPosts></RecentPosts>
    <Contact></Contact>
  </div>
</template>

<script>
// @ is an alias to /src
import LandingWrap from '@/components/LandingWrap.vue'
import Projects from '@/components/Projects.vue'
import RecentPosts from '@/components/RecentPosts.vue'
import Contact from '@/components/Contact.vue'

export default {
  name: 'Home',
  components: {
    LandingWrap,
    RecentPosts,
    Projects,
    Contact
  }
}
</script>
