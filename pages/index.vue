<template>
    <v-container class="pa-0" fluid >
        <v-img src="/img/new/home.jpg" alt="garden" width="100%" class="text-center" contain>
            <v-row class="mb-3 ml-12" v-for="(nav, index) in navs" :key="index">
                <v-col :cols="1" ></v-col>
                <v-col :cols="3" >
                    <v-hover v-slot:default="{ hover }">
                        <v-card width="80%">
                            <v-img :src="nav.img" height="70">
                                <v-expand-transition>\
                                    <v-card
                                        v-if="hover"
                                        class="d-flex transition-fast-in-fast-out grey lighten-5 font-weight-light display-1 dark--text text-center v-card--reveal"
                                        :style="{'opacity': 0.8}"
                                        style="height: 100%;"
                                        :to="nav.link"  
                                    >
                                        {{ nav.text }}
                                    </v-card>
                                </v-expand-transition>
                            </v-img>
                        </v-card>
                    </v-hover>
                </v-col>
            </v-row>
        </v-img>
    </v-container>
</template>

<script>
import { mapState } from 'vuex'

export default {
    layout: 'fullgrid',
    components: {
    },
    data() {
    return {
        navs: [
            { text: 'About Us', link: '/about-us', img: '/img/new/banner.png'},
            { text: 'Wine List', link: '/winelist', img: '/img/new/2nd.jpg' },
            { text: 'New Arrivals', link: '/new-arrivals', img: '/img/new/new-arrival.jpg' },
            { text: 'Special Offers', link: '/special-offers', img: '/img/new/special-offers.jpg' },
            { text: 'Contact Us', link: '/contact-us', img: '/img/new/3rd.jpg' }
        ]
        }
    },
    head() {
        return {
            title: 'CBT Wines Company Limited',
            meta: [
                {
                    hid: 'description', 
                    name: 'description', 
                    content: 'CBT Wines Company Limited Hong Kong, we offer wines from countries worldwide, find us and buy your wines.'
                },
                {hid: 'keywords', name: 'keywords', content: 'cbt, wines, cbtwines, wine, cbt wines, hong kong wines, wine'},
            ]
        }
    },
    mounted() {
    },
    computed: {
    },
    async fetch({store}) {
    }
}
</script>

<style>
a{
  text-decoration: none;
}
.card {
    height: 30px;
}

.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: .5;
  position: absolute;
  width: 100%;
}
</style>