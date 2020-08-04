<template>
  <div class="about-us">
    <div class="main-container">
      <div class="left-block">
        <div class="top-block"/>
        <div class="block">
          <div class="title-block">
            <h1>{{ $t('about-us.title') }}</h1>
          </div>
          <div class="content">
            <p v-html="$t('about-us.paragraph1')"/>
            <p>{{$t('about-us.paragraph2')}}<nuxt-link to="/">
              {{ $t('about-us.link') }}
            </nuxt-link></p>
            
          </div>
        </div>
      </div>
      <div class="right-block">
        <img src="/media/about-us.png" alt="image">
      </div>
    </div>
  </div>
  <!-- <v-container class="pt-12" fluid>
    <v-card class="transparent mt-11" flat id="goAboutUs">
      <v-row>
        <v-col :cols="12" lg="6" xl='6'>
          <v-card class="mt-11 transparent" flat>
            <v-card-title class="ml-2 pt-5 display-1 white--text">
              {{ $t('about-us.title') }}
            </v-card-title>
            <v-card-text 
            :class="($i18n.locale ==='en') 
              ? 'blockquote white--text text-justify title font-weight-light' 
              : 'blockquote white--text text-justify subtitle-1 font-weight-light'" 
            v-html="$t('about-us.paragraph')"/>
          </v-card>
        </v-col>
        <v-col :cols="12" lg="5" xl='5' class="d-none d-sm-none d-md-none d-lg-flex">
          <v-card flat class="ma-11">
            <v-img src="/img/photo1.jpeg" alt="banner" />
          </v-card>
        </v-col>
      </v-row>
    </v-card>
  </v-container> -->
</template>

<script>

export default {
  layout: 'revamp',
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

<style lang="scss">
.about-us {
  width: 100%;
  height: 90vh;
  .main-container {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: row;
    .left-block {
      height: 100%;
      flex-basis: 50%;
      background: #fafafa;
      .top-block {
        width: 100%;
        height: 120px;
        background: #fafafa;
      }
      .block {
        width: 100%;
        height: 400px;
        background: #f4f0ef;
            padding-top: 1px;
        .title-block {
          text-align: center;
          h1 {
            font-size: 70px;
            font-weight: 300;
            margin-top: -43px;
            text-shadow: -5px 5px 6px #aaaaaa;
          }
        }
        .content {
          width: 385px;
          margin-left: auto;
          margin-right: auto;
          padding-top: 1%;
          text-align: center;
          p{
            font-size: 19px;
            line-height: 1.8rem;
            &:first-child {
              margin-bottom: 10px;
            }
            
          }
          a {
            color: #A44C4F;
            line-height: 1.8rem;
            text-decoration: none;
          }
        }
      }
    }
    .right-block{
      height: 100%;
      flex-basis: 50%;
      img {
        object-position: 0% 0;
        object-fit: cover;
        height: 100%;
        width: 100%;
      }
    }
  }
}
</style>