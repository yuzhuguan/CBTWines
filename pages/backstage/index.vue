<template>
  <div class="container">
    <div class="tabs">
      <div class="tabs-list">
        <div class="tab" v-for="(tab, index) in tabs" :key="index" :class="activeTab === index ? 'active' : ''"
          @click="changeTabTo(index)"
        >
          {{ tab }}
        </div>
      </div>
    </div>
    <v-card flat olor="transparent" v-if="activeTab === 0">
      <v-data-table
        :headers="headers"
        :items="wines"
        :items-per-page="10"
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
        <template v-slot:item.discountPrice="{ item }">
          <p :class="item.colorDiscountPrice" style="margin: 0">{{item.discountPrice}}</p>
        </template>
        <template v-slot:top>
          <v-dialog v-model="dialog" max-width="500px">
            <template v-slot:activator="{ on }">
              <v-row>
                <v-col class="ml-4">
                  <v-text-field
                    v-model="search"
                    append-icon="search"
                    label="Search"
                    single-line
                    hide-details
                  ></v-text-field>
                </v-col>
                <v-btn dark v-on="on" class="mt-7 mr-7">New Wine</v-btn>
              </v-row>
            </template>
            <v-card>
              <v-card-title>
                <span class="headline">{{ formTitle }}</span>
              </v-card-title>

              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field v-model="editedItem.name" label="Product"></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field v-model="editedItem.origin" label="Region"></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field v-model="editedItem.appellation" label="Appellation"></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field v-model="editedItem.chineseName" label="Chinese Name"></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field v-model="editedItem.vintage" label="Vintage"></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field v-model="editedItem.rating" label="Rating"></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field v-model="editedItem.price" label="Price(HKD)"></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field v-model="editedItem.discountPrice" label="Discounted Price"></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-select
                        :items="choices"
                        v-model="editedItem.newArrival"
                        label="New Arrival"
                      ></v-select>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-select
                        :items="choices"
                        v-model="editedItem.specialOffer"
                        label="Special Offer"
                      ></v-select>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-select
                        :items="colors"
                        item-text="color"
                        item-value="class"
                        v-model="editedItem.colorName"
                        label="Color Name"
                      ></v-select>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-select
                        :items="colors"
                        item-text="color"
                        item-value="class"
                        v-model="editedItem.colorOrigin"
                        label="Color Region"
                      ></v-select>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-select
                        :items="colors"
                        item-text="color"
                        item-value="class"
                        v-model="editedItem.colorAppellation"
                        label="Color Appellation"
                      ></v-select>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-select
                        :items="colors"
                        item-text="color"
                        item-value="class"
                        v-model="editedItem.colorChineseName"
                        label="Color Chinese Name"
                      ></v-select>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-select
                        :items="colors"
                        item-text="color"
                        item-value="class"
                        v-model="editedItem.colorVintage"
                        label="Color Vintage"
                      ></v-select>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-select
                        :items="colors"
                        item-text="color"
                        item-value="class"
                        v-model="editedItem.colorRating"
                        label="Color Rating"
                      ></v-select>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-select
                        :items="colors"
                        item-text="color"
                        item-value="class"
                        v-model="editedItem.colorPrice"
                        label="Color Price"
                      ></v-select>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-select
                        :items="colors"
                        item-text="color"
                        item-value="class"
                        v-model="editedItem.colorDiscountPrice"
                        label="Color Discount Price"
                      ></v-select>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="resetColors">Reset Colors</v-btn>
                <v-btn color="blue darken-1" text @click="close">Cancel</v-btn>
                <v-btn color="blue darken-1" text @click="save">Save</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </template>
        <template v-slot:item.actions="{ item }">
          <v-icon small class="mr-2" @click="editItem(item)">mdi-pencil</v-icon>
          <v-icon small @click="deleteItem(item)">mdi-delete</v-icon>
        </template>
      </v-data-table>
    </v-card>

    <v-alert :type="alertType" :value="!msg==''" transition="scale-transition">{{ msg }}</v-alert>

    <v-card class="container" v-if="activeTab === 1">
      <v-title class="title mx-3">
        <v-icon color="blue lighten-3" class="mb-1 mr-3">account_box</v-icon>Create an Account
      </v-title>

      <v-form ref="form" v-model="valid">
        <v-text-field
          v-model="username"
          :counter="10"
          :rules="usernameRules"
          label="Username"
          required
          class="mx-3"
        ></v-text-field>

        <v-text-field
          v-model="password"
          :rules="passwordRules"
          label="Password"
          type="password"
          required
          class="mx-3"
        ></v-text-field>

        <div class="text-right">
          <v-btn color="error" @click="reset" class="btn">Reset</v-btn>
          <v-btn color="success" @click="createAccount" class="btn" :disabled="!valid">Sign Up</v-btn>
        </div>
      </v-form>
    </v-card>
  </div>
</template>

<script>
import { mapState } from "vuex";
import axios from "axios";

export default {
  components: {},
  data() {
    return {
      activeTab: 0,
      tabs: ['Wines', 'Account'],
      search: "",
      dialog: false,
      headers: [
        { text: "Product", value: "name" },
        { text: "Chinese Name", value: "chineseName" },
        { text: "Region", value: "origin" },
        { text: "Appellation", value: "appellation" },
        { text: "Vintage", value: "vintage" },
        { text: "Rating", value: "rating" },
        { text: "Price(HKD)", value: "price" },
        { text: "Discounted Price", value: "discountPrice" },
        { text: "New Arrival", value: "newArrival" },
        { text: "Special Offer", value: "specialOffer" },
        { text: "Actions", value: "actions", sortable: false }
      ],
      editedIndex: -1,
      editedItem: {
        _id: null,
        name: "",
        origin: "",
        appellation: "",
        chineseName: "",
        vintage: "",
        rating: "",
        price: 0,
        discountPrice: null,
        newArrival: "N",
        specialOffer: "N",
        colorName: "",
        colorOrigin: "",
        colorAppellation: "",
        colorChineseName: "",
        colorVintage: "",
        colorRating: "",
        colorPrice: "",
        colorDiscountPrice: ""
      },
      defaultItem: {
        _id: null,
        name: "",
        origin: "",
        appellation: "",
        chineseName: "",
        vintage: "",
        rating: "",
        price: 0,
        discountPrice: null,
        newArrival: "N",
        specialOffer: "N",
        colorName: "",
        colorOrigin: "",
        colorAppellation: "",
        colorChineseName: "",
        colorVintage: "",
        colorRating: "",
        colorPrice: "",
        colorDiscountPrice: ""
      },
      valid: true,
      username: "",
      usernameRules: [
        v => !!v || "Username is required",
        v => (v && v.length <= 10) || "Username must be less than 10 characters"
      ],
      password: "",
      passwordRules: [
        v => !!v || "Password is required",
        v => (v && v.length >= 6) || "Password must has at least 6 characters"
      ],
      msg: "",
      alertType: "",
      choices: ["Y", "N"],
      colors: [
        { color: "red", class: "red--text text--accent-4" },
        { color: "pink", class: "pink--text text--accent-3" },
        { color: "purple", class: "purple--text text--darken-" },
        { color: "blue", class: "light-blue--text text--darken-2" },
        { color: "green", class: "green--text text--darken-2" },
        { color: "yellow", class: "yellow--text text--darken-2" },
        { color: "orange", class: "orange--text text--darken-2" },
        { color: "brown", class: "brown--text text--darken-1" },
        { color: "default", class: "" }
      ]
    };
  },
  mounted() {
    if (!localStorage.getItem("token")) {
      this.$router.push("/");
    }
  },
  computed: {
    ...mapState(["wines"]),
    formTitle() {
      return this.editedIndex === -1 ? "New Item" : "Edit Item";
    }
  },
  async fetch({ store }) {
    await store.dispatch("loadWineList");
  },
  methods: {
    changeTabTo (index) {
      this.activeTab = index
    },
    close() {
      this.dialog = false;
      this.editedItem = Object.assign({}, this.defaultItem);
      this.editedIndex = -1;
    },
    editItem(item) {
      this.editedIndex = 1;
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },
    deleteItem(item) {
      axios
        .post(
          "/api/backstage/delete-wine",
          {
            targetWine: item
          },
          { headers: { token: localStorage.getItem("token") } }
        )
        .then(res => {
          console.log(res);
          if (res.status === 200) {
            //alert(res.data.message)
            this.$store.dispatch("loadWineList");
          }
        });
    },
    save() {
      if (this.editedIndex > -1) {
        //alert(this.editedItem.price)
        axios
          .post(
            "/api/backstage/update-wine",
            {
              newDetail: this.editedItem
            },
            { headers: { token: localStorage.getItem("token") } }
          )
          .then(res => {
            console.log(res);
            if (res.status === 200) {
              //alert(res.data.message)
              this.$store.dispatch("loadWineList");
            }
          });
      } else {
        axios
          .post(
            "/api/backstage/add-wine",
            {
              newDetail: this.editedItem
            },
            { headers: { token: localStorage.getItem("token") } }
          )
          .then(this.$store.dispatch("loadWineList"));
      }
      this.close();
    },
    createAccount() {
      axios
        .post(
          "/api/backstage/sign-up",
          {
            username: this.username,
            password: this.password
          },
          { headers: { token: localStorage.getItem("token") } }
        )
        .then(
          res => {
            console.log(res);
            //this.$router.push('/signin');
            this.msg = "success";
            this.alertType = "success";
          },
          err => {
            console.log(err.response);
            this.msg = err.response.data.msg;
            this.alertType = "error";
          }
        );
    },
    reset() {
      this.$refs.form.reset();
    },
    resetColors() {
      this.editedItem.colorName = ""
      this.editedItem.colorOrigin = ""
      this.editedItem.colorAppellation = ""
      this.editedItem.colorChineseName = ""
      this.editedItem.colorVintage = ""
      this.editedItem.colorRating = ""
      this.editedItem.colorPrice = ""
      this.editedItem.colorDiscountPrice = ""
    }
  }
};
</script>

<style scoped lang="scss">
.container {
  margin-top: 75px;
  width: 90%;
  max-width: 100%;
}
.tabs {
  width: 100%;
  height: 50px;
  background: rgba(256, 256, 256, 0.4);
  border-radius: 8px;
  margin-bottom: 30px;
  .tabs-list {
    display: flex;
    flex-direction: row;
    height: 100%;
    .tab {
      text-align: center;
      height: 100%;
      width: 100px;
      padding: 14px 0px;
      cursor: pointer;
    }
    .tab.active {
      color: #A44c4f;
    }
  }
}
</style>
