<template>
    <section>
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="type-container">
                        <h1 class="page-title mt-0">WEB DESIGN</h1>
                        <div class="sub-group">
                            <span class="sub">Ideas that excite.</span>
                            <span class="sub">Design which enables.</span>
                            <span class="sub">Execution that delivers.</span>
                        </div>
                        <div class="scroller-wrap"><div class="horiz-scroller"><p class="stroke">BESPOKE DEVELOPMENT. MINIMAL. BOLD. PROGESSIVE. </p></div></div>
                    </div>
                </div>
            </div>

            <div class="latest-project">
                <div class="row">
                    <div class="col-12 col-lg-3 z-2">
                        <span class="latest-title">
                            LATEST PROJECT
                        </span>
                        <p class="latest-description">
                            <span class="bold">
                                DIGITAL HOUR
                            </span>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi corporis deserunt doloremque eius, eos est in ipsam labore modi molestiae non nostrum obcaecati pariatur perferendis rem repellat repudiandae temporibus voluptatem.
                        </p>
                    </div>
                    <div class="col-12 col-lg-6">
                        <img src="dh.png" alt="" class="latest-image">
                    </div>
                </div>
            </div>

            <div class="intuitive">
                <div class="row">
                    <div class="col-12 text-center">
                        <h2 class="intuitive-title">Intuitive, future proof & robust.</h2>
                        <br>
                        <p>I work with my clients to create simple, yet flexible solutions their customers adore.</p>
                    </div>
                </div>
            </div>

            <div class="get-in-touch">
                <div class="row">
                    <div class="col-12">
                        <h2 class="contact-title text-center">ARE YOU READY?</h2>
                        <a href="mailto:info@joemoses.co.uk">info@joemoses.co.uk</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import { easing, keyframes, styler } from 'popmotion';
    export default {
        name: 'WebDevelopment',


        metaInfo: {
            title: 'Web Development - Joe Moses - WordPress development',
            meta: [
                { charset: 'utf-8' },
                { name: 'description', content: 'Bespoke Website Development - Design to deployment.' }
            ]
        },

        mounted() {
            this.$emit('style', 'dark')

            const divStyler = styler(document.querySelector('.horiz-scroller'));

            keyframes({
                values: [
                    { x: -4000, y: 0 },
                    { x: 0, y: 0 },
                ],
                duration: 10000,
                easings: [easing.ease, easing.ease, easing.ease],
                loop: false,
                //times: [0, 0.2, 0.5, 0.6, 1]
            }).start(divStyler.set);

            let options = {
                root: null,
                threshold: 0.4
            }

            function fade(entries) {
                // entries[0].target.classList.toggle('fade');
                var landing = document.querySelector('.intuitive')

                console.log(entries[0])
                if (entries[0].isIntersecting) {
                    landing.classList.add('faded');
                } else {
                    landing.classList.remove('faded');
                }

            }


            this.observer = new IntersectionObserver(fade, options);

            let projects = document.querySelector('.get-in-touch');

            console.log(projects)
            this.observer.observe(projects)
        }
    }
</script>

<style scoped lang="scss">

    .latest-image {
        max-width: 100%;

        @include media-breakpoint-up(lg) {
            max-width: 2000px;
        }
    }

    section {
        overflow: hidden;
    }

    .faded {
        transition: all .3s ease-in-out;
        opacity: 0;
    }

    .get-in-touch {
        min-height: 50vh;
        padding: 25vh 0;

        h2 {
            margin-bottom: 3rem;
        }
        
        a {
            color: #fff;
            display: block;
            margin: 0 auto;
            text-decoration: none;
            text-align: center;
        }
    }

    .intuitive {
        transition: all .3s ease-in-out;
        margin-top: 7rem;
    }

    .sub-group {
        .sub {
            font-size: 300%;
            padding-right: 3rem;
            text-transform: uppercase;
            display: block;

            @include media-breakpoint-up(lg) {
                font-size: 400%;
            }
        }
    }

    .latest-title {
        font-size: 300%;
        width: 700px;
        z-index: 4;
        font-weight: bold;
        letter-spacing: 2px;
        -webkit-text-stroke: 3px #000;
        -webkit-text-fill-color: #fff;

        @include media-breakpoint-up(lg) {
            font-size: 600%;
        }

    }

    .latest-description {
        letter-spacing: 6px;
        line-height: 2;

        span {
            font-weight: bold;
            display: block;
            margin-bottom: 1rem;
        }
    }

    .z-2 {
        z-index: 2;
    }

    .type-container {
        .page-title {
            position: relative;
            color: transparent;
            text-shadow: 0 0 11px white;

            font-size: 470%;

            @include media-breakpoint-up(lg) {
                font-size: 870%;
            }

            span:first-child {
                display: block;
            }
            span:nth-child(2) {
                font-size: 307%;
                line-height: 0.6;
            }
        }

        .stroke {
            -webkit-text-stroke: 1px #fff;
            -webkit-text-fill-color: #000;
            font-size: 830%;
            font-weight: bold;
            line-height: 0.9;
        }

        .scroller-wrap {
            width: 100vw;
            overflow: hidden;

            .horiz-scroller {
                width: auto;

                p {
                    width: 7000px;
                }
            }
        }
    }
</style>