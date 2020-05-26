<template>
  <v-container class="pt-11" fluid>
    <v-row
      class="mt-8"
      no-gutters
    >
      <v-col :cols="2">
        <v-card color="transparent" flat>
          <v-row class="title mt-2 ml-3">Region</v-row>
          <v-row 
            v-for="(origin, i) in origins"
            :key="i"
            class="subtitle-2 my-2 ml-3"
            @click="changeOrigin(origin)"
          >
            {{origin}}
          </v-row>
        </v-card>
      </v-col>
      <v-col :cols="10">
        <v-card flat>
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
          :items-per-page="8"
          :search="search"
          :sort-by="['name', 'vintage']"
          >
          </v-data-table>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState } from 'vuex'

export default {
  layout: 'winelist',
  components: {
  },
  data() {
    return {
      search: '',
      headers: [
          { text: 'Product', value: 'name'},
          { text: 'Chinese Name', value: 'chineseName' },
          { text: 'Region', value: 'origin' },
          { text: 'Appellation', value: 'appellation'},
          { text: 'Vintage', value: 'vintage'},
          { text: 'Rating', value: 'rating'},
          { text: 'Price(HKD)', value: 'price'}
      ],
      origins: [
        'All',
        'Bordeaux',
        'Margaux',
        'Pauillac',
        'Saint Emilion',
        'Saint Estephe',
        'Saint Julien',
        'Pessac Leognan',
        'Haut Medoc',
        'Sauternes',
        'Burgundy', 
        'Rhone', 
        'Champagne', 
        'Australia', 
        'Whisky', 
        'Italy',
        'U.S.A.',
        'Accessory'
      ]
    }
  },
  methods: {
    changeOrigin(target) {
      if(target != 'All')
        this.search = target;
      else
        this.search = '';
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

<style>
a{
  text-decoration: none;
}
</style>