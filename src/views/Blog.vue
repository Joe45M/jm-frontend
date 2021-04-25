<template>
    <div class="wrap">
        <section class="blog-wrap">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h1 class="page-title">BLOG</h1>
                        <div class="page-description">
                            <p>Latest blog posts concerning Website development, technology & website design.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <RecentPosts showTitle="false" perPage="15"></RecentPosts>
    </div>
</template>

<script>
    import RecentPosts from "../components/RecentPosts";
    export default {
        name: "Blog",

        components: {
            RecentPosts
        },

        mounted() {
            this.$emit('style', 'light')
        }
    }
</script>