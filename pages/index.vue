<template>
  <div class="home">
    <div class="background" style="background: url(https://res.cloudinary.com/dinad7iot/image/upload/v1612189163/cbtwines/home_BG_r8eerr.png) top left / cover;">
      <div class="content">
        <cld-image public-id="v1612189161/cbtwines/company_label_laipot.png" />
        <div class="quote">
          <p class="quote-text">“Where there is no wine, <br>there is no love”</p>
          <p class="quote-by">- Euripides</p>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  layout: "revamp",
  components: {},
  data() {
    return {};
  },
  head() {
    return {
      title: "CBT Wines Company Limited",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "CBT Wines Company Limited Hong Kong, we offer wines from countries worldwide, find us and buy your wines.",
        },
        {
          hid: "keywords",
          name: "keywords",
          content:
            "cbt, wines, cbtwines, wine, cbt wines, hong kong wines, wine",
        },
      ],
    };
  },
  mounted() {},
  computed: {},
  async fetch({ store }) {},
};
</script>

<style lang="scss">
.home {
  width: 100%;
  height: 100%;
  position: relative;
  @media (max-width: 375px) {
    max-height: calc(100vh - 140px);
  }
  .background{
    width: 100%;
    position: absolute;
    @media (max-width: 375px) {
      max-height: calc(100vh - 140px);
    }
    height: 100%;
    top: 0;
  }
  .content {
    margin: 140px 40px;
    @media (max-width: 490px) {
      margin: 0;
      padding: 5%;
    }
    img {
      width: 400px;
      @media (max-width: 490px) {
        width: 80%;
        margin: 5% 10% 0;
      }
    }
    .quote {
      justify-content: left;
      @media (min-width: 491px) {
        max-width: 350px;
      }
      &-text {
        margin-top: 15px;
        opacity: .7;
        padding-left: 40px;
        font: italic normal normal 31px/37px Athelas;
        text-align: right;
        color: #FFFFFF;
        display: flex;
        @media (max-width: 1090px) {
          opacity: 1;
          text-align: center;
        }
        @media (max-width: 490px) {
          font: italic normal normal 22px/37px Athelas;
          padding-left: 0;
          margin-left: auto;
          margin-right: auto;
          width: 371px;
          max-width: 100%;
          br {
            display: none;
          }
        }
        @media (max-width: 376px) {
          font: italic normal normal 20px/37px Athelas;
        }
        @media (max-width: 320px) {
          font: italic normal normal 17px/37px Athelas;
        }
      }
      &-by {
        opacity: 0.7;
        padding-right: 5px;
        font: italic normal normal 21px/36px Athelas;
        text-align: right;
        color: #FFFFFF;
        @media (max-width: 1090px) {
          opacity: 1;
          text-align: center;
          padding-right: 0px;
        }
      }
    }
  }
}
</style>
