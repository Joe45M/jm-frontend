<template>
  <section class="landing-wrap">
    <div class="container">
      <div class="content">
        <div class="row">
          <div class="col-lg-12">
            <h1 class="d-block w-100 text-center" data-aos="fade-up" data-aos-duration="500">No nonsense digital.</h1>
            <p class="lead text-center font-weight-lighter text-uppercase" data-aos="fade-up" data-aos-delay="100"
               data-aos-duration="500">Web services that just work.</p>
          </div>
        </div>
        <div class="row further-tag" data-aos="fade-up" data-aos-delay="400" data-aos-duration="700">
          <div class="col-12 offset-lg-2 col-lg-8">
            <span class="sub-title w-100 text-center d-inline-block">I cut the fluff and get to the meat.</span>
            <p class="who text-center">Creating fast & beautiful websites which solve real problems.</p>
          </div>
          <div class="col-lg-1 offset-lg-5 d-none d-lg-flex h-100 align-self-end">
          </div>
        </div>
        <div class="row">
          <div class="col-lg-6">
            <div class="service-box">
              <div class="title font-weight-bold text-uppercase mb-3">Web Design & Development</div>
              <p>Bespoke full-build web design and web development solutions. Do you need a flexible digital solution for your project? </p>
              <a class="btn btn-primary" href="/wordpress">See more</a>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="service-box">
              <div class="title font-weight-bold text-uppercase mb-3">Graphic design</div>
              <p>Full-spectrum solutions for martketing assets, such as flyers, menus, leaflets, and more. From theory, to design & print.</p>
              <a class="btn btn-primary" href="/wordpress">Contact </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

</template>

<script>
export default {
  name: 'LandingWrap',
  props: {
    msg: String
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
body {

}

.landing-wrap {
  padding-top: 15vh;

  @include media-breakpoint-up(lg) {
  }
  text-align: left;

  .sub-title {
    font-size: 130%;
    text-transform: uppercase;
    font-weight: bold;
  }

  .content {
    /*position: fixed;*/
  }

  img {
    border-radius: 50%;
    max-width: 100px;
    margin-bottom: 1rem;
    @include media-breakpoint-up(lg) {
      max-width: 100%;
      margin-bottom: 0;
    }
  }

  h1 {
    font-weight: bold;
    letter-spacing: 10px;
    text-transform: uppercase;
    font-size: 32px;
    @include media-breakpoint-up(lg) {
      font-size: 70px;
    }
  }

  p.lead {
    font-weight: bold;
    letter-spacing: 5px;
    color: rgba(0, 0, 0, 0.36);
    padding-top: 0;

    @include media-breakpoint-up(lg) {
      letter-spacing: 10px;
    }
  }

  .who {
    line-height: 2;

    letter-spacing: 1.5px;

    @include media-breakpoint-up(lg) {
      letter-spacing: 3px;
    }

  }

  .further-tag {
    padding-top: 80px;
    margin-bottom: 20vh;

    @include media-breakpoint-up(lg) {
      padding-top: 150px;
    }
  }

  #scroll-cta {
    font-weight: bold;
    color: #000;
    letter-spacing: 3px;
  }
}
</style>
