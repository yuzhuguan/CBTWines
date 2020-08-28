<template>
  <v-list class="hover-list" v-show="showList" @mouseover="showList = true" @mouseout="showList = false">
    <v-list-item class="line"/>
    <span v-for="(item, index) in items" :key="index">
      <v-list-item class="hover-list-item">
        <v-list-item-title><nuxt-link :to="item.link">{{ item.title }}</nuxt-link></v-list-item-title>
      </v-list-item>
      <v-list-item class="line"/>
    </span>
  </v-list>
</template>

<script>
export default {
  name: "NavHoverList",
  props: [
    "items", "showList"
  ]
}
</script>

<style lang="scss" scoped>
.hover-list {
  text-align: center;
  position: absolute;
  z-index: 1;
  width: 100%;
  top: 68px;
  padding: 0;

  .line {
    width: 44px;
    height: 1px;
    background: #ebc7d9;
    min-height: 1px;
    margin: 0 auto 0;
    transition: 0.8s;
  }

  &-item {
    min-height: 45px;
    transition: 0.8s;
    padding: 0;
    &:hover {
      cursor: pointer;
      background: #ebc7d9;

      & .v-list-item__title {
        color: white;
      }

      & + .line {
        width: 100%;
      }
    }
  }
}
</style>
