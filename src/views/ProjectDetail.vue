<template>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <article>
                    <h1 class="page-title">{{ project.title.rendered }}</h1>
                    <div class="post-image">
                        <img v-bind:src="project._embedded['wp:featuredmedia'][0]['source_url']" class="img-fluid" alt="">
                    </div>
                    <div class="content" v-html="project.content.rendered"></div>
                </article>
                <div class="gallery">
                    <h3>Images</h3>
                    <Carousel :perPage="1">
                        <Slide v-for="(image, index) in project.acf.images" v-bind:key="index">
                            <div class="image" v-bind:style="{ backgroundImage: `url('${image.image}')` }"></div>
                        </Slide>
                    </Carousel>
                </div>
            </div>
        </div>
    </div>
</template>

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

        Carousel {
            margin-bottom: 2rem;

            @include media-breakpoint-up(md) {
                margin: 0 -3rem 2rem -3rem;
            }
        }

        .image {
            height: 200px;
            background-size: contain;
            background-repeat: no-repeat;

            @include media-breakpoint-up(lg) {

                height: 500px;
            }
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

        created() {

            if(this.$route.params.project) {
                this.project_slug = this.$route.params.project;

                fetch(`https://joemoses.dev/wp-json/wp/v2/portfolio?slug=${this.project_slug}&_embed`)
                    .then(res => res.json())
                    .then(json  => {
                        this.project = json[0]
                        console.log(json[0])
                    });
            }
        },

        components: {
            Carousel,
            Slide
        }
    }
</script>