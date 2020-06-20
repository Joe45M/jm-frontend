<template>
  <div id="app" v-on:mousemove="updateCursor" v-on:mousedown="flexMouse" v-on:mouseup="flexMouse">
    <Navigation></Navigation>
    <div class="cursor-svg"></div>
    <transition name="fade">
      <router-view/>
    </transition>
    <Footer></Footer>
  </div>
</template>

<style lang="scss">
   * {

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
</style>


<script>

  import Footer from "./components/Footer";
  import Navigation from "./components/Navigation";
  export default {

    components: {
      Navigation,
      Footer
    },

    methods: {
      updateCursor(e) {
        var event = e;
        setTimeout(function () {
          document.querySelector('.cursor-svg').style.transform = `translate(${event.clientX - 20}px, ${event.clientY - 20}px)`;
        }, 200)
      },

      flexMouse() {
        let cursor = document.querySelector('.cursor-svg');
        if(cursor.classList.contains('flexed')) {
          cursor.classList.remove('flexed');
        } else {
          cursor.classList.add('flexed');
        }
      }

    }
  }
</script>