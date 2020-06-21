<template>
  <div>
    <LandingWrap/>
    <div class="project-wrap">
      <Projects></Projects>
    </div>
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
  },

  mounted() {

    let options = {
      root: null,
      threshold: 0.1
    }

    function fade(entries) {
      // entries[0].target.classList.toggle('fade');
      var landing = document.querySelector('.landing-wrap')

      console.log(entries[0])
      if (entries[0].isIntersecting) {
        landing.classList.add('faded');
      } else {
        landing.classList.remove('faded');
        console.log('boop')
      }

    }


    this.observer = new IntersectionObserver(fade, options);

    let projects = document.querySelector('.project-wrap');

    console.log(projects)
    this.observer.observe(projects)
''
  },

  beforeDestroy() {
    this.observer.destroy();
  }

}
</script>


<style scoped lang="scss">

  .landing-wrap {
    opacity: 1;
    transition: all .4s;
  }

  .faded {
    opacity: 0;
  }
</style>