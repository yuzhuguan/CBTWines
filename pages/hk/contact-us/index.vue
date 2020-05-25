<template>
  <v-container class="pt-11" fluid>
    <v-card class="transparent mt-11" flat> 
      <v-row>
        <v-col class="ml-5" :cols="7">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d922.6139242470448!2d114.148351!3d22.336416000000003!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34040754eca8813f%3A0x4f9fe56467eaabd4!2z5piM6ZqG5bel5qWt5aSn5buI!5e0!3m2!1szh-TW!2shk!4v1585061879759!5m2!1szh-TW!2shk" 
            width="100%" 
            height="450" 
            frameborder="0" 
            style="border:0;" 
            allowfullscreen="" 
            aria-hidden="false" 
            tabindex="0"
          ></iframe>
        </v-col>
        <v-col :cols="undefined" class="pt-11">
          <v-row class="mx-0 my-2">
            <v-col :cols="2" >
              <v-row><v-icon>place</v-icon></v-row>
            </v-col>
            <v-col :cols="undefined" class="text-left font-weight-regular title">
              <v-row>香港 九龍</v-row>
              <v-row>長沙灣 長義街10號</v-row>
              <v-row>昌隆工業大廈</v-row>
              <v-row>6樓 B3室</v-row>
            </v-col>
          </v-row>
          <v-row class="mx-0 my-2">
            <v-col :cols="2" >
              <v-row><v-icon>call</v-icon></v-row>
            </v-col>
            <v-col :cols="undefined" class="text-left font-weight-regular title">
              <v-row>+852 3996 9178 </v-row>
            </v-col>
          </v-row>
          <v-row class="mx-0 my-1">
            <v-col :cols="2" >
              <v-row><v-icon>print</v-icon></v-row>
            </v-col>
            <v-col :cols="undefined" class="text-left font-weight-regular title">
              <v-row>+852 3996 9179 </v-row>
            </v-col>
          </v-row>
          <v-row class="mx-0 my-1">
            <v-col :cols="2" >
              <v-row><v-icon>email</v-icon></v-row>
            </v-col>
            <v-col :cols="undefined" class="text-left font-weight-regular title">
              <v-row>cbtwines@gmail.com</v-row>
            </v-col>
          </v-row>
          <v-row class="mx-0 my-1">
            <v-col :cols="2" >
              <v-row>E - Fax</v-row>
            </v-col>
            <v-col :cols="undefined" class="text-left font-weight-regular title">
              <v-row>8148 1617</v-row>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-card>

    
  </v-container>
</template>

<script>

export default {
  layout: 'contact-us',
  components: {
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