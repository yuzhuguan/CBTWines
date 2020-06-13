<template>
  <v-container class="pt-11" fluid>
    <v-card class="transparent" flat>
      <h1 class="mt-11 mb-n5 font-weight-thin display-1">特别推介</h1>
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
        对我们的<a href="/cn/new-arrivals">新酒到货</a>有兴趣吗?
        还是看看我们的<a href="/cn/winelist">酒单</a>.
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
          { text: '产地', value: 'origin' },
          { text: '产区', value: 'appellation'},
          { text: '年份', value: 'vintage'},
          { text: '评级', value: 'rating'},
          { text: '价钱(港币)', value: 'price'}
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