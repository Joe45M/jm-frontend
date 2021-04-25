<template>
    <section>
        <div class="container">
            <div class="row">
                <div class="col-12 col-lg-8 offset-lg-2">
                    <article>
                        <div class="title">
                            <h1 class="page-title" v-html="blog_slug.title.rendered"></h1>
                            <img v-bind:src="blog_slug._embedded['wp:featuredmedia'][0]['source_url']" alt="" class="img-fluid article-image">
                        </div>
                        <div class="blog-post-content" v-html="blog_slug.content.rendered"></div>
                    </article>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">
    section {
        min-height: 100vh;
    }

    .blog-post-content {
        line-height: 2 !important;
        text-align: justify;
        text-align-last: left;
        color: rgba(0, 0, 0, .8);

        h1, h2, h3, h4, h5, h6 {
            line-height: 2 !important;
        }
    }
    .article-image {
        margin-bottom: 25px;
    }

    hr {
        margin: 40px 0;
    }

    .wp-block-image {

        img {
            max-width: 100%;
        }
    }


</style>

<script>
    export default {
        name: "BlogListing",

        metaInfo: {
            title: 'Blog - WordPress development',
            meta: [
                { charset: 'utf-8' },
                { name: 'description', content: 'WordPress focused blog post.' }
            ]
        },

        data() {
            return {
                blog: {},
                blog_slug: {
                    title: {
                        rendered: ''
                    },
                    content: {
                        rendered: ''
                    }
                },
            }
        },

        created() {

            console.log(this.$route);

            if(this.$route.params.blog_post) {
                this.blog_slug = this.$route.params.blog_post;

                fetch(`https://blog.joemoses.dev/wp-json/wp/v2/posts?slug=${this.blog_slug}&_embed`)
                    .then(res => res.json())
                    .then(json  => {
                        this.blog_slug = json[0]
                        console.log(json[0])
                    });
            }
        }
    }
</script>