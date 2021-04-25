<template>
    <section>
        <div class="container">
            <div class="row">
                <div class="col-12 col-lg-8">
                    <h1 class="page-title">HOW CAN I HELP?</h1>
                    <p class="sub-title">Have a project in mind? Drop me a line and tell me more - no time like the present.</p>

                    <a href="mailto:hello@joemoses.co.uk" target="_blank" class="btn btn-primary mt-5">Email me now</a>
                </div>
            </div>
        </div>
    </section>
</template>


<style scoped lang="scss">
    section {
        .container {
            min-height: 70vh;
        }
    }
</style>

<script>
    export default {
        name: "Contact",

        metaInfo: {
            title: 'Contact - Joe Moses - WordPress development',
            meta: [
                { charset: 'utf-8' },
                { name: 'description', content: 'Contact me today for a free quote. ' }
            ]
        },

        mounted() {
            this.$emit('style', 'light')
        }
    }
</script>