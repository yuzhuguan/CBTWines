<template>
  <v-container class="pa-" fluid>
    <v-card class="transparent ma-0" flat>
      <v-row>
        <v-col :cols="6">
          <v-card class="mt-11 transparent" flat>
            <v-card-title class="mx-4 pt-5" :style="{'opacity': 0.5}">
              About Us
            </v-card-title>
            <v-card-text class="blockquote grey--text text--darken-2 text-justify">
              Like a fingerprint, every bottle of wine is unique. In our belief, every customer pursues a unique flavor in wines. Assisting customers in choosing the most suitable wines according to customers' distinctive characters is our mission. With wines from various countries and places, customers can select their wine from a wide range of choices with quality guaranteed. Through Touch &amp; Taste, every customer will gain satisfaction with their favorite bottle of wine after visiting CBT WINES COMPANY LIMITED.
            </v-card-text>
          </v-card>
        </v-col>
        <v-col :cols="6">
          <v-card flat class="ma-11">
            <v-img src="/img/photo1.jpeg" alt="banner" />
          </v-card>
        </v-col>
      </v-row>
    </v-card>

    <v-card class="transparent mb-7" flat width="100%">
        <v-img src="/img/divider.png" alt="divider" :style="{'opacity': 0.3}"/>
    </v-card>
    
    <v-card class="transparent" flat width="300">
        <v-img src="/img/winelist.png" alt="winelist" :style="{'opacity': 0.5}"/>
    </v-card>
    
    <v-row
      class="mt-3"
      no-gutters
    >
      <v-col :cols="12">
        <v-card flat olor="transparent">
          <v-card-title>
            <v-text-field
              v-model="search"
              append-icon="search"
              label="Search"
              single-line
              hide-details
            ></v-text-field>
          </v-card-title>
          <v-data-table
          :headers="headers"
          :items="wines.data"
          :items-per-page="10"
          :search="search"
          :sort-by="['appellation', 'name', 'vintage']"
          >
          </v-data-table>
        </v-card>
      </v-col>
    </v-row>

    <v-card class="transparent my-7" flat width="100%">
        <v-img src="/img/divider.png" alt="divider" :style="{'opacity': 0.3}"/>
    </v-card>

    <v-card  class="transparent mb-7" flat>
      <v-row>
        <v-col :col="undefined"></v-col>
        <v-col :col="undefined">
          <v-card-text class="blockquote grey--text text--darken-1 text-center">
              "Where there is no wine, there is no love"
            </v-card-text>
            <v-card-text class="blockquote grey--text text--darken-1 text-center ml-n3">
                 — Euripides
            </v-card-text>
        </v-col>
        <v-col :col="undefined"></v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
import { mapState } from 'vuex'

export default {
  components: {
  },
  data() {
    return {
      search: '',
      headers: [
          { text: 'Name', value: 'name'},
          { text: 'Chinese Name', value: 'chineseName' },
          { text: 'Appellation', value: 'appellation'},
          { text: 'Vintage', value: 'vintage'},
          { text: 'Rating', value: 'rating'},
          { text: 'Price(HKD)', value: 'price'}
      ]
    }
  },
  mounted() {
  },
  computed: {
    ...mapState(['wines'])
  },
  async fetch({store}) {
    await store.dispatch('loadWineList')
  }
}
</script>

<style scoped>
</style>