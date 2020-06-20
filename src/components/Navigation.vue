<template>
    <div class="navigation-wrap" v-bind:class="{'nav-active': nav_active }">
        <div class="container">
            <button  @click="toggleNav" class="nav-toggle">
                <transition name="toggle-fade">
                    <span v-if="nav_active">close</span>
                </transition>
                <transition name="toggle-fade">
                    <span v-if="!nav_active">menu</span>
                </transition>
            </button>
        </div>

        <transition
                name="fade"
                v-on:enter="entered">
            <div class="nav-overlay" v-if="nav_active">
                <div class="container">

                    <nav class="nav-main">
                        <span class="title">NAVIGATE</span>
                        <ul v-bind:class="{active: nav_active }" @click="toggleNav">
                            <li>
                                <router-link to="/">Home</router-link>
                            </li>
                            <li>
                                <router-link to="/projects">Projects</router-link>
                            </li>
                            <li class="has-children" data-child="services">
                                <span @click.prevent="toggleSubMenu" class="has-children" data-child="services">services</span>
                                    <div class="sub-menu">
                                    <ul>
                                        <li>
                                            <router-link to="/wordpress">WordPress</router-link>
                                        </li>
                                        <li>
                                            <router-link to="/web-design">Web Design</router-link>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <router-link to="/contact">Contact</router-link>
                            </li>
                            <li>
                                <router-link to="/blog">Blog</router-link>
                            </li>
                        </ul>
                        <div class="sub-menus">
                            <transition name="fade">
                                <div class="sub-menu" id=""></div>
                            </transition>
                        </div>
                    </nav>
                </div>
            </div>
        </transition>
    </div>
</template>

<style lang="scss">
    .nav-active {
        .nav-toggle {
            background-color: #fff;
            color: #000000;
        }
    }

    .nav-toggle {
        position: fixed;
        transition-duration: .4s;
        transition-delay: .2s;
        top: 15px;
        color: #ffffff;
        background-color: #000;
        border-radius: 50%;
        z-index: 9999;
        height: 64px;
        width: 64px;
        right: 15px;
        border: none;

        @include media-breakpoint-up(lg) {
            transform: translateX(calc(-100% + 45px));
        }

        span {
            position: absolute;
            top: 33%;
            transform: translate(-50%);
            left: 50%;
            display: block;
        }

        &:active,
        &:focus {
            outline: none;
        }

    }

    .nav-overlay {
        position: fixed;
        top: 0;
        height: 100%;
        width: 100vw;
        background-color: #000;
        z-index: 999;

        .nav-main {

            .title {
                display: block;
                letter-spacing: 2px;
                font-size: 80%;
                color: #ffffff;
                padding-top: 22vh;

                @include media-breakpoint-up(lg) {
                    padding-top: 15vh;

                }
            }

            ul {
                position: relative;
                max-width: 300px;
                padding-left: 0;
                transition: all .4s ease-in-out;
                &.child-open {
                    margin-left: -20%;

                    @include media-breakpoint-up(lg) {
                        margin-left: 0;
                    }
                }

                &.active {
                    a {
                        opacity: 1 !important;
                    }
                }

                li {
                    position: relative;
                    display: block;
                    transition: opacity .3s ease-in-out;
                    z-index: 3;

                    &.inactive {
                        opacity: .3;
                    }

                    span {
                        position: relative;
                        z-index: 3;
                    }

                    .sub-menu {
                        top: 0;
                        visibility: hidden;
                        position: absolute;
                        right: 70%;
                        opacity: 0;
                        transition-delay: .5s;
                        transition: all .4s ease-in-out;
                        z-index: 2;
                        padding-left: 15px;
                        li {
                            a {
                                font-size: 110%;
                            }
                        }

                        &.open {
                            visibility: visible;
                            opacity: 1;
                            transition: all .4s;
                            right: -10%;
                            z-index: 10;
                            @include media-breakpoint-up(lg) {
                                right: -30%;
                            }
                        }

                    }

                    a,
                    span {
                        color: #ffffff;
                        font-size: 200%;
                        cursor: pointer;
                        transition-duration: .3s;
                        padding-bottom: 25px;
                        display: block;
                        &:hover {
                            text-decoration: none;
                            padding-left: 20px;
                        }
                    }
                }
            }
        }
    }
</style>

<script>
    export default {
        name: "Navigation",

        data: function() {
            return {
                nav_active: false
            }
        },

        methods: {

            toggleNav(e) {
                console.log(e.target);
                if(!e.target.classList.contains('has-children')) {
                    this.nav_active = !this.nav_active;
                }
            },

            toggleSubMenu(e) {
                let sub_menu = e.target.nextSibling;
                sub_menu.classList.toggle('open');

                document.querySelector('.active').classList.toggle('child-open');

                document.querySelectorAll('.nav-main  > ul > li:not(.has-children)').forEach((el) => {
                     if(el != e.target) {
                         el.classList.toggle('inactive');
                     }
                })

            },


            entered() {
                // this.
            }
        }
    }
</script>