<template>
  <div class="find-us">
    <div class="find-us-container">
      <div class="find-us-hero">
        <div class="image-container" :style="{ backgroundImage: 'url(https://res.cloudinary.com/dinad7iot/image/upload/v1612189163/cbtwines/find-us_cxsilt.png)'}">
          <h1>{{ $t('find-us.title') }}</h1>
        </div>
        <div class="content">
          <div class="logo-container">
            <img :src="$cloudinary.image.url('v1612189161/cbtwines/logo_jzvi2t.png', { fetch_format: 'auto', quality: 'auto', width: 225 })" alt="Images">
          </div>
          <div class="content-detail">
            <v-col :cols="undefined" class="pt-11">
              <v-row class="mx-0 my-2">
                <v-col :cols="2">
                  <v-row><v-icon>place</v-icon></v-row>
                </v-col>
                <v-col :cols="undefined" class="text-left font-weight-regular title">
                  <v-row>{{ $t('find-us.address_1') }}</v-row>
                  <v-row>{{ $t('find-us.address_2') }}</v-row>
                  <v-row>{{ $t('find-us.address_3') }}</v-row>
                  <v-row>{{ $t('find-us.address_4') }}</v-row>
                </v-col>
              </v-row>
              <v-row class="mx-0 my-2">
                <v-col :cols="2">
                  <v-row><v-icon>call</v-icon></v-row>
                </v-col>
                <v-col :cols="undefined" class="text-left font-weight-regular title">
                  <v-row>+852 3996 9178 </v-row>
                </v-col>
              </v-row>
              <v-row class="mx-0 my-1">
                <v-col :cols="2">
                  <v-row><v-icon>print</v-icon></v-row>
                </v-col>
                <v-col :cols="undefined" class="text-left font-weight-regular title">
                  <v-row>+852 3996 9179 </v-row>
                </v-col>
              </v-row>
              <v-row class="mx-0 my-1">
                <v-col :cols="2">
                  <v-row><v-icon>email</v-icon></v-row>
                </v-col>
                <v-col :cols="undefined" class="text-left font-weight-regular title">
                  <v-row>cbtwines@gmail.com</v-row>
                </v-col>
              </v-row>
              <v-row class="mx-0 my-1">
                <v-col :cols="2">
                  <v-row>E - Fax</v-row>
                </v-col>
                <v-col :cols="undefined" class="text-left font-weight-regular title">
                  <v-row>8148 1617</v-row>
                </v-col>
              </v-row>
              <a href="https://www.facebook.com/CBT-Wines-Company-Limited-103999481285026" target="_blank" class="fb-link">
                <v-row class="mx-0 my-1">
                  <v-col :cols="2">
                    <v-row><v-icon>facebook</v-icon></v-row>
                  </v-col>
                  <v-col :cols="undefined" class="text-left font-weight-regular title">
                    <v-row><span>CBT Wines Company Limited </span></v-row>
                  </v-col>
                </v-row>
              </a>
            </v-col>
          </div>
        </div>
        <div class="right-banner" />
        <div class="scroll-down">
          <p>{{ $t('find-us.scroll-down') }}</p>
        </div>
      </div>
      <div class="map-container">
        <div class="left-banner" />
        <div class="map-holder">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d922.6139242470448!2d114.148351!3d22.336416000000003!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34040754eca8813f%3A0x4f9fe56467eaabd4!2z5piM6ZqG5bel5qWt5aSn5buI!5e0!3m2!1szh-TW!2shk!4v1585061879759!5m2!1szh-TW!2shk"
            width="100%"
            height="450"
            frameborder="0"
            style="border:0;"
            allowfullscreen=""
            aria-hidden="false"
            tabindex="0"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { metaTag } from '~/mixin/meta_head'
export default {
  name: 'FindUsPage',
  mixins: [
    metaTag
  ],
  layout: 'revamp',
  data () {
    return {
      identifier: 'find-us'
    }
  }
}
</script>

<style lang="scss">
.find-us {
  padding-top: 70px;
  .find-us-container {
    height: 100%;
    .find-us-hero {
      margin: 50px 38px;
      height: 84%;
      flex-direction: column;
      flex-direction: row;
      display: flex;
      position: relative;
      @media (max-width: 768px) {
        height: 512px;
      }
      .image-container {
        flex-basis: 49.5%;
        background-position: center;
        background-size: cover;
        position: relative;
        @media (max-width: 768px) {
          display: none;
        }
        h1 {
          position: absolute;
          bottom: 20px;
          left: 20px;
          font-size: 4rem;
          font-weight: 400;
          color: white;
          letter-spacing: 8px;
        }
      }
      .content {
        flex-basis: 40.5%;
        padding-left: 7%;
        @media (max-width: 768px) {
          flex-basis: 100%;
        }
        .logo-container {
          height: 100px;
          width: 100%;
          img {
           height: 100%;
          }
        }
        .content-detail {
          margin: 37px 0 0;
          .fb-link {
            text-decoration: none;
            span {
              color: #000000;
              text-decoration: none;
              padding-top: 2px;
            }
          }
        }
      }
      .right-banner {
        flex-basis: 10%;
        background: #e6cfcf;
        @media (max-width: 768px) {
          display: none;
        }
      }
      .scroll-down {
        position: absolute;
        bottom: -35.5px;
        left: 50%;
        transform: translate(-50%, 0);
        p {
          color: #dadada;
          font-size: 1.4rem;
          @media (max-width: 768px) {
            font-size: 1rem
          }
        }
      }
    }
    .map-container {
      height: 600px;
      position: relative;
      padding: 0 38px;
      .left-banner {
        background: #e6cfcf;
        height: 100%;
        width: 180px;
      }
      .map-holder {
        position: absolute;
        top: 38px;
        left: 0;
        height: 88%;
        width: 100%;
        padding-left: 128px;
        padding-right: 38px;
        @media (max-width: 768px) {
          padding-left: 5px;
          padding-right: 5px;
        }
        iframe {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
}
</style>
