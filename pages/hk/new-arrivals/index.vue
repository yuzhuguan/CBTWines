<template>
  <v-container class="pt-11" fluid>
    <v-card class="transparent" flat>
      <h1 class="mt-11 mb-n5 font-weight-thin display-1">新酒到貨</h1>
      <v-card-title>
        <v-text-field v-model="search" append-icon="search" label="Search" single-line hide-details></v-text-field>
      </v-card-title>
      <v-data-table
        :headers="headers"
        :items="newArrivals"
        :items-per-page="8"
        :search="search"
        :sort-by="['name', 'vintage']"
      ></v-data-table>
      <v-card-text class="subtitle-1 ml-n3">
        對我們的<a href="/hk/special-offers">特别推介</a>有興趣嗎? 
        還是看看我們的<a href="/hk/winelist">酒單</a>.
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
          { text: '酒名', value: 'name'},
          { text: '中文', value: 'chineseName' },
          { text: '產地', value: 'origin' },
          { text: '產區', value: 'appellation'},
          { text: '年份', value: 'vintage'},
          { text: '評級', value: 'rating'},
          { text: '價錢(港幣)', value: 'price'}
      ]
    };
  },
  mounted() {

  },
  computed: {
    ...mapState(['newArrivals'])
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