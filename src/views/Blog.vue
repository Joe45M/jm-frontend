<template>
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

            <div class="row">
                <div class="col-lg-6">
                    <PostListing></PostListing>
                </div>
                <div class="col-lg-6">
                    <PostListing></PostListing>
                </div>
                <div class="col-lg-6">
                    <PostListing></PostListing>
                </div>
                <div class="col-lg-6">
                    <PostListing></PostListing>
                </div>
                <div class="col-lg-6">
                    <PostListing></PostListing>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import PostListing from "../components/PostListing";
    export default {
        name: "Blog",

        components: {
            PostListing
        }
    }
</script>