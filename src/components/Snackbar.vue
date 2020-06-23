<template>
    <v-snackbar 
        :timeout="3000"
        :color="snackbar.color"
        v-model="snackbar.active"
        top>
        {{ snackbar.text }}
    </v-snackbar>
</template>

<script>
export default {
    computed: {
        snackbar() {
            return this.$store.state.snackbar;
        }
    }
}
</script>

<style lang="scss" scoped>

</style>