<template>
  <v-container class="pt-11" fluid>
    <v-row
      class="mt-11"
      no-gutters
    >
      <v-col :cols="2">
        <v-card color="transparent" flat>
          <v-row class="display-1 my-4 ml-3">Origin</v-row>
          <v-row 
            v-for="(origin, i) in origins"
            :key="i"
            class="title my-2 ml-3 font-weight-light"
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
          :items-per-page="10"
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
          { text: 'Origin', value: 'origin' },
          { text: 'Appellation', value: 'appellation'},
          { text: 'Vintage', value: 'vintage'},
          { text: 'Rating', value: 'rating'},
          { text: 'Price(HKD)', value: 'price'}
      ],
      origins: [
        'All',
        'Bordeaux', 
        'Burgundy', 
        'Rhone Valley', 
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