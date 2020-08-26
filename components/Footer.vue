<template>
  <div class="footer">
    <p class="footer-content">
      <span v-if="!onMobile || $i18n.locale === 'en'">Under the law of Hong Kong, intoxicating liquor must not be sold or supplied to a minor (under 18) in the course of business.</span>
      <span v-if="!onMobile || !($i18n.locale === 'en')">根據香港法律,不得在業務過程中,向未成年人(18歲以下人士)售賣或供應令人醺醉的酒類。 </span>
    </p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      width: -1
    }
  },
  mounted () {
    this.width = window.innerWidth
    window.addEventListener('resize', this.onResize())
  },
  computed: {
    onMobile() {
      if (process.client) {
        if (this.width <= 460) {
          return true
        }
        else {
          return false
        }
      }
    }
  },
  destroyed() {
    window.removeEventListener('resize', this.onResize())
  },
  method: {
    onResize() {
      this.width = window.innerWidth
    }
  }
};
</script>

<style lang="scss">
.footer {
  width: 100%;
  height: 50px;
  background-color: #413C3C;
  position: relative;
  @media (max-width: 375px) {
    height: 70px;
  }
  .footer-content {
    color: #FFFFFF;
    margin: 0;
    position: absolute;
    top: 50%;
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
    text-align: center;
    width: 100%;
    padding: 0 4.5%;
    font-size: 15px;
    @media (max-width: 1330px) {
      font-size: 13px;
    }
  }
}
</style>
