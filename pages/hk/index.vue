<template>
    <v-container class="pa-0" fluid >
        <v-img src="/img/new/home.jpg" alt="garden" width="100%" class="text-center" contain>
        
        <v-row class="my-11 ml-5">
            <v-col :cols="1" ></v-col>
            <v-col :cols="3" >
                <v-hover v-slot:default="{ hover }">
                    <v-card>
                        <v-img src="/img/new/banner.png" height="100">
                            <v-expand-transition>\
                                <v-card
                                    v-if="hover"
                                    class="d-flex transition-fast-in-fast-out grey lighten-5 font-weight-light display-1 dark--text text-center v-card--reveal"
                                    :style="{'opacity': 0.8}"
                                    style="height: 100%;"
                                    to="/about-us"  
                                >
                                    關於我們
                                </v-card>
                            </v-expand-transition>
                        </v-img>
                    </v-card>
                </v-hover>
            </v-col>
        </v-row>
        
        <v-row class="my-11 ml-5">
            <v-col :cols="1" ></v-col>
            <v-col :cols="3" >
                <v-hover v-slot:default="{ hover }">
                    <v-card>
                        <v-img src="/img/new/2nd.jpg" height="100">
                            <v-expand-transition>\
                                <v-card
                                    v-if="hover"
                                    class="d-flex transition-fast-in-fast-out grey lighten-5 font-weight-light display-1 dark--text text-center v-card--reveal"
                                    :style="{'opacity': 0.8}"
                                    style="height: 100%;"    
                                    to="/winelist"
                                >
                                    酒單
                                </v-card>
                            </v-expand-transition>
                        </v-img>
                    </v-card>
                </v-hover>
            </v-col>
        </v-row>
        <v-row class="my-11 ml-5">
            <v-col :cols="1" ></v-col>
            <v-col :cols="3" >
                <v-hover v-slot:default="{ hover }">
                    <v-card>
                        <v-img src="/img/new/3rd.jpg" height="100">
                            <v-expand-transition>\
                                <v-card
                                    v-if="hover"
                                    class="d-flex transition-fast-in-fast-out grey lighten-5 font-weight-light display-1 dark--text text-center v-card--reveal"
                                    :style="{'opacity': 0.8}"
                                    style="height: 100%;"  
                                    to="/contact-us" 
                                >
                                    聯繫我們
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