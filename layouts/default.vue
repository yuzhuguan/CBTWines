<template>
  <v-app>
    <v-app-bar app :elevation="0">

      <nuxt-link to="/"><v-icon>supervisor_account</v-icon> Login</nuxt-link>
      <v-spacer></v-spacer>

      <v-toolbar-title><nuxt-link to="/" id="title">CBT Wines</nuxt-link></v-toolbar-title>
      
      <v-spacer></v-spacer>
      
      <v-btn text @click="changeLang">繁</v-btn> | 
      <v-btn text @click="changeLang">简</v-btn> | 
      <v-btn text @click="changeLang">ENG</v-btn>
      

    </v-app-bar>

    <v-content app>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>

     <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
      right
      app
    >
      <v-list-item>
        <v-list-item-content>
            <v-list-item-title> <v-btn text @click="changeLang">繁</v-btn> | 
            <v-btn text @click="changeLang">简</v-btn> | 
            <v-btn text @click="changeLang">ENG</v-btn></v-list-item-title>
          </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>

        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-footer
      class="font-weight-medium"
    >
      <v-col
        class="text-center"
        cols="12"
      >
        &copy; CBT Wines 2020; Designed by&nbsp;<a href="https://github.com/laub1199">Sennett Lau</a>
      </v-col>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      drawer: null,
        items: [
          { title: 'Home', icon: 'dashboard' },
          { title: 'About', icon: 'question_answer' },
        ]
    }
  },
  methods: {
    changeLang() {
      console.log("wa")
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
</style>