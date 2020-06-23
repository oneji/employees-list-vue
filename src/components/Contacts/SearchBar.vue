<template>
    <v-row>
        <v-col cols="12" sm="9" md="10" lg="10">
            <v-text-field
                label="Поиск"
                placeholder="Начните вводить имя"
                solo
                @keyup.enter="search()"
                @input="search()"
                v-model="query"
            ></v-text-field>
        </v-col>

        <v-col cols="12" sm="3" md="2" lg="2">
            <v-btn class="mt-2" color="primary" block @click="$emit('add-contact')">Создать контакт</v-btn>
        </v-col>
    </v-row>
</template>

<script>
    import _ from 'lodash'

    export default {
        data() {
            return {
                query: ''
            }
        },
        methods: {
            search: _.debounce(function() {
                this.$emit('search', this.query);
            }, 500)
        }
    }
</script>

<style lang="scss" scoped>

</style>