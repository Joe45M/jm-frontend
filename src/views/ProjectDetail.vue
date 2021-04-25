<template>
    <div style="min-height: 100vh;">
        <div class="wrapper" ref="wrap">
            <div class="container ">
                <div class="row ">
                    <div class="col-12">
                        <article>
                            <h1 class="page-title">{{ project.title.rendered }}</h1>
                            <div class="project-detail">
                                <!--                        <div class="row">-->
                                <!--                            <div class="col-12 col-lg-2">-->
                                <!--                                <p>Project</p>-->
                                <!--                                <p>Date</p>-->
                                <!--                            </div>-->
                                <!--                            <div class="col-12 col-lg-4 font-weight-bold">-->
                                <!--                                <p>Web, WordPress, Hostting</p>-->
                                <!--                                <p>2020</p>-->
                                <!--                            </div>-->
                                <!--                        </div>-->
                            </div>
                            <div class="post-image">
                                <img v-bind:src="project._embedded['wp:featuredmedia'][0]['source_url']" class="img-fluid" alt="">
                            </div>
                            <div class="content" v-html="project.content.rendered"></div>
                        </article>
                    </div>
                </div>
            </div>

            <div class="container gallery">
                <h3>Images</h3>

            </div>
            <div class="outter-wrap">
                <Carousel :perPage="1" class="carousel-wrap">
                    <Slide v-for="(image, index) in project.acf.images" v-bind:key="index">
                        <div class="image" v-bind:style="{ backgroundImage: `url('${image.image}')` }"></div>
                    </Slide>
                </Carousel>
            </div>
        </div>

    </div>
</template>
<style>
    body {
        overflow-x: hidden;
    }
    .VueCarousel-wrapper {
        overflow: visible !important;
    }
</style>
<style scoped lang="scss">


    article, .gallery {
        display: block;
        max-width: 70ch;
        margin: 0 auto;

        .post-image {
            margin-bottom: 2rem;

            @include media-breakpoint-up(md) {
                margin: 0 -3rem 2rem -3rem;
            }
        }
    }

    .gallery {
        padding-top: 4rem;

        h3 {
            margin-bottom: 2rem;
        }
    }



    .outter-wrap {
        display: flex;
        justify-content: flex-end;
        width: 100vw;
        overflow-x: hidden;

        .carousel-wrap {
            width: 80vw;

            @include media-breakpoint-up(md) {
                margin: 0 -3rem 2rem -3rem;
            }
        }
    }

    .image {
        background-size: contain;
        background-repeat: no-repeat;
        height: 0;
        padding-bottom: 50%;

        @include media-breakpoint-up(lg) {

            height: 80vh;
        }
    }
</style>

<script>
    import { Carousel, Slide } from 'vue-carousel';
    export default {

        data: function() {
            return {
                project: []
            }
        },

        metaInfo: {
            title: 'Project - Joe Moses',
            meta: [
                { charset: 'utf-8' },
                { name: 'description', content: 'bespoke WordPress projects.' }
            ]
        },

        created() {

            if(this.$route.params.project) {
                this.project_slug = this.$route.params.project;

                fetch(`https://blog.joemoses.dev/wp-json/wp/v2/portfolio?slug=${this.project_slug}&_embed`)
                    .then(res => res.json())
                    .then(json  => {
                        this.project = json[0]
                        // console.log(json[0])

                        console.log(this.$refs.wrap)
                    });
            }
        },

        components: {
            Carousel,
            Slide
        }
    }
</script>