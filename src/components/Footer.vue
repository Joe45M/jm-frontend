<template>
    <div class="container">
        <footer>
            <div class="row">
                <div class="col-lg-3">
                    <a href="https://twitter.com/joemoses33" class="icon-twitter"></a>
                    <a href="https://www.instagram.com/jmdesign33/" class="icon-instagram"></a>
                    <a href="https://github.com/Joe45M" class="icon-github"></a>
                </div>
                <div class="offset-lg-6 col-lg-3 d-flex align-items-center"><span class="cr">© Copyright JM Design 2020</span></div>
            </div>
        </footer>
    </div>
</template>

<style lang="scss" scoped>
    footer {
        padding: 40px 0;
        a {
            color: #000;
            font-size: 150%;
            padding-right: 25px;

            &:before {
                color: #000000 !important;
            }

            &:hover {
                text-decoration: none;
            }
        }

        span {
            display: block;
            padding-top: 15px;
            font-size: 80%;
        }
    }
</style>

<script>
    export default {
        name: "Footer"
    }
</script>