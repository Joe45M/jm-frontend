<template>
    <section class="contact-wrap">
        <div class="container">
            <div class="row">
                <div class="col-lg-1">
                    <span class="vertical-title">CONTACT</span>
                </div>
                <div class="col-lg-11">
                    <a href="mailto:info@joemoses.dev" class="link">INFO@ <br> JOEMOSES.CO.UK</a>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">
    section {
        position: relative;
        z-index: 2;
        background-color: #EFEFEF;
        padding: 50px 0;
        @include media-breakpoint-up(lg) {

            padding: 100px 0;
            padding-top: 140px;
        }
    }

    a {
        padding-top: 30px;
        display: block;
        font-weight: bold;
        text-transform: lowercase;
        color: #000000;
        letter-spacing: 2px;
        font-size: 150%;

        @include media-breakpoint-up(lg) {
            letter-spacing: 10px;
            font-size: 400%;
        }

        &:hover {
            color: #000000;
        }
    }
</style>