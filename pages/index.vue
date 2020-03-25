<template>
  <v-container class="pa-" fluid>
    <v-card class="transparent ma-0" flat>
      <v-row>
        <v-col :cols="6">
          <v-card flat class="ma-11">
            <v-img src="/img/photo1.jpeg" alt="banner" />
          </v-card>
        </v-col>
        <v-col>
          <v-card class="mt-11 transparent" flat>
            <v-card-title class="mx-4">
              About Us
            </v-card-title>
            <v-card-text class="blockquote grey--text text--darken-1 text-justify">
              "Like a fingerprint, every bottle of wine is unique in itself. Also, we truly believe that every customer has their own personal and distinctive request for the taste of wine. Therefore, our objective is to assist our customers in selecting the most suitable wines that match their characters. Through Touch &amp; Taste we wish everyone who visited CBT WINES COMPANY LIMITED will leave with satisfaction and their favorite bottle of wine."
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-card>
    <v-card class="text-center transparent" flat>
      <v-system-bar class="grey lighten-3">
      <input type="text" v-model="search" placeholder="search wines"/>
    </v-system-bar>
    </v-card>
    <v-row
      class="mt-5"
      no-gutters
    >
      <v-col :cols="undefined">
        <v-card flat outlined color="transparent">
          wa
        </v-card>
      </v-col>
      <v-col :cols="8">
        <v-card flat olor="transparent">
          <v-data-table
          :headers="headers"
          :items="wines"
          :items-per-page="10"
          light
          ></v-data-table>
        </v-card>
      </v-col>
      <v-col :cols="undefined" >
        <v-card flat color="transparent">
          <v-row class="mx-2">
            <iframe 
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d922.6139242470448!2d114.148351!3d22.336416000000003!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34040754eca8813f%3A0x4f9fe56467eaabd4!2z5piM6ZqG5bel5qWt5aSn5buI!5e0!3m2!1szh-TW!2shk!4v1585061879759!5m2!1szh-TW!2shk" 
            width="100%" 
            height="100" 
            frameborder="0" 
            style="border:0;" 
            allowfullscreen="" 
            aria-hidden="false" 
            tabindex="0"
          ></iframe>
          </v-row>
          <v-row class="mx-0 my-n1">
            <v-col :cols="2" >
              <v-row><v-icon>place</v-icon></v-row>
            </v-col>
            <v-col :cols="undefined" class="text-left font-weight-regular .caption">
              <v-row>Unit B3, </v-row>
              <v-row>6F Cheung Lung Industrial Building, </v-row>
              <v-row>10 Cheung Yee Street, </v-row>
              <v-row>Kowloon</v-row>
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
            E - Fax: 8148 1617
          </v-row>
          <v-divider class="mt-2"></v-divider>
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
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
Unit B3, 6F Cheung Lung Industrial Building, 10 Cheung Yee Street, Kowloon
<script>

export default {
  components: {
  },
  data() {
    return {
      headers: [
          {
            text: 'Appellation',
            align: 'start',
            sortable: false,
            value: 'appellation',
          },
          { text: 'Origin', value: 'origin', sortable: false },
          { text: 'Vintage', value: 'vintage'},
          { text: 'Stock', value: 'stock'},
          { text: 'Price', value: 'price'}
      ]
    }
  },
  mounted() {
  },
  computed: {
  }
}
</script>

<style scoped>
</style>