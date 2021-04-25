<template>
    <section class="recent-posts-wrap loading" ref="wrap">
        <div class="container">
            <div class="row">
                <div class="col-lg-1" v-if="showTitle != 'false'" data-aos="large-fade" data-aos-duration="200" data-aos-easing="ease-out">
                    <span class="vertical-title">RECENT POSTS</span>
                </div>
                <div class="col-lg-11">
                    <div class="row">
                        <div class="col-lg-6" v-for="(post, index) in posts" v-bind:key="index">
                            <div class="post-wrapper" data-aos="small-fade" data-aos-duration="500" data-aos-easing="ease-out">
                                <router-link v-bind:to="`/blog/${post.slug}`">
                                    <div class="image" v-bind:style="{backgroundImage: `url(${post._embedded['wp:featuredmedia'][0].source_url})`}"></div>
                                    <span class="title" v-html="post.title.rendered"></span>
                                </router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row" v-if="showTitle != 'false'">
                <div class="col-11 offset-lg-1  mt-5">
                    <router-link to="/blog">
                        <button class="btn btn-primary" data-aos="fade-up" data-aos-duration="500" data-aos-easing="ease-out">SEE ALL</button>
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
        min-height: 90vh;

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

        props: {
            showTitle: null,
            perPage: null,
        },

        created() {
            fetch(`https://blog.joemoses.dev/wp-json/wp/v2/posts?per_page=${this.perPage}&_embed`)
                .then(res => res.json())
                .then(json  => {
                    this.posts = json
                    this.$refs.wrap.classList.add('loaded');

                });

        },
    }
</script>