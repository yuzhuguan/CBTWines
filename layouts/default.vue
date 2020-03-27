<template>
  <v-app :style="{ 'background-image': 'url(/img/BG.png)'}" dark>
    <v-app-bar app :elevation="0" color="white" :style="{'opacity': 0.8}">
      
      <v-toolbar-item class="font-weight-light">
        <nuxt-link to="/backstage" class="black--text"><v-icon>supervisor_account</v-icon > Login</nuxt-link>
      </v-toolbar-item>
      
      <v-spacer></v-spacer>

      <v-toolbar-item>
        <v-toolbar-title><nuxt-link to="/" id="title"><img class="logo" src="/img/logo.png" alt="logo"/></nuxt-link></v-toolbar-title>
      </v-toolbar-item>
        
      <v-spacer></v-spacer>

      <v-toolbar-item>
          <v-btn text @click="changeLang('traditionalChinese')">繁</v-btn> | 
          <v-btn text @click="changeLang('simplifiedChinese')">简</v-btn> | 
          <v-btn text @click="changeLang('english')">ENG</v-btn>  
      </v-toolbar-item>
    </v-app-bar>

    <v-content app>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    
    <v-footer
      class="font-weight-light"
    >
      <v-col
        class="text-center"
        cols="12"
      >
        Under the law of Hong Kong, intoxicating liquor must not be sold or supplied to a minor (under 18) in the course of business.根據香港法律,不得在業務過程中,向未成年人(18歲以下人士)售賣或供應令人醺醉的酒類。
      </v-col>
    </v-footer>
    <v-footer
      class="font-weight-light"
    >
      <v-col
        class="text-center"
        cols="12"
      >
        &copy; 2020 CBT WINES CO. LIMITED; Designed by&nbsp;<a href="https://github.com/laub1199" class="black--text">Sennett Lau</a>
      </v-col>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  methods: {
    changeLang(lang) {
      if (lang === 'traditionalChinese') {
        this.$router.push('/hk')
      }
      else if (lang === 'simplifiedChinese') {
        this.$router.push('/cn')
      }
      else {
        this.$router.push('/')
      }
    }
  },
  mounted() {
  }
}
</script>

<style scoped>
#title {
  text-decoration: none;
  color: #555;
}

a{
  text-decoration: none;
}

.logo {
  position: absolute;
  height: 55px;
  margin-left: auto;
  margin-right: auto;
  top: 4px;
}
</style>