<template>
  <v-container class="pt-12" fluid>
    <v-card class="transparent mt-11" flat id="goAboutUs">
      <v-row>
        <v-col :cols="12" lg="6" xl='6'>
          <v-card class="mt-11 transparent" flat>
            <v-card-title class="ml-2 pt-5 display-1 white--text">
              關於我們
            </v-card-title>
            <v-card-text class="blockquote white--text text-justify subtitle-1 font-weight-light">
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
              那就是<a href="http://www.cbtwines.co/contact-us" class="font-weight-bold lime--text">香貝田酒業有限公司</a>。
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
  </v-container>
</template>

<script>
import VideoBg from 'vue-videobg'

export default {
  layout: 'vidbg',
  components: {
    VideoBg
  },
  data() {
    return {
    }
  },
  mounted() {
  },
  computed: {
  }
}
</script>

<style>
a{
  text-decoration: none;
}
</style>