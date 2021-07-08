<template>
  <v-list v-show="showList" class="hover-list" @mouseover="showList = true" @mouseout="showList = false">
    <v-list-item class="line" />
    <span v-for="(item, index) in items" :key="index">
      <v-list-item class="hover-list-item">
        <v-list-item-title>
          <nuxt-link :to="type === 'lang-switcher'? switchLocalePath(item.locale) : item.link">
            <span v-if="type !== 'lang-switcher'">{{ item.title }}</span>
            <img v-else :src="item.flag" alt="Country Flag" width="40px" height="40px">
          </nuxt-link>
        </v-list-item-title>
      </v-list-item>
      <v-list-item class="line" />
    </span>
  </v-list>
</template>

<script>
export default {
  name: 'NavHoverList',
  props: {
    items: {
      default: Array,
      type: Array
    },
    showList: {
      default: Boolean,
      type: Boolean
    },
    type: {
      default: 'default',
      type: String
    }
  }
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
        a {
          color: white!important;
        }
      }

      & + .line {
        width: 100%;
      }
    }
  }
}
</style>
