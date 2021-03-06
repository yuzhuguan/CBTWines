<template>
  <div class="index-content-extend">
    <h2 class="title">{{ $t("home.title") }}</h2>
    <div v-for="i in 2" :key="i">
      <ExtendedContent :index="i" :reverse="i%2 === 0" />
    </div>
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
  .title {
    font-size: 2.7rem;
    color: #A44C4F;
    text-align: center;
    max-width: 90%;
    margin: 0 auto 4rem;
  }
}
</style>
