<template>
    <v-form 
        @submit.prevent="addContact"
        ref="form"
        lazy-validation
    >
        <v-card>
            <v-card-title>
                <span class="headline">Добавить контакт</span>
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
                <v-btn color="blue darken-1" text type="submit">Создать</v-btn>
            </v-card-actions>
        </v-card>
    </v-form>
</template>

<script>
    export default {
        data() {
            return {
                name: '',
                email: '',
                phone: '',

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
            addContact() {
                let validation = this.$refs.form.validate();

                if(validation) {
                    this.$emit('add', {
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
        }
    }
</script>

<style lang="scss" scoped>

</style>