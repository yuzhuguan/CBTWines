<template>
  <div class="index-content-extend">
    <h2 class="title">{{ $t("home.title") }}</h2>
    <div v-for="i in 3" :key="i">
      <ExtendedContent :index="i" :reverse="i%2 === 0" />
    </div>
    <div class="extend-bottom" />
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  components: {
    ExtendedContent: () => import('../components/Index/ExtendedContent')
  }
}
</script>

<style lang="scss">
.index-content-extend {
  padding-top: 4rem;
  box-shadow: inset -50vw 32em #FFF6F6;
  background: #E6CFCF;
  height: auto;
  @media (max-width: 768px) {
    box-shadow: inset -50vw 25em #FFF6F6;
  }
  .title {
    font-size: 2.7rem;
    color: #A44C4F;
    text-align: center;
    max-width: 90%;
    margin: 0 auto 4rem;
    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }
  .extend-bottom {
    margin-top: -500px;
    height: 500px;
    background: #FFF6F6;
    @media (max-width: 768px) {
      margin-top: -200px;
      height: 200px;
    }
  }
}
</style>
