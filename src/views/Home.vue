<template>
  <div>
    <LandingWrap data-aos="fade" data-aos-delay="5000"/>
    <div class="project-wrap">
      <Projects showTitle="true" perPage="4"></Projects>
    </div>
    <RecentPosts  showTitle="true" perPage="4"></RecentPosts>
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

  metaInfo: {
    title: 'Joe Moses - WordPress development',
    meta: [
      { charset: 'utf-8' },
      { name: 'description', content: 'Is your WordPress Website performing? Get in touch today for a free quote.' }
    ]
  },

  mounted() {

      this.$emit('style', 'light')

    let options = {
      root: null,
      rootMargin: '0px',
      threshold: [
        0.10,
        0.20,
        0.30,
        0.40,
        0.50,
        0.60,
        0.70,
        0.80,
        0.90,
        1.00,
      ]
    }

    function fade(entries) {
      // entries[0].target.classList.toggle('fade');
      var landing = document.querySelector('.landing-wrap')

      if (entries[0].isIntersecting) {
        var ratio = entries[0].intersectionRatio;
        if(ratio < 0.50) {
          ratio = ratio - 0.15;
        }
        landing.style.opacity = ratio;
      } else {
        landing.classList.remove('faded');
      }

    }


    this.observer = new IntersectionObserver(fade, options);

    let landing = document.querySelector('.landing-wrap');

    this.observer.observe(landing)
  },

  created() {
  },

  beforeDestroy() {
    // this.observer.unobserve();
  }

}
</script>


<style scoped lang="scss">

  .landing-wrap {
    transition: all .4s ease;
  }

  .faded {
    opacity: 0;
  }
</style>