<template>
    <div class="loading-block" v-if="show">
        <v-progress-circular
            :size="50"
            color="primary"
            indeterminate
        ></v-progress-circular>
    </div>
</template>

<script>
    export default {
        props: {
            show: {
                type: Boolean,
                default: false
            }
        }
    }
</script>


<style lang="scss" scoped>
    .loading-block {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        z-index: 1;
        background-color: #fff;
    }
</style>