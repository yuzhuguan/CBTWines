<template>
  <v-container class="pa-" fluid>
    <v-card class="transparent" flat>
      <v-row class="text-center text-align">
        <v-col class="text-right">
          <v-card-text class="title font-weight-light pt-3">
            <nuxt-link to="#goAboutUs" class="grey--text text--darken-3">關於我們</nuxt-link>  
          </v-card-text>
        </v-col>
        <v-col>
          <v-card-text class="pt-0 display-1 grey--text text--darken-1">|</v-card-text>
        </v-col>
        <v-col>
          <v-card-text class="title font-weight-light pt-3">
            <nuxt-link to="#goWineList" class="grey--text text--darken-3">酒單</nuxt-link>  
          </v-card-text>
        </v-col>
        
        <v-col>
          <v-card-text class="pt-1 display-1 grey--text text--darken-1">|</v-card-text>
        </v-col>
        <v-col class="text-left"> 
          <v-card-text class="ml-n5 title font-weight-light pt-3">
            <nuxt-link to="#goContactUs" class="grey--text text--darken-3">聯繫我們</nuxt-link>  
          </v-card-text>
        </v-col>
      </v-row>
    </v-card>
    <v-card class="transparent ma-0" flat id="goAboutUs">
      <v-row>
        <v-col :cols="12" lg="6" xl='6'>
          <v-card class="mt-11 transparent" flat>
            <v-card-title class="mx-4 pt-5 pb-2" :style="{'opacity': 0.5}">
              關於我們
            </v-card-title>
            <v-card-text class="blockquote grey--text text--darken-2 text-justify">
              葡萄酒文化源遠流長，
              每年從各地生產的葡萄酒多不勝數，
              在如此多種類的葡萄酒中，
              挑選出符合自己口味的葡萄酒可謂是沙中淘金。
              我們的使命是替客人在琳琅滿目的葡萄酒種類中，
              根據客人需求及口味，挑選出符合要求的葡萄酒。
              我們期望每位客人來到香貝田酒業有限公司都能夠選擇到適合的美酒，
              在品嘗紅酒的時候，
              能夠在味覺、視覺、嗅覺中得到獨一無二的感受，
              酒味亦能環繞口中，餘韻無窮。
              本公司提供了多個地區，
              各具不同香氣、口感、風味的葡萄酒，
              以供客人任意挑選，繼而滿載而歸。
              我們深信每一瓶葡萄酒有其獨特的靈魂及生命，
              其風味就像訴說它一生的故事，
              幫助每位客人找到所青睞的葡萄酒，是我們至高無上的榮幸。
            </v-card-text>
          </v-card>
        </v-col>
        <v-col :cols="12" lg="5" xl='5' class="d-none d-sm-none d-md-none d-lg-flex">
          <v-card flat class="ma-11">
            <v-img src="/img/photo1.jpeg" alt="banner" />
          </v-card>
        </v-col>
      </v-row>
    </v-card>

    <v-card class="transparent mb-7" flat width="100%" id="goWineList">
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

    <v-card class="transparent my-7" flat width="100%" id="goContactUs">
        <v-img src="/img/divider.png" alt="divider" :style="{'opacity': 0.3}"/>
    </v-card>

    <v-card class="transparent" flat>
      <v-row>
        <v-col class="ml-5" :cols="7">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d922.6139242470448!2d114.148351!3d22.336416000000003!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34040754eca8813f%3A0x4f9fe56467eaabd4!2z5piM6ZqG5bel5qWt5aSn5buI!5e0!3m2!1szh-TW!2shk!4v1585061879759!5m2!1szh-TW!2shk" 
            width="100%" 
            height="390" 
            frameborder="0" 
            style="border:0;" 
            allowfullscreen="" 
            aria-hidden="false" 
            tabindex="0"
          ></iframe>
        </v-col>
        <v-col :cols="undefined">
          <v-row class="mx-0 my-n1">
            <v-col :cols="2" >
              <v-row><v-icon>place</v-icon></v-row>
            </v-col>
            <v-col :cols="undefined" class="text-left font-weight-regular .caption">
              <v-row>香港 九龍</v-row>
              <v-row>長沙灣 長義街10號</v-row>
              <v-row>昌隆工業大廈</v-row>
              <v-row>6樓 B3室</v-row>
            </v-col>
          </v-row>
          <v-row class="mx-0 my-n2">
            <v-col :cols="2" >
              <v-row><v-icon>call</v-icon></v-row>
            </v-col>
            <v-col :cols="undefined" class="text-left font-weight-regular .caption">
              <v-row>+852 3996 9178 </v-row>
            </v-col>
          </v-row>
          <v-row class="mx-0 my-n1">
            <v-col :cols="2" >
              <v-row><v-icon>print</v-icon></v-row>
            </v-col>
            <v-col :cols="undefined" class="text-left font-weight-regular .caption">
              <v-row>+852 3996 9179 </v-row>
            </v-col>
          </v-row>
          <v-row class="mx-0 my-n1">
            <v-col :cols="2" >
              <v-row><v-icon>email</v-icon></v-row>
            </v-col>
            <v-col :cols="undefined" class="text-left font-weight-regular .caption">
              <v-row>cbtwines@gmail.com</v-row>
            </v-col>
          </v-row>
          <v-row class="mx-0 my-1">
            <v-col :cols="2" >
              <v-row>E - Fax</v-row>
            </v-col>
            <v-col :cols="undefined" class="text-left font-weight-regular .caption">
              <v-row>8148 1617</v-row>
            </v-col>
          </v-row>
          <v-divider class="mb-3"></v-divider>
          <v-row class="mx-0 my-n1">
            <v-col :cols="2" >
              <v-row><v-icon>person</v-icon></v-row>
            </v-col>
            <v-col :cols="undefined" class="text-left font-weight-regular .caption">
              <v-row>Billy C.M. Choi</v-row>
            </v-col>
          </v-row>
          <v-row class="mx-0 my-n1">
            <v-col :cols="2" >
              <v-row><v-icon>smartphone</v-icon></v-row>
            </v-col>
            <v-col :cols="undefined" class="text-left font-weight-regular .caption">
              <v-row>+852 9135 6561</v-row>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-card>

    <v-card class="transparent my-7" flat width="100%">
        <v-img src="/img/divider.png" alt="divider" :style="{'opacity': 0.3}"/>
    </v-card>

    <v-card  class="transparent mb-2" flat>
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
          { text: '酒名', value: 'name'},
          { text: '中文', value: 'chineseName' },
          { text: '產地', value: 'appellation'},
          { text: '年份', value: 'vintage'},
          { text: '評級', value: 'rating'},
          { text: '價錢(港幣)', value: 'price'}
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