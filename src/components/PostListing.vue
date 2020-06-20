<template>
    <div class="post-wrapper">
        <router-link to="/">
            <div class="image" style="background-image: url('http://placehold.it/200x100')"></div>
            <span class="title">POST TITLE</span>
        </router-link>
    </div>
</template>


<style scoped lang="scss">

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

</style>

<script>
    export default {
        name: "PostListing",
    }
</script>