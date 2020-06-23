<template>
    <v-form 
        @submit.prevent="editContact"
        ref="form"
        lazy-validation
    >
        <v-card>
            <v-card-title>
                <span class="headline">Изменить контакт</span>
            </v-card-title>
            <v-card-text>
                <v-container>
                    <v-row>
                        <v-col cols="12" sm="12" md="12" lg="12">
                            <v-text-field 
                                label="ФИО *"
                                v-model="name"
                                :rules="nameRules"
                                required
                                hide-details
                            ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="12" md="12" lg="12">
                            <v-text-field 
                                label="Email адрес *"
                                v-model="email"
                                :rules="emailRules"
                                required
                                hide-details
                            ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="12" md="12" lg="12">
                            <v-text-field 
                                label="Номер телефона *"
                                v-model="phone"
                                :rules="phoneRules"
                                required
                                hide-details
                            ></v-text-field>
                        </v-col>
                    </v-row>
                </v-container>

                <small>* указывает на обязательные поля</small>
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="$emit('close')">Закрыть</v-btn>
                <v-btn color="blue darken-1" text type="submit">Сохранить</v-btn>
            </v-card-actions>
        </v-card>
    </v-form>
</template>

<script>
    export default {
        props: {
            contact: Object
        },
        data() {
            return {
                id: this.contact.id,
                name: this.contact.name,
                email: this.contact.email,
                phone: this.contact.phone,

                nameRules: [
                    v => !!v || 'Обязательное поле',
                ],
                emailRules: [
                    v => !!v || 'Обязательное поле',
                    v => /.+@.+\..+/.test(v) || 'Введите действительный e-mail адрес',
                ],
                phoneRules: [
                    v => !!v || 'Обязательное поле',
                ],
            }
        },
        methods: {
            editContact() {
                let validation = this.$refs.form.validate();

                if(validation) {
                    this.$emit('edit', {
                        id: this.id,
                        name: this.name,
                        email: this.email,
                        phone: this.phone
                    });

                    this.clearForm();
                }
            },
            clearForm() {
                this.$refs.form.reset()
            }
        },
        watch: {
            contact() {
                this.name = this.contact.name;
                this.email = this.contact.email;
                this.phone = this.contact.phone;
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>