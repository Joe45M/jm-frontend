<template>
    <section class="projects">
        <div class="container">
            <div class="row">
                <div class="col-lg-1">
                    <span class="vertical-title">Projects</span>
                </div>
                <div class="col-lg-11">
                    <router-link to="/" class="project-link" data-aos="fade-up" data-aos-duration="400">
                        <div class="project-container" data-aos="fade-up" data-aos-duration="400">
                            <div class="row h-100">
                                <div class="col-lg-7">
                                    <span class="title">FULL-STACK ASSISTANT</span>
                                    <div class="image" style="background-image: url(https://joemoses.dev/wp-content/uploads/2020/01/fs.jpg);"></div>
                                </div>
                                <div class="col-lg-5 description d-flex align-items-center">
                                    <div class="description-wrap mt-4 mt-lg-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid delectus dolore dolorem iure nam nesciunt perferendis quidem reprehenderit totam voluptas. Assumenda consectetur deleniti dolores doloribus enim perspiciatis porro sapiente. Enim?</div>
                                </div>
                            </div>
                        </div>
                    </router-link>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-11 offset-lg-1 my-5 mt-lg-0">
                    <span class="more">But wait, <router-link to="projects">there's more</router-link></span>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: "Projects",
    }
</script>

<style scoped lang="scss">
    @import "~aos/src/sass/aos";
    .projects {
        position: relative;
        z-index: 2;
        padding-top: 50px;
        background-color: #fff;

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