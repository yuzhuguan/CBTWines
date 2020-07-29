<template>
  <v-container class="pt-11" fluid>
    <v-row class="mt-8" no-gutters>
      <v-col :cols="2" class="pr-2">
        <v-card color="transparent" flat>
          <v-row class="title mt-2 ml-3">{{ $t('wine-list.title') }}</v-row>
          <v-layout column style="height: 80vh" class="scrollable-container">
            <v-flex style="overflow-x: hidden" class="scrollable">
              <p
                v-for="(origin, i) in $t('wine-list.origins')"
                :key="i"
                class="subtitle-2 my-2 ml-3 region-tag"
                @click="changeOrigin(origin.name)"
              >{{ origin.displayname }}</p>
            </v-flex>
          </v-layout>
        </v-card>
      </v-col>
      <v-col :cols="10">
        <v-card flat>
          <v-card-title>
            <v-text-field
              v-model="search"
              append-icon="search"
              label="Search"
              single-line
              hide-details
            ></v-text-field>
          </v-card-title>
          <v-layout column style="height: 75vh">
            <v-flex style="overflow: auto">
              <v-data-table
                :headers="$t('wine-list.headers')"
                :items="wines.data"
                :items-per-page="8"
                :search="search"
                :sort-by="['name', 'vintage']"
              >
                <template v-slot:item.name="{ item }">
                  <p :class="item.colorName" style="margin: 0">{{item.name}}</p>
                </template>
                <template v-slot:item.chineseName="{ item }">
                  <p :class="item.colorChineseName" style="margin: 0">{{item.chineseName}}</p>
                </template>
                <template v-slot:item.origin="{ item }">
                  <p :class="item.colorOrigin" style="margin: 0">{{item.origin}}</p>
                </template>
                <template v-slot:item.appellation="{ item }">
                  <p :class="item.colorAppellation" style="margin: 0">{{item.appellation}}</p>
                </template>
                <template v-slot:item.vintage="{ item }">
                  <p :class="item.colorVintage" style="margin: 0">{{item.vintage}}</p>
                </template>
                <template v-slot:item.rating="{ item }">
                  <p :class="item.colorRating" style="margin: 0">{{item.rating}}</p>
                </template>
                <template v-slot:item.price="{ item }">
                  <p :class="item.colorPrice" style="margin: 0">{{item.price}}</p>
                </template>
              </v-data-table>
            </v-flex>
          </v-layout>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState } from "vuex";

export default {
  layout: "winelist",
  components: {},
  data() {
    return {
      search: ""
    };
  },
  methods: {
    changeOrigin(target) {
      if (target != "All") this.search = target;
      else this.search = "";
    }
  },
  mounted() {},
  computed: {
    ...mapState(["wines"])
  },
  async fetch({ store }) {
    await store.dispatch("loadWineList");
  }
};
</script>

<style>
a {
  text-decoration: none;
}
.scrollable::-webkit-scrollbar {
  height: 10px;
  width: 10px;
  background-color: transparent;
}
.scrollable::-webkit-scrollbar-thumb {
  background-color: rgb(146, 145, 145);
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  -ms-border-radius: 5px;
  -o-border-radius: 5px;
  border-radius: 5px;
}
.scrollable::-webkit-scrollbar-track {
  background-color: transparent;
}

.region-tag {
  cursor: pointer;
}
</style>