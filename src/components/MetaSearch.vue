<template>
    <transition-group name="slide-fade" type="out-in">
        <div class="container" v-if="!is_searching" :key="1">
            <input type="text" ref="url" placeholder="yoursite.com" id="search-input" autocomplete="off" class="mb-3" v-model="fqdn"  @keyup="check_fqdn">
            <transition name="fade">
                <div class="d-flex justify-content-center" v-if="is_fqdn">
                    <button class="btn btn-black" @click="search">Get my meta</button>
                </div>
            </transition>
        </div>
        <div class="container" v-if="is_searching" :key="2">
            <h4 class="w-100 d-block">Your meta results are coming</h4>
        </div>
    </transition-group>
</template>

<script>
    import debounce from 'lodash.debounce';
    export default {
        name: "MetaSearch",

        data() {
            return {
                fqdn: null,
                is_fqdn: false,
                is_searching: false
            }
        },

        created() {
            let params = new URLSearchParams(window.location.search);

            if(params.get('url')) {
                this.fqdn = params.get('url');
                this.search();
            }
        },

        methods: {
            check_fqdn: debounce(function () {
                    let pattern = /(?=^.{1,254}$)(^(?:(?!\d+\.|-)[a-zA-Z0-9_-]{1,63}(?<!-)\.?)+(?:[a-zA-Z]{2,})$)/;
                    this.is_fqdn = pattern.test(this.fqdn);
                },
                500),

            search() {
                this.$emit('search', this.fqdn);
                this.is_searching = true;
            }
        }
    }
</script>

<style scoped lang="scss">
    h1  {
        font-size: 500%;
    }

    .btn-black {
        background-color: #000;
        color: #fff;
        border: 2px solid #fff;
        border-radius: 0;
        transition-duration: .5s;
        &:hover {
            background-color: #fff;
            color: #000;
            border: 2px solid #000;
        }
    }

    #search-input {
        border: none;

    @include media-breakpoint-up(lg) {
        font-size: 4rem;
    }

    &:active,
    &:focus {
         border: none;
         outline: none;
     }
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