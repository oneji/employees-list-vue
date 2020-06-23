<template>
    <v-dialog v-model="show" persistent max-width="600px">
        <EditContactForm
            @close="$emit('close')"
            @edit="editContact"
            :contact="contact" />
    </v-dialog>
</template>

<script>
    import EditContactForm from './EditContactForm'
    import contactService from '@/services/contacts'

    export default {
        props: {
            show: Boolean,
            contact: Object
        },
        components: {
            EditContactForm
        },
        methods: {
            async editContact(contactData) {
                let { data } = await contactService.editContact(contactData);

                this.$emit('edited', data);
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>