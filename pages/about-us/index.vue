<template>
  <v-container class="pt-12" fluid>
    <v-card class="transparent mt-11" flat id="goAboutUs">
      <v-row>
        <v-col :cols="12" lg="6" xl='6'>
          <v-card class="mt-11 transparent" flat>
            <v-card-title class="ml-2 pt-5 display-1 white--text">
              About Us
            </v-card-title>
            <v-card-text class="blockquote white--text text-justify title font-weight-light">
              Like a fingerprint, 
              every bottle of wine is unique. 
              In our belief, 
              every customer pursues a unique flavor in wines. 
              Assisting customers in choosing the most suitable wines 
              according to customers' distinctive characters is our mission. 
              With wines from various countries and places, 
              customers can select their wine from a wide range of choices with quality guaranteed. 
              Through Touch &amp; 
              Taste, every customer will gain satisfaction with their favorite bottle 
              of wine after visiting <a href="http://www.cbtwines.co/contact-us" class="font-weight-bold lime--text">CBT WINES COMPANY LIMITED</a>.
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