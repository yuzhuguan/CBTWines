<template>
  <div class="contact-us">
    <div class="title">
      <h1 :style="{backgroundImage: 'url(https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.theiwsr.com%2Fnews-and-comment-global-still-wine-trends-to-watch%2F&psig=AOvVaw3uxIXEnBKFy5MIrGwmupoP&ust=1600625694958000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCOjl5MHp9esCFQAAAAAdAAAAABAE) 50% 50%'}">
        {{ $t('contact-us.title') }}
      </h1>
    </div>
    <v-card class="form-card" color="rgba(255, 255, 255, 0.4)" flat>
      <v-form>
        <v-text-field
          v-model="title"
          :label="$t('contact-us.msg-title')"
          required
          background-color="rgba(255, 255, 255, 0.0)"
        />
        <p class="email-body-title">
          {{ $t('contact-us.msg-body') }}
        </p>
        <v-textarea
          v-model="body"
          solo
          :label="$t('contact-us.msg-body-placeholder')"
          outlined
          name="input-7-4"
          :value="body"
          class="email-body"
          :rows="isMinRow ? 6 : 11"
          background-color="rgba(255, 255, 255, 0.0)"
        />
        <v-row>
          <v-btn class="submit-button" elevation="1" color="#ffffff">
            <a :href="'mailto:cbtwines@gmail.com?subject=' + title + '&body=' + body">{{ $t('contact-us.submit') }}</a>
          </v-btn>
        </v-row>
      </v-form>
    </v-card>
    <canvas class="background" />
  </div>
</template>

<script>
import Particles from 'particlesjs'
import { metaTag } from '~/mixin/meta_head'
export default {
  name: 'ContactUsPage',
  mixins: [
    metaTag
  ],
  layout: 'revamp',
  data () {
    return {
      title: '',
      body: '',
      isMinRow: false,
      identifier: 'contact-us'
    }
  },
  mounted () {
    Particles.init({
      selector: '.background',
      maxParticles: 80,
      sizeVariations: 3,
      color: '#dadada',
      connectParticles: true,
      responsive: [
        {
          breakpoint: 768,
          options: {
            maxParticles: 40
          }
        },
        {
          breakpoint: 325,
          options: {
            maxParticles: 20
          }
        }
      ]
    })
    window.addEventListener('resize', this.onResize)
    this.isMinRow = window.innerWidth <= 375
  },
  destroyed () {
    window.removeEventListener('resize', this.onResize)
  },
  methods: {
    onResize () {
      this.isMinRow = window.innerWidth <= 375
    }
  }
}
</script>

<style lang="scss">
  .contact-us {
    overflow: hidden;
    height: 100%;
    position: relative;
    font-family: "Monstserrat", snas-serif;
    .title {
      position: relative;
      margin-top: 20vh;
      @media (max-width: 768px) {
        margin-top: 25%;
      }
    }
    .background {
      position: absolute;
      display: block;
      top: 0;
      left: 0;
      z-index: 0;
      @media (max-width: 375px) {
        height: 95%!important;
      }
    }
    h1 {
      color: #000000;
      text-align: center;
      font-size: 56px;
      text-transform: uppercase;
      font-weight: 700;
      letter-spacing: 20px;
      margin: 0;
      background-size: cover;
      -webkit-text-fill-color: transparent;
      -webkit-background-clip: text !important;
      z-index: 10;
      background: url('/media/contact-us.jpg') 100% 50%;
      @media (max-width: 650px) {
        font-size: 36px;
      }
      @media (max-width: 470px) {
        letter-spacing: 10px;
        top: 11%;
      }
      @media (max-width: 370px) {
        font-size: 30px;

      }
    }
    .form-card {
      z-index: 10;
      width: 700px;
      margin: 10vh auto;
      padding: 0 10px;
      @media (max-width: 768px) {
        margin: 10% auto;
      }
      .email-body-title {
        margin-bottom: 15px;
        margin-top: 12px;
        color: rgba(0, 0, 0, 0.6);
      }
      .row {
        margin-top: -8px;
        margin-bottom: 3px;
        @media (max-width: 370px) {
          height: 8px;
        }
      }
      .submit-button {
        margin-left: auto;
        margin-right: auto;
        a{
          text-decoration: none;
          color: rgba(0, 0, 0, 0.6);
        }
      }
    }
  }
</style>
