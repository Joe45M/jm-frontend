<template>
    <div class="wrap">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h1 class="page-title">PROJECTS</h1>
                    <div class="page-description">
                        <p>Recent projects, including Web Design & Development.</p>
                    </div>
                </div>
            </div>
        </div>
        <Projects showTitle="false" perPage="15"></Projects>
    </div>
</template>


<script>
    import Projects from "../components/Projects.vue";
    export default {
        name: "projectPage",
        components: {
            Projects,
        },


        metaInfo: {
            title: 'Projects - Joe Moses - WordPress development',
            meta: [
                { charset: 'utf-8' },
                { name: 'description', content: 'Bespoke WordPress projects.' }
            ]
        },
        mounted() {
            this.$emit('style', 'light')
        }
    }
</script>