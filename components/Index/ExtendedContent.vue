<template>
  <section class="extend-content">
    <div class="container image-container" :class="{ reverse: reverse }">
      <div class="image-right">
        <cld-image :public-id="$t(`home.extend-${index}.image-right`)" loading="lazy" quality="auto" fetchFormat="auto" />
      </div>
      <div class="image-left">
        <cld-image :public-id="$t(`home.extend-${index}.image-left`)" loading="lazy" quality="auto" fetchFormat="auto" />
      </div>
    </div>
    <div class="container">
      <div class="extend-content">
        <h3 class="extend-title">
          {{ $t(`home.extend-${index}.title`) }}
        </h3>
        <p class="extend-description">
          {{ getDescription($t(`home.extend-${index}.paragraph`)) }}
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
    },
    reverse: {
      type: Boolean,
      default: Boolean
    }
  },
  methods: {
    getDescription (str) {
      const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
      ]
      const monthNamesZh = ["一月", "二月", "三月", "四月", "五月", "六月",
        "七月", "八月", "九月", "十月", "十一月", "十二月"
      ]
      const month = (new Date()).getMonth()
      if (str.includes('{month}')) {
        return this.$i18n.locale === 'en' ? str.replace('{month}', monthNames[month]) : str.replace('{month}', monthNamesZh[month])
      }
      return str
    }
  }
}
</script>

<style lang="scss">
.extend-content {
  .container {
    &.image-container {
      @media (max-width: 768px) {
        display: none;
      }
    }
    max-width: 1160px;
    padding-left: 40px;
    padding-right: 40px;
    margin-right: auto;
    margin-left: auto;
    position: relative;
    @media (max-width: 768px) {
      padding-left: 0;
      padding-right: 0;
    }
    .image-left {
      height: 652px;
      display: block;
      position: relative;
      img {
        max-width: 53%;
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
      @media (max-width: 768px) {
        margin: 0 auto 4rem;
        padding: 1rem 1rem 2rem;
        width: 90%;
      }
      .extend-title {
        color: #A44C4F;
        font-size: 3rem;
        margin-bottom: 2rem;
        @media (max-width: 768px) {
          font-size: 2rem;
        }
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
        @media (max-width: 768px) {
          letter-spacing: 2px;
        }
      }
    }
  }
  .reverse .image-right {
    left: 20px;
    right: 0;
    margin-left: 5%;
    img {
      float: left;
    }
  }
  .reverse .image-left img {
    margin-left: 47%;
  }
}
</style>
