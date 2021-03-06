<template>
  <section class="extend-content">
    <div class="container">
      <div class="image-right">
        <cld-image :public-id="$t(`home.extend-${index}.image-right`)" loading="lazy" quality="auto" />
      </div>
      <div class="image-left">
        <cld-image :public-id="$t(`home.extend-${index}.image-left`)" loading="lazy" quality="auto" />
      </div>
    </div>
    <div class="container">
      <div class="extend-content">
        <h3 class="extend-title">
          {{ $t(`home.extend-${index}.title`) }}
        </h3>
        <p class="extend-description">
          {{ $t(`home.extend-${index}.paragraph`) }}
        </p>
        <nuxt-link :to="$t(`home.extend-${index}.button_url`)" class="button">
          {{ $t(`home.extend-${index}.button_text`) }}
        </nuxt-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ExtendedContent",
  props: {
    index: {
      type: Number,
      default: Number
    }
  }
}
</script>

<style lang="scss">
.extend-content {
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
