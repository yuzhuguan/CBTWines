<template>
  <v-container class="pt-12" fluid>
    <v-card class="transparent mt-11" flat id="goAboutUs">
      <v-row>
        <v-col :cols="12" lg="6" xl='6'>
          <v-card class="mt-11 transparent" flat>
            <v-card-title class="ml-2 pt-5 display-1 white--text">
              {{ $t('about-us.title') }}
            </v-card-title>
            <v-card-text class="blockquote white--text text-justify title font-weight-light" v-html="$t('about-us.paragraph')">
              
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
a {
  text-decoration: none;
}

.links {
  color: #a65053;
}
</style>