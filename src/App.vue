<template>
  <div id="app" v-bind:class="theme_colour">
    <div class="main">
      <Navigation></Navigation>
      <!--    <div class="cursor-svg"></div>-->
      <transition name="page-fade" mode="out-in">
        <router-view @style="updateStyle" />
      </transition>
    </div>
    <Footer></Footer>
  </div>
</template>

<style lang="scss">
  @import "~aos/dist/aos.css";
  body {
    scroll-behavior: smooth;
  }
  #app {
    min-height: 100vh;
  }

   * {

   }

   .main {
     min-height: 100vh;
   }

  .cursor-svg {
    position: fixed;
    z-index: 200;
    pointer-events: none;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 1px solid #000000;
    transition-duration: .3s;
    display: none;

    @include media-breakpoint-up(lg) {
      display: block;
    }
  }

  .loading {
    opacity: 0;
    transition: all 1s;
    transition-delay: .2s;
    transform: translateY(500px);
  }

  .loaded {
    transform: translateY(0px);
    opacity: 1;
  }

   ::selection {
     color: #ffffff;
     background: #000; /* WebKit/Blink Browsers */
   }
   ::-moz-selection {
     color: #ffffff;
     background: #000; /* Gecko Browsers */
   }
  
  .flexed {
    transition-duration: .3s;
    width: 20px;
    height: 20px;
  }
  
  .dark {
    background-color: #000;
    color: #ffffff;
  }


  [data-aos="small-fade"] {
    transform: translateY(60px);
    opacity: 1;
    &.aos-animate {
      transform: translateY(0px);
      opacity: 1;
    }
  }

  [data-aos="large-fade"] {
    transform: translateY(120px);
    opacity: 1;
    &.aos-animate {
      transform: translateY(0px);
      opacity: 1;
    }
  }

</style>


<script>
  import AOS from 'aos';
  import Footer from "./components/Footer";
  import Navigation from "./components/Navigation";
  export default {

    components: {
      Navigation,
      Footer
    },

    data() {
      return {
        theme_colour: 'light',
      }
    },

    created() {
      AOS.init()
    },

    methods: {

      updateStyle(e) {
        this.theme_colour = e;
      },

      flexMouse() {
        let cursor = document.querySelector('.cursor-svg');
        if(cursor.classList.contains('flexed')) {
          cursor.classList.remove('flexed');
        } else {
          cursor.classList.add('flexed');
        }
      },

    }
  }
</script>