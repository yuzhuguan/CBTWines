<template>
  <v-container class="pt-11" fluid>
    <v-row
      class="mt-8"
      no-gutters
    >
      <v-col :cols="2">
        <v-card color="transparent" flat>
          <v-row class="title mt-2 ml-3">產地</v-row>
          <v-row 
            v-for="(origin, i) in origins"
            :key="i"
            class="subtitle-2 my-2 ml-3"
            @click="changeOrigin(origin.en)"
          >
            {{origin.chin}}
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
          { text: '酒名', value: 'name'},
          { text: '中文', value: 'chineseName' },
          { text: '產地', value: 'origin' },
          { text: '產區', value: 'appellation'},
          { text: '年份', value: 'vintage'},
          { text: '評級', value: 'rating'},
          { text: '價錢(港幣)', value: 'price'}
      ],
      origins: [
        { en: 'All', chin: '全部'},
        { en: 'Bordeaux', chin: '波爾多區'},
        { en: 'Margaux', chin: '瑪歌區'},
        { en: 'Pauillac', chin: '波亞克產區'},
        { en: 'Saint Emilion', chin: '聖美倫產區'},
        { en: 'Saint Estephe', chin: '聖愛斯泰夫產區'},
        { en: 'Saint Julien', chin: '聖祖莉安產區'},
        { en: 'Pessac Leognan', chin: '佩薩克-雷奧良產區'},
        { en: 'Haut Medoc', chin: '上美度產區'},
        { en: 'Sauternes', chin: '蘇岱產區'},
        { en: 'Burgundy',  chin: '勃艮第區'},
        { en: 'Rhone',  chin: '隆河谷區'},
        { en: 'Champagne',  chin: '香檳區'},
        { en: 'Australia',  chin: '澳洲'},
        { en: 'Whisky',  chin: '威士忌'},
        { en: 'Italy', chin: '義大利'},
        { en: 'U.S.A.', chin: '美國'},
        { en: 'Accessory', chin: '其他'},
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