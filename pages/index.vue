<template>
  <div class="index-content-extend">
    <h2 class="title">{{ $t("home.title") }}</h2>
    <section class="extend-content">
      <div class="container">
        <div class="image-right">
          <cld-image public-id="v1614964460/cbtwines/session-one-horizontal_vbtkpk.png" loading="lazy" quality="auto" />
        </div>
        <div class="image-left">
          <cld-image public-id="v1614965116/cbtwines/session-one-vertical_iyjnvl.png" loading="lazy" quality="auto" />
        </div>
      </div>
      <div class="container">
        <div class="extend-content">
          <h3 class="extend-title">
            {{ $t("home.extend-one.title") }}
          </h3>
          <p class="extend-description">
            {{ $t("home.extend-one.paragraph") }}
          </p>
          <nuxt-link :to="$t('home.extend-one.button_text')" class="button">
            {{ $t("home.extend-one.button_text") }}
          </nuxt-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
};
</script>

<style lang="scss">
.index-content-extend {
  padding-top: 4rem;
  box-shadow: inset -50vw 32em #FFF6F6;
  background: #E6CFCF;
  height: 1200px;
  .title {
    font-size: 2.7rem;
    color: #A44C4F;
    text-align: center;
    max-width: 90%;
    margin: 0 auto 4rem;
  }
  .container {
    max-width: 1160px;
    padding-left: 40px;
    padding-right: 40px;
    margin-right: auto;
    margin-left: auto;
    position: relative;
    .image-left {
      height: 652px;
      display: block;
      position: relative;
      img {
        max-width: 50%;
        height: 100%;
        object-fit: cover;
      }
    }
    .image-right {
      top: 0;
      right: 75px;
      position: absolute;
      margin-top: 135px;
      height: 394px;
      margin-left: 33.33333333%;
      width: 66.66666667%;
      float: left;
      img {
        float: right;
      }
    }
    .extend-content {
      padding: 3rem;
      margin-top: -220px;
      margin-bottom: 4rem;
      background-color: #fff;
      margin-left: 25%;
      width: 50%;
      .extend-title {
        color: #A44C4F;
        font-size: 3rem;
        margin-bottom: 2rem;
      }
      .extend-description {
        font-family: 'Raleway', sans-serif;
        margin-bottom: 3rem;
        text-align: justify;
      }
      a {
        font-family: 'Raleway', sans-serif;
        padding: 1rem 2rem;
        background: #FFC49A;
        color: #ffffff;
        text-decoration: none;
        border-radius: 8px;
        font-weight: bold;
        letter-spacing: 3px;
      }
    }
  }
}
</style>
