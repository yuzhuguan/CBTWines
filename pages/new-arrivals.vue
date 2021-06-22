<template>
  <div class="new-arrivals">
    <h1 class="page-title">
      {{ $t('new-arrivals.title') }}
    </h1>
    <v-app>
      <v-card>
        <v-card-title>
          <v-text-field
            v-model="search"
            append-icon="search"
            label="Search"
            single-line
            hide-details
          />
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
              <template #item.name="{ item }">
                <p :class="item.colorName" style="margin: 0">
                  {{ item.name }}
                </p>
              </template>
              <template #item.chineseName="{ item }">
                <p :class="item.colorChineseName" style="margin: 0">
                  {{ item.chineseName }}
                </p>
              </template>
              <template #item.origin="{ item }">
                <p :class="item.colorOrigin" style="margin: 0">
                  {{ item.origin }}
                </p>
              </template>
              <template #item.appellation="{ item }">
                <p :class="item.colorAppellation" style="margin: 0">
                  {{ item.appellation }}
                </p>
              </template>
              <template #item.vintage="{ item }">
                <p :class="item.colorVintage" style="margin: 0">
                  {{ item.vintage }}
                </p>
              </template>
              <template #item.rating="{ item }">
                <p :class="item.colorRating" style="margin: 0">
                  {{ item.rating }}
                </p>
              </template>
              <template #item.price="{ item }">
                <p :class="item.colorPrice" style="margin: 0">
                  {{ item.price }}
                </p>
              </template>
            </v-data-table>
          </v-flex>
        </v-layout>
      </v-card>
    </v-app>
    <div class="mobile-content">
      <ul>
        <li
          v-for="(wine, index) in wines"
          :key="index"
          :class="index%2===0 ? 'product-name even-row' + ' product-' + index : 'product-name odd-row' + ' product-' + index"
          @click="showProductDetail(wine , index)"
        >
          <span>{{ wine.name }}</span>
          <i class="arrow down" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NewArrivalsPage',
  layout: 'revamp',
  async asyncData (context) {
    await context.store.dispatch('loadWineList')
  },
  data () {
    return {
      search: ''
    }
  },
  computed: {
    wines () {
      return this.$store.getters.newArrivals
    }
  },
  mounted () {},
  methods: {
    changeOrigin (target) {
      if (target !== 'All') this.search = target
      else this.search = ''
    },
    showProductDetail (item, index) {
      const target = document.querySelector('.product-' + index)
      const detailChecker = document.querySelector('.product-detail-' + index)
      if (detailChecker) {
        if (detailChecker.classList.contains('hide')) {
          detailChecker.classList.remove('hide')
          target.querySelector('i').classList.add('up')
          target.querySelector('i').classList.remove('down')
        } else {
          detailChecker.classList.add('hide')
          target.querySelector('i').classList.remove('up')
          target.querySelector('i').classList.add('down')
        }
      } else {
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
        productDetail.classList.add('product-detail-' + index)
        target.after(productDetail)
        target.querySelector('i').classList.add('up')
        target.querySelector('i').classList.remove('down')
      }
    }
  }
}
</script>

<style lang="scss">
.new-arrivals {
  display: flex;
  flex-direction: column;
  height: 100%;
  padding-top: 70px;
  background: url("https://res.cloudinary.com/dinad7iot/image/upload/c_crop,e_blur:231,o_63,q_auto/v1612189163/cbtwines/winelist_yhrumg.jpg") no-repeat center;
  background-size: cover;
  @media (max-width: 1050px) {
    height: auto;
    background: none;
  }
  h1 {
    padding-left: 44px;
    padding-top: 8px;
    color: #A44c4f;
    margin: 3vh 0 0px;
    font-size: 4rem;
    text-align: center;
    @media (max-width: 1050px) {
      padding-left: 0;
      margin: 20px 0;
      font-size: 2rem;
    }
  }
  #app {
    max-width: 97%;
    width: 97%;
    margin: auto;
    border-radius: 8px;
    @media (max-width: 1050px) {
      display: none;
    }
    .v-application--wrap {
      min-height: 0;
      .v-data-table__wrapper {
        height: 528px;
        max-height: 528px;
        overflow-y: auto;
      }
    }

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
        padding: 12px 40px 12px 12px;
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
        overflow: hidden;
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
