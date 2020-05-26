<template>
  <v-container>
    <v-card flat olor="transparent">
          <v-data-table
          :headers="headers"
          :items="wines.data"
          :items-per-page="10"
          :search="search"
          :sort-by="['name', 'vintage']"
          >
          <template v-slot:top>
            <v-dialog v-model="dialog" max-width="500px">
                
                <template v-slot:activator="{ on }">
                    <v-row>
                        <v-col class="ml-4">
                            <v-text-field
                                v-model="search"
                                append-icon="search"
                                label="Search"
                                single-line
                                hide-details
                            ></v-text-field>
                        </v-col>
                        <v-btn dark v-on="on" class="mt-7 mr-7">New Wine</v-btn>
                    </v-row>
                </template>
                <v-card>
                <v-card-title>
                    <span class="headline">{{ formTitle }}</span>
                </v-card-title>
    
                <v-card-text>
                    <v-container>
                    <v-row>
                        <v-col cols="12" sm="6" md="4">
                        <v-text-field v-model="editedItem.name" label="Product"></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                        <v-text-field v-model="editedItem.origin" label="Region"></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                        <v-text-field v-model="editedItem.appellation" label="Appellation"></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                        <v-text-field v-model="editedItem.chineseName" label="Chinese Name"></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                        <v-text-field v-model="editedItem.vintage" label="Vintage"></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                        <v-text-field v-model="editedItem.rating" label="Rating"></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                        <v-text-field v-model="editedItem.price" label="Price(HKD)"></v-text-field>
                        </v-col>
                    </v-row>
                    </v-container>
                </v-card-text>
    
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" text @click="close">Cancel</v-btn>
                    <v-btn color="blue darken-1" text @click="save">Save</v-btn>
                </v-card-actions>
                </v-card>
            </v-dialog>
        </template>
            <template v-slot:item.actions="{ item }">
                <v-icon
                small
                class="mr-2"
                @click="editItem(item)"
                >
                mdi-pencil
                </v-icon>
                <v-icon
                small
                @click="deleteItem(item)"
                >
                mdi-delete
                </v-icon>
            </template>
          </v-data-table>
        </v-card>

        <v-card class="transparent my-7" flat width="100%">
            <v-img src="/img/divider.png" alt="divider" :style="{'opacity': 0.3}"/>
        </v-card>

        <v-alert :type="alertType" :value="!msg==''" transition="scale-transition">
            {{ msg }}
        </v-alert>

        <v-card class="container">
            <v-title class="title mx-3"> <v-icon color="blue lighten-3" class="mb-1 mr-3">account_box</v-icon>Create an Account</v-title>
            
            <v-form
                ref="form"
                v-model="valid"
            >
                <v-text-field
                    v-model="username"
                    :counter="10"
                    :rules="usernameRules"
                    label="Username"
                    required
                    class="mx-3"
                ></v-text-field>

                <v-text-field
                    v-model="password"
                    :rules="passwordRules"
                    label="Password"
                    type="password"
                    required
                    class="mx-3"
                ></v-text-field>

                <div class="text-right">
                    <v-btn color="error" @click="reset" class="btn">Reset</v-btn>
                    <v-btn color="success" @click="createAccount" class="btn" :disabled="!valid">Sign Up</v-btn>
                </div>
            </v-form>
        </v-card>
  </v-container>
</template>

<script>
import { mapState } from 'vuex'
import axios from 'axios'

export default {
    components: {
    },
    data() {
        return {
            search: '',
            dialog: false,
            headers: [
            { text: 'Product', value: 'name'},
            { text: 'Chinese Name', value: 'chineseName' },
            { text: 'Region', value: 'origin' },
            { text: 'Appellation', value: 'appellation'},
            { text: 'Vintage', value: 'vintage'},
            { text: 'Rating', value: 'rating'},
            { text: 'Price(HKD)', value: 'price'},
            { text: 'Actions', value: 'actions', sortable: false },
            ],
            editedIndex: -1,
            editedItem: {
                _id: null,
                name: '',
                origin: '',
                appellation: '',
                chineseName: '',
                vintage: '',
                rating: '',
                price: 0
            },
            defaultItem: {               
                _id: null,
                name: '',
                origin: '',
                appellation: '',
                chineseName: '',
                vintage: '',
                rating: '',
                price: 0
            },
            valid: true,
            username: "",
            usernameRules: [
                v => !!v || 'Username is required',
                v => (v && v.length <= 10) || 'Username must be less than 10 characters',
            ],
            password: "",
            passwordRules: [
                v => !!v || 'Password is required',
                v => (v && v.length >= 6) || 'Password must has at least 6 characters',
            ],
            msg: "",
            alertType: ''
        }
    },
    mounted() {
        if(!localStorage.getItem('token')) {
            this.$router.push('/')
        }
    },
    computed: {
        ...mapState(['wines']),
            formTitle () {
            return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
        }
    },
    async fetch({store}) {
        await store.dispatch('loadWineList')
    },
    methods: {
        close () {
            this.dialog = false
            this.editedItem = Object.assign({}, this.defaultItem)
            this.editedIndex = -1
        },
        editItem (item) {
            this.editedIndex = 1
            this.editedItem = Object.assign({}, item)
            this.dialog = true
        },
        deleteItem (item) {
            axios.post('/api/backstage/delete-wine', {
                targetWine: item
            },
            {headers: {token: localStorage.getItem('token')}})
            .then(
                res => {
                    console.log(res);
                    if(res.status === 200) {
                        //alert(res.data.message)
                        this.$store.dispatch('loadWineList')
                    }
                }
            )
        },
        save () {
            if (this.editedIndex > -1) {
                //alert(this.editedItem.price)
                axios.post('/api/backstage/update-wine', {
                    newDetail: this.editedItem
                },
                {headers: {token: localStorage.getItem('token')}})
                .then(
                    res => {
                        console.log(res);
                        if(res.status === 200) {
                            //alert(res.data.message)
                            this.$store.dispatch('loadWineList')
                        }
                    }
                )
            } else {
                axios.post('/api/backstage/add-wine', {
                    newDetail: this.editedItem
                },
                {headers: {token: localStorage.getItem('token')}}   
                ).then(
                    this.$store.dispatch('loadWineList')
                )
            }
            this.close()
        },
        createAccount() {
            axios.post('/api/backstage/sign-up', {
                username: this.username,
                password: this.password
            },
            {headers: {token: localStorage.getItem('token')}})
            .then(
                res => {
                    console.log(res);
                    //this.$router.push('/signin');
                    this.msg = 'success'
                    this.alertType = 'success'
                },
                err => {
                    console.log(err.response)
                    this.msg = err.response.data.msg;
                    this.alertType = 'error'
                }
            )
        },
        reset () {
            this.$refs.form.reset()
        }
    }
}
</script>

<style scoped>
</style>