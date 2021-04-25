<template>
    <div class="meta-app">
        <transition name="slide-fade">
            <MetaSearch v-on:search="send_request" v-if="!response"></MetaSearch>
            <MetaListing :metas="response" v-on:reset="reset"></MetaListing>
        </transition>
    </div>
</template>

<script>
    import MetaSearch from "../components/MetaSearch";
    import MetaListing from "../components/MetaListing";
    export default {
        name: "Meta",

        components: {
            MetaSearch,
            MetaListing
        },

        data() {
            return {
                response: false

            }
        },

        methods: {
            send_request(req) {
                var endpoint = `https://joemoses.dev/meta-api?url=https://${req}`;
                console.log(endpoint)
                fetch(endpoint)
                .then(req => req.json())
                .then(reqs => {
                    console.log(reqs);
                    this.response = reqs;
                })
                console.log(req)
            },

            reset() {
                this.response = false;
            }
        }
    }
</script>

<style lang="scss">
    .meta-app {
        padding-top: 20vh;
    }



    /* Enter and leave animations can use different */
    /* durations and timing functions.              */
    .slide-fade-enter-active {
        opacity: 0;
        transition: all .3s ease;
    }
    .slide-fade-leave-active {
        /*position: absolute;*/
        transition: all .3s cubic-bezier(0.32, 0, 0.67, 0);
    }

    .slide-fade-leave-to
        /* .slide-fade-leave-active below version 2.1.8 */ {
        transform: translateY(-13vh);
        height: 0;
        opacity: 0;

    }

    .slide-fade-enter-to
        /* .slide-fade-leave-active below version 2.1.8 */ {
        transform: translateY(0);
        opacity: 1;
        transition-delay: .5s;
    }

    h4 {
        opacity: .5;
    }

    .slide-fade-move {
    }

    .slide-fade-enter {
        transition-delay: 300ms;
        opacity: 0;
        transform: translateY(30vh);

    }
</style>