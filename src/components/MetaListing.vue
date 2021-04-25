<template>
    <div>
        <div class="container">
            <div class="row align-items-end" v-if="metas">
                <div class="col-12 h-100 col-lg-6 mb-5" v-for="(index, meta) in metas" v-bind:key="index" >
                    <div class="meta-item h-100">
                        <div class="value">{{ index }}</div>
                        <div class="key-name">{{ readable(meta) }}</div>
                    </div>
                </div>
            </div>
            <div class="row align-items-end" v-if="metas.length == 0">
                <div class="col-12">
                    <div class="meta-item h-100">
                        <div class="value">No results</div>
                        <div class="key-name mb-3">No meta found for that search.</div>
                        <div class="btn btn-black" @click="$emit('reset')">Reset</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "MetaListing",

        props: [
            'metas'
        ],

        methods: {
            readable(key) {
                return key.replace(/:|_|-/g, ' ');
            }
        }
    }
</script>

<style scoped lang="scss">
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

    .meta-item {

        .value {
            font-size: 2rem;
        }

        .key-name {
            text-transform: uppercase;
            color: transparentize(#000, 0.5);
            font-weight: bold;
        }
    }
</style>