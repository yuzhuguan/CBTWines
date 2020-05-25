<template>
  <v-container class="pt-11" fluid>
    <v-row
      class="mt-11"
      no-gutters
    >
      <v-col :cols="2">
        <v-card color="transparent" flat>
          <v-row class="display-1 my-4 ml-3">產地</v-row>
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
          { text: '酒名', value: 'name'},
          { text: '中文', value: 'chineseName' },
          { text: '產地', value: 'origin' },
          { text: '產區', value: 'appellation'},
          { text: '年份', value: 'vintage'},
          { text: '評級', value: 'rating'},
          { text: '價錢(港幣)', value: 'price'}
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