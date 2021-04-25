<template>
    <section class="projects loading" ref="container" data-aos-duration="500">
        <div class="container">
            <div class="row">
                <div class="col-lg-1" v-if="showTitle != 'false'">
                    <span class="vertical-title">Projects</span>
                </div>
                <div class="col-lg-11">
                    <router-link v-bind:to="`/project/${project.slug}`" class="project-link"  v-for="(project, index) in projects" v-bind:key="index">
                        <div class="project-container">
                            <div class="row h-100">
                                <div class="col-lg-7" data-aos="small-fade" data-aos-duration="500">
                                    <span class="title" v-html="project.title.rendered"></span>
                                    <div class="image" v-bind:style="{backgroundImage: `url(${project._embedded['wp:featuredmedia'][0].source_url})`}"></div>
                                </div>
                                <div class="col-lg-5 description d-flex align-items-center" data-aos="large-fade" data-aos-duration="500" data-aos-easing="ease-out" data-aos-delay="50">
                                    <div class="description-wrap mt-4 mt-lg-0" v-html="project.excerpt.rendered">Lore consectetur deleniti dolores doloribus enim perspiciatis porro sapiente. Enim?</div>
                                </div>
                            </div>
                        </div>
                    </router-link>
                </div>
            </div>
            <div class="row" v-if="showTitle != 'false'">
                <div class="col-lg-11 offset-lg-1 my-5 mt-lg-0">
                    <span class="more">But wait, <router-link to="projects">there's more</router-link></span>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import AOS from "aos";
    export default {
        name: "Projects",
        data: function() {
            return {
                projects: []
            }
        },

        props: {
            showTitle: null,
            perPage: null,
        },

        created() {
            fetch(`https://blog.joemoses.dev/wp-json/wp/v2/portfolio?per_page=${this.perPage}&_embed`)
                .then(res => res.json())
                .then(json  => {
                    this.projects = json
                    this.$refs.container.classList.add('loaded');
                    AOS.init();
                });
        },
    }
</script>

<style scoped lang="scss">
    .projects {
        position: relative;
        z-index: 2;
        padding-top: 50px;
        background-color: #fff;
        min-height: 95vh;

        @include media-breakpoint-up(lg) {
            padding-top: 200px;
        }

        .project-link {
            color: #000000;
            &:hover {
                text-decoration: none;
            }
        }

        .project-container {
            padding-top: 40px;
            margin-bottom: 0;

            @include media-breakpoint-up(lg) {
                margin-bottom: 40px;
            }

            .title {
                display: block;
                font-weight: bold;
                font-size: 120%;
                letter-spacing: 3px;
                padding-left: 20px;

                @include media-breakpoint-up(lg) {
                    padding-left: 0;
                }
            }

            .image {
                height: 300px;
                margin-top: -10px;
                width: 100%;
                background-size: cover;
                background-position: center;
            }

            .description {
                display: flex;
                height: 100%;
                align-self: center;
                /*padding-top: 10px;*/

                .description-wrap {
                    line-height: 2.3;

                    @include media-breakpoint-up(lg) {
                        padding-top: 0;
                    }
                }
            }
        }

        .more {
            position: relative;
            padding-left: 60px;
            display: inline-block;
            font-weight: bold;
            letter-spacing: 2px;
            &:before {
                content: "";
                position: absolute;
                /*display: block;*/
                height: 3px;
                width: 35px;
                left: 0;
                top: 40%;
                background-color: #000;
            }

            a {
                position: relative;
                color: #000000;
                text-decoration: none;
                &:before {
                    transition-duration: .3s;
                    content: "";
                    position: absolute;
                    /*display: block;*/
                    height: 3px;
                    width: 100%;
                    left: 0;
                    top: 95%;
                    background-color: #000;
                }

                transition-duration: .3s;
                &:hover {
                    transition-duration: .3s;
                    text-decoration: none;
                    &:before {
                        transition-duration: .3s;
                        width: 110%;
                    }
                }
            }
        }
    }
</style>