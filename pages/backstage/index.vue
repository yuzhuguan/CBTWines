<template>
  <v-container>
    <v-card flat olor="transparent">
          <v-data-table
          :headers="headers"
          :items="wines.data"
          :items-per-page="10"
          :search="search"
          :sort-by="['appellation', 'name', 'vintage']"
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
                        <v-text-field v-model="editedItem.name" label="Wine Name"></v-text-field>
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
            { text: 'Name', value: 'name'},
            { text: 'Chinese Name', value: 'chineseName' },
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
                appellation: '',
                chineseName: '',
                vintage: '',
                rating: '',
                price: 0
            },
            defaultItem: {               
                _id: null,
                name: '',
                appellation: '',
                chineseName: '',
                vintage: '',
                rating: '',
                price: 0
            }
        }
    },
    mounted() {
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
            })
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
                })
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
                }).then(
                    this.$store.dispatch('loadWineList')
                )
            }
            this.close()
        },
    }
}
</script>

<style scoped>
</style>