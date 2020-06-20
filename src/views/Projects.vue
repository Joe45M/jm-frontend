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
        <Projects></Projects>
    </div>
</template>


<script>
    import Projects from "../components/ProjectListing.vue";
    export default {
        name: "projectPage",
        components: {
            Projects,
        }
    }
</script>