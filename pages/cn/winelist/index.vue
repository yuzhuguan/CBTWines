<template>
  <v-container class="pt-11" fluid>
    <v-row
      class="mt-8"
      no-gutters
    >
      <v-col :cols="2">
        <v-card color="transparent" flat>
          <v-row class="title mt-2 ml-3">产地</v-row>
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
          <v-layout column style="height: 75vh">
            <v-flex style="overflow: auto">
              <v-data-table
                :headers="headers"
                :items="wines.data"
                :items-per-page="8"
                :search="search"
                :sort-by="['name', 'vintage']"
              >
              </v-data-table>
            </v-flex>
          </v-layout>
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
          { text: '产地', value: 'origin' },
          { text: '产区', value: 'appellation'},
          { text: '年份', value: 'vintage'},
          { text: '评级', value: 'rating'},
          { text: '价钱(港币)', value: 'price'}
      ],
      origins: [
        { en: 'All', chin: '全部'},
        { en: 'Bordeaux', chin: '波尔多区'},
        { en: 'Margaux', chin: '玛歌区'},
        { en: 'Pauillac', chin: '波亚克产区'},
        { en: 'Saint Emilion', chin: '圣美伦产区'},
        { en: 'Saint Estephe', chin: '圣爱斯泰夫产区'},
        { en: 'Saint Julien', chin: '圣祖莉安产区'},
        { en: 'Pessac Leognan', chin: '佩萨克-雷奥良产区'},
        { en: 'Haut Medoc', chin: '上美度产区'},
        { en: 'Sauternes', chin: '苏岱产区'},
        { en: 'Burgundy', chin: '勃艮第区'},
        { en: 'Rhone', chin: '隆河谷区'},
        { en: 'Champagne', chin: '香槟区'},
        { en: 'Australia', chin: '澳洲'},
        { en: 'Whisky', chin: '威士忌'},
        { en: 'Italy', chin: '义大利'},
        { en: 'U.S.A.', chin: '美国'},
        { en: 'Accessory', chin: '其他'}
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