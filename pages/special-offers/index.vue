<template>
  <v-container class="pt-11" fluid>
    <v-card class="transparent" flat>
      <h1 class="mt-11 mb-n5 font-weight-thin display-1">Special Offers</h1>
      <v-card-title>
        <v-text-field v-model="search" append-icon="search" label="Search" single-line hide-details></v-text-field>
      </v-card-title>
      <v-data-table
        :headers="headers"
        :items="specialOffers"
        :items-per-page="8"
        :search="search"
        :sort-by="['name', 'vintage']"
      ></v-data-table>
      <v-card-text class="subtitle-1 ml-n3">
        Do you want some <a href="/new-arrivals">New Arrivals</a>? 
        Or check out our wine list <a href="/winelist">here</a>.
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import { mapState } from 'vuex'
export default {
  layout: "new-arrivals",
  components: {},
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
      ]
    };
  },
  mounted() {

  },
  computed: {
    ...mapState(['specialOffers'])
  },
  async fetch({store}) {
    await store.dispatch('loadWineList')
  }
};
</script>

<style>
a {
  text-decoration: none;
}
</style>