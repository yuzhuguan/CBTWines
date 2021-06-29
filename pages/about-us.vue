<template>
  <div class="about-us">
    <div class="main-container">
      <div class="right-block">
        <img src="https://res.cloudinary.com/dinad7iot/image/upload/f_auto,q_auto/v1612189163/cbtwines/about-us_nxfwvy.png" alt="Images">
      </div>
      <div class="left-block">
        <div class="top-block" />
        <div class="block" data-aos="zoom-in" data-aos-duration="1000" data-aos-once="true" data-aos-anchor=".right-block">
          <div class="title-block">
            <h1 data-aos="zoom-out" data-aos-delay="1050" data-aos-duration="1000" data-aos-once="true" data-aos-anchor=".right-block">
              {{ $t('about-us.title') }}
            </h1>
          </div>
          <div class="content" data-aos="fade-up" data-aos-delay="1250" data-aos-duration="1000" data-aos-once="true" data-aos-anchor=".right-block">
            <p v-html="$t('about-us.paragraph1')" />
            <p>
              {{ $t('about-us.paragraph2') }}<nuxt-link to="/">
                {{ $t('about-us.link') }}
              </nuxt-link>
            </p>
          </div>
        </div>
        <div class="bottom-block" />
      </div>
    </div>
  </div>
</template>

<script>
import { metaTag } from '~/mixin/meta_head'

export default {
  name: 'AboutUsPage',
  mixins: [
    metaTag
  ],
  layout: 'revamp',
  data () {
    return {
      identifier: 'about-us'
    }
  }
}
</script>

<style lang="scss">
.about-us {
  width: 100%;
  overflow: hidden;
  height: 100%;
  background: #fafafa;
  .main-container {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: row-reverse;
    @media (max-width: 1000px) {
      flex-direction: column;
    }
    .left-block {
      height: 100%;
      flex-basis: 50%;
      background: #fafafa;
      display: flex;
      flex-direction: column;
      @media (max-width: 320px) {
        margin-top: 70px;
      }
      .top-block {
        width: 100%;
        height: 25%;
        background: #fafafa;
        @media (max-width: 1000px) {
          height: 35px;
        }
      }
      .block {
        width: 100%;
        height: auto;
        background: #f4f0ef;
        padding: 0 1px 30px;
        @media (max-width: 1000px) {
          margin: 0 auto 30px;
          width: 80%;
        }
        @media (max-width: 375px) {
          width: 100%;
        }
        .title-block {
          text-align: center;
          h1 {
            font-size: 70px;
            font-weight: 300;
            margin-top: -43px;
            text-shadow: -3px 0px 8px #bbbbbb;
            @media (max-width: 1000px) {
              font-size: 40px;
              margin-top: -25px;
            }
          }
        }
        .content {
          width: 385px;
          margin-left: auto;
          margin-right: auto;
          padding-top: 1%;
          text-align: center;
          @media (max-width: 1000px) {
            width: 75%;
          }
          p{
            font-family: 'Raleway', sans-serif;
            font-size: 17px;
            line-height: 1.8rem;
            &:first-child {
              margin-bottom: 10px;
            }
            @media (max-width: 1000px) {
              line-height: 2.35rem;
            }
            @media (max-width: 900px) {
              font-size: 15px;
            }
            @media (max-width: 715px) {
              font-size: 12px;
              line-height: 1.8rem;
            }
            @media (max-width: 375px) {
              font-size: 10px;
            }
            @media (max-width: 360px) {
              line-height: 1.4rem;
            }
          }
          a {
            color: #A44C4F;
            line-height: 1.8rem;
            text-decoration: none;
            font-size: 17px;
            @media (max-width: 1000px) {
              line-height: 2.35rem;
            }
            @media (max-width: 550px) {
              font-size: 12px;
              line-height: 1.8rem;
            }
            @media (max-width: 375px) {
              font-size: 10px;
            }
            @media (max-width: 360px) {
              line-height: 1.4rem;
            }
          }
        }
      }
      .bottom-block {
        display: none;
      }
    }
    .right-block{
      height: 100%;
      flex-basis: 50%;
      @media (max-width: 1000px) {
        height: 44%;
        flex-basis: unset;
      }
      @media (max-width: 425px) {
        height: 30vh;
      }
      @media (max-width: 320px) {
        display: none;
      }
      .cld-image {
        height: 100%;
      }
      img {
        object-position: 62% 0;
        object-fit: cover;
        height: 100%;
        width: 100%;
        @media (max-width: 1000px) {
          object-position: 0% 22%;
        }
        @media (max-width: 320px) {
          height: 100%;
        }
      }
    }
  }
}
</style>
