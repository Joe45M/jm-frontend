<template>
    <section class="landing-wrap">
        <div class="container">
            <div class="content">
                <div class="row">
                    <div class="col-lg-2">
                        <img src="https://placehold.it/300?round" class="img-fluid" alt="">
                    </div>
                    <div class="col-lg-8">
                        <vue-aos animation-class="fadeIn animate">
                            <h1>Joe Moses</h1>
                        </vue-aos>
                        <p class="lead">FREELANCE WEB DEVELOPER</p>
                    </div>
                </div>
                <div class="row further-tag">
                    <div class="col-lg-11">
                        <span class="sub-title d-inline-block">Bespoke Website Design & development.</span>
                        <p class="who ">Hello, I'm Joe. Many words. So many... seriously <br> it's mental, look.</p>
                    </div>
                    <div class="col-lg-1 d-none d-lg-flex h-100 align-self-end">
                        <a href="#about" id="scroll-cta">scroll</a>
                    </div>
                </div>
            </div>
        </div>
    </section>

</template>

<script>
    import VueAos from 'vue-aos';
    export default {
        name: 'LandingWrap',
        props: {
            msg: String
        },
        components: { VueAos }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    body {

    }

    .landing-wrap {
        height: 100vh;
        padding-top: 5vh;
        @include media-breakpoint-up(lg) {
            padding-top: 20vh;
        }
        text-align: left;

        .sub-title {
            font-size: 130%;
            text-transform: uppercase;
            font-weight: bold;
        }

        .content {
            position: fixed;
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

            @include media-breakpoint-up(lg) {
                padding-top: 200px;
            }
        }

        #scroll-cta {
            font-weight: bold;
            color: #000;
            letter-spacing: 3px;
        }
    }
</style>
