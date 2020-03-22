<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title><nuxt-link to="/" id="title">CBT Wines</nuxt-link></v-toolbar-title>
      
      <v-spacer></v-spacer>
      
      <nuxt-link to="/addRecipe"><v-btn text>Add New</v-btn></nuxt-link>    
          
    </v-app-bar>

    <v-content app>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>


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
    }
  },
  methods: {
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