<template>
    <v-dialog v-model="show" persistent max-width="600px">
        <AddContactForm
            @close="$emit('close')"
            @add="addContact" />
    </v-dialog>
</template>

<script>
    import AddContactForm from './AddContactForm'
    import contactService from '@/services/contacts'

    export default {
        props: {
            show: Boolean
        },
        components: {
            AddContactForm
        },
        methods: {
            async addContact(contactData) {
                let { data } = await contactService.addContact(contactData);

                this.$emit('added', data);
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>