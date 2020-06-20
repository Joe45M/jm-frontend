<template>
    <section class="recent-posts-wrap">
        <div class="container">
            <div class="row">
                <div class="col-lg-1">
                    <span class="vertical-title">RECENT POSTS</span>
                </div>
                <div class="col-lg-11">
                    <div class="row">
                        <div class="col-lg-6" data-aos="fade-up" data-aos-duration="400" v-for="(post, index) in posts" v-bind:key="index">
                            <div class="post-wrapper">
                                <router-link to="/">
                                    <div class="image" style="background-image: url('http://placehold.it/200x100')"></div>
                                    <span class="title">{{ post.title.rendered }}</span>
                                </router-link>
                            </div>
                        </div>
                        <div class="col-lg-6" data-aos="fade-up" data-aos-duration="400">
                            <div class="post-wrapper">
                                <router-link to="/">
                                    <div class="image" style="background-image: url('http://placehold.it/200x100')"></div>
                                    <span class="title">POST TITLE</span>
                                </router-link>
                            </div>
                        </div>
                        <div class="col-lg-6" data-aos="fade-up" data-aos-duration="400">
                            <div class="post-wrapper">
                                <router-link to="/">
                                    <div class="image" style="background-image: url('http://placehold.it/200x100')"></div>
                                    <span class="title">POST TITLE</span>
                                </router-link>
                            </div>
                        </div>
                        <div class="col-lg-6" data-aos="fade-up" data-aos-duration="400">
                            <div class="post-wrapper">
                                <router-link to="/">
                                    <div class="image" style="background-image: url('http://placehold.it/200x100')"></div>
                                    <span class="title">POST TITLE</span>
                                </router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-11 offset-lg-1  mt-5">
                    <router-link to="/blog">
                        <button class="btn btn-primary">SEE ALL</button>
                    </router-link>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">
    .recent-posts-wrap {
        position: relative;
        background-color: #fff;
        z-index: 2;
        padding-top: 40px;
        padding-bottom: 100px;

        @include media-breakpoint-up(lg) {
            padding-top: 120px;
        }

        .post-wrapper {
            padding-top: 40px;

            a {
                color: #000000;

                &:hover {
                    color: #000000;
                }
            }

            .image {
                height: 300px;
                margin-bottom: 25px;
                background-size: cover;
                background-position: center;
            }

            .title {
                letter-spacing: 2px;
            }
        }
    }
</style>

<script>
    export default {
        name: 'RecentPosts',
        data: function() {
            return {
                posts: []
            }
        },

        created() {
            fetch('https://joemoses.dev/wp-json/wp/v2/posts')
                .then(res => res.json())
                .then(json  => {
                    this.posts = json
                });

        },
    }
</script>