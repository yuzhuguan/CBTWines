<template>
  <div class="new-arrivals">
    <h1 class="page-title">{{ $t('new-arrivals.title') }}</h1>
    <v-row class="content">
      <v-col>
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
          <v-layout column>
            <v-flex style="overflow: auto">
              <v-data-table
                :headers="$t('new-arrivals.headers')"
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
              </v-data-table>
            </v-flex>
          </v-layout>
        </v-card>
      </v-col>
    </v-row>
    <div class="mobile-content">
      <ul>
        <li
          v-for="(wine, index) in wines"
          :key="index"
          :class="index%2===0 ? 'product-name even-row' + ' product-' + index : 'product-name odd-row' + ' product-' + index"
          @click="showProductDetail(wine , index)"
        >
          <span>{{ wine.name }}</span>
          <i class="arrow down"></i>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'revamp',
  data() {
    return {
      search: ""
    };
  },
  methods: {
    changeOrigin(target) {
      if (target != "All") this.search = target;
      else this.search = "";
    },
    showProductDetail(item, index) {
      const target = document.querySelector('.product-'+index)
      const detailChecker = document.querySelector('.product-detail-'+index)
      if (detailChecker) {
        if (detailChecker.classList.contains('hide')) {
          detailChecker.classList.remove('hide')
          target.querySelector('i').classList.add('up')
          target.querySelector('i').classList.remove('down')
        }
        else {
          detailChecker.classList.add('hide')
          target.querySelector('i').classList.remove('up')
          target.querySelector('i').classList.add('down')
        }
      }
      else {
        const productDetail = document.createElement('li')
        const productTable = document.createElement('table')
        const itemAttr = ['chineseName', 'origin', 'appellation', 'vintage', 'rating', 'price']
        let i = -1
        for (const hearder of this.$t('special-offers.headers')) {
          if (i > -1) {
            const td1 = document.createElement('td')
            const td2 = document.createElement('td')
            td1.innerText = hearder.text
            td2.innerText = item[itemAttr[i]]

            const tr = document.createElement('tr')
            tr.appendChild(td1)
            tr.appendChild(td2)
            productTable.appendChild(tr)
          }
          i++
        }
        productDetail.appendChild(productTable)
        productDetail.classList.add('product-detail')
        productDetail.classList.add('product-detail-'+index)
        target.after(productDetail)
        target.querySelector('i').classList.add('up')
        target.querySelector('i').classList.remove('down')
      }
    }
  },
  mounted() {},
  computed: {
    wines () {
      return this.$store.getters['newArrivals']
    }
  },
  async asyncData(context) {
    await context.store.dispatch("loadWineList");
  }
}
</script>

<style lang="scss">
.new-arrivals {
  display: flex;
  flex-direction: column;
  height: 87.2vh;
  background: url("/media/winelist.jpg");
  @media (max-width: 1050px) {
    height: auto;
    background: none;
  }
  h1 {
    padding-left: 44px;
    font-size: 30px;
    padding-top: 8px;
    color: #A44c4f;
    @media (max-width: 1050px) {
      padding-left: 0;
      text-align: center;
      margin: 20px 0;
    }
  }
  .row {
    margin: 0;
  }
  .content {
    max-width: 100%;
    @media (max-width: 1050px) {
      display: none;
    }
  }
  .v-input {
    margin: 0;
    padding: 0;
  }
  .col {
    height: 100%;
  }
  .v-card {
    height: 100%;
  }
  .layout.column {
    max-height: 100%;
    .text-start {
      height: 60px;
    }
    .v-data-table td {
      height: 60px;
      text-align: center;
    }
  }
  .regions {
    padding: 32px;
    height: 97.4%;
    background: rgba(256,256,256,0.7);
    border-radius: 8px;
    margin-top: 9px;
    margin-left: 26px;
    ul {
      list-style: none;
      li {
        margin: 10px 0;
        font-size: 19px;
      }
    }
    .title {
      margin-bottom: 25px;
      font-size: 30px;
      color: #A44c4f;
    }
    .region-tag {
      cursor: pointer;
    }
  }
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
  .mobile-content {
    display: none;
    overflow: hidden;
    height: 97%;
    margin-top: 3%;
    @media (max-width: 1050px) {
      display: block;
    }
    ul {
      width: 95%;
      margin: auto;
      list-style: none;
      overflow-y: auto;
      background: rgba(255, 255, 255, 0.8);
      height: 100%;
      margin: 0 auto 20px;
      .product-name {
        height: auto;
        padding: 12px;
        font-size: 25px;
        position: relative;
        cursor: pointer;
        @media (max-width: 400px) {
          height: auto;
          padding: 12px;
          font-size: 16px;
        }
        .arrow {
          border: solid black;
          border-width: 0 2px 2px 0;
          display: inline-block;
          padding: 3px;
          position: absolute;
          top: 22px;
          right: 25px;
          @media (max-width: 400px) {
            top: 14px;
          }
        }
        .up {
          transform: rotate(-135deg);
          -webkit-transform: rotate(-135deg);
        }
        .down {
          transform: rotate(45deg);
          -webkit-transform: rotate(45deg);
        }
        &.even-row {
          background: rgba(235, 150, 153, 0.4);
        }
      }
      .product-detail {
        background: rgba(217, 210, 210, 0.7);
        transition: .2s;
        height: 220px;
        overflow: hidden;
        @media (max-width: 400px) {
          height: 188px;
        }
        &.hide {
          height: 0px;
        }
        table {
          width: 100%;
          tr {
            td {
              font-size: 20px;
              padding: 5px 10px;
              @media (max-width: 400px) {
                font-size: 16px;
              }
            }
          }
        }
      }
    }
  }
}
</style>
